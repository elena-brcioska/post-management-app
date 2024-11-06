import { render, screen } from "@testing-library/react";
import ActionBar from "../ActionBar";

describe("Add New Post Button", () => {
    test("displays Add New Post button", () => {
        render(
            <ActionBar/>
        );

        // Check if the button is rendered
        const button = screen.getByRole("button", { name: /add new post/i });
        expect(button).toBeInTheDocument()
    });
});
