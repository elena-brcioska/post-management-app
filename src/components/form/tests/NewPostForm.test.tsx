/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import NewPostForm from '../NewPostForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import user from "@testing-library/user-event"

const router = createMemoryRouter(
    [{ path: "/new", element: <NewPostForm /> }],
    { initialEntries: ["/new"] },
);

const renderForm = () => {
    const queryClient = new QueryClient();

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );

}

describe("New Post Form", () => {

    it("renders the four fields", () => {

        renderForm();

        const inputFields = screen.getAllByRole("textbox");
        expect(inputFields).toHaveLength(4);
    });

    it("renders the correct fields", () => {

        renderForm();

        const titleField = screen.getByLabelText(/title/i);
        const descriptionField = screen.getByLabelText(/description/i);
        const authorField = screen.getByLabelText(/author/i);
        const imageField = screen.getByLabelText(/image/i);

        expect(titleField).toBeInTheDocument();
        expect(descriptionField).toBeInTheDocument();
        expect(authorField).toBeInTheDocument();
        expect(imageField).toBeInTheDocument();

    })

    it("calls onSubmit when button is clicked", async () => {

        const onSubmit = jest.fn();

        renderForm();

        const submitButton = screen.getByRole("button", {name: /add post/i});
        const form = screen.getByTestId("new-post-form");
        form.onsubmit = onSubmit;

        expect(form).toBeInTheDocument()

        await user.click(submitButton);

        expect(onSubmit).toHaveBeenCalled();

    })

    it("submits the data that the user passed", async () => {

        const argList: string[] = [];
        const callback = (e: SubmitEvent) => {
            const formData = new FormData(e.target as HTMLFormElement);

            argList.push(formData.get("title") as string);
            argList.push(formData.get("description") as string);
            argList.push(formData.get("image") as string);
            argList.push(formData.get("author") as string);
        }

        renderForm();

        const submitButton = screen.getByRole("button", {name: /add post/i});
        const form = screen.getByTestId("new-post-form");
        form.onsubmit = callback;

        const titleField = screen.getByLabelText(/title/i);
        const descriptionField = screen.getByLabelText(/description/i);
        const imageField = screen.getByLabelText(/image/i);
        const authorField = screen.getByLabelText(/author/i);

        await user.click(titleField);
        await user.keyboard("Test title");

        await user.click(descriptionField);
        await user.keyboard("Test description");

        await user.click(imageField);
        await user.keyboard("https://test/test.jpg");

        await user.click(authorField);
        await user.keyboard("test author");

        await user.click(submitButton);

        expect(argList).toEqual(["Test title", "Test description", "https://test/test.jpg", "test author"])
    })
});
