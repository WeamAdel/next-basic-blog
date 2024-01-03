import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DeletePost from ".";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation");
jest.mock("react-query");

describe("Delete post component", () => {
	it.only("should show the confirmation modal on delete click", async () => {
		render(<DeletePost id="10" />);

		const deleteBtn = await screen.findByTestId("delete-post-btn");

		await userEvent.click(deleteBtn);

		const modal = await screen.findByTestId("delete-post-modal");

		expect(modal).toBeInTheDocument();
		expect(modal).toHaveTextContent(
			"Are you sure you want to delete this post?",
		);
	});
});
