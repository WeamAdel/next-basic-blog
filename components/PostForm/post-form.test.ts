import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import PostForm from ".";
import { mockMatchMedia } from "@/__mocks__/mach-media-mock";

describe("Post form component", () => {
	let originalMatchMedia: any;

	beforeAll(() => {
		originalMatchMedia = window.matchMedia;
	});

	afterEach(() => {
		window.matchMedia = originalMatchMedia;
	});

	it("should have a title and content inputs", async () => {
		window.matchMedia = jest.fn().mockImplementation(mockMatchMedia);
		render(<PostForm isSubmitting={false} onSubmit={jest.fn()} />);

		const title = await screen.getByTestId("title-input");
		const content = await screen.getByTestId("content-input");

		expect(title).toBeInTheDocument();
		expect(content).toBeInTheDocument();

		expect(title).toHaveAccessibleName("Title");
		expect(content).toHaveAccessibleName("Content");
	});

	it("should show validation errors on submit", async () => {
		window.matchMedia = jest.fn().mockImplementation(mockMatchMedia);
		render(<PostForm isSubmitting={false} onSubmit={jest.fn()} />);

		const submitBtn = await screen.getByTestId("post-submit-btn");
		await userEvent.click(submitBtn);

		const title = await screen.getByTestId("title-input");
		const content = await screen.getByTestId("content-input");

		expect(title).toHaveAttribute("aria-invalid", "true");
		expect(content).toHaveAttribute("aria-invalid", "true");
	});
});
