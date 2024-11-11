import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

 const renderWithQueryClient = (ui: JSX.Element) => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/']}>
          {ui}
        </MemoryRouter>
  
      </QueryClientProvider>
    );
  }

  export default renderWithQueryClient;