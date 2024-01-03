import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import DeletePost from ".";

jest.mock("next/navigation");
jest.mock("react-query");

describe("Delete post component", () => {
	it("should show the confirmation modal on delete click", async () => {
		render(<DeletePost id="10" />);

		const deleteBtn = await screen.findByTestId("delete-post-btn");

		await userEvent.click(deleteBtn);

		const modal = await screen.findByTestId("delete-post-modal");

		expect(modal).toBeInTheDocument();
		expect(modal).toHaveTextContent(
			"Are you sure you want to delete this post?",
		);
	});

	it("should dismiss the modal on cancel button click", async () => {
		render(<DeletePost id="10" />);

		const deleteBtn = await screen.findByTestId("delete-post-btn");

		await userEvent.click(deleteBtn);

		const modal = await screen.findByTestId("delete-post-modal");
		const cancelBtn = await screen.findByTestId("delete-post-cancel-btn");

		await userEvent.click(cancelBtn);

		expect(modal).not.toBeInTheDocument();
	});
});
