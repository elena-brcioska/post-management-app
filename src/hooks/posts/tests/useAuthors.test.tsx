/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { renderHook, waitFor } from '@testing-library/react';
import { fetchPosts } from '../../../endpoints/posts';
import useAuthors from '../useAuthors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock("../../../endpoints/posts");
const mockedFetchPosts = fetchPosts as jest.Mock;

const renderWrapper = () => {
  const queryClient = new QueryClient();

  return({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

}

  describe("useAuthors", () => {

    it("fetches the data, and returns the authors", async () => {

       mockedFetchPosts.mockResolvedValue({
        posts: [
          { author: 'Author 1', title: 'Post 1' },
          { author: 'Author 2', title: 'Post 2' },
        ],
        totalCount: 2,
      });

      const { result } = renderHook(() => useAuthors(), {
        wrapper: renderWrapper()
      })

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.authors).toEqual(["Author 1", "Author 2"])

    })

  })