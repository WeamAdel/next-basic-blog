import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ROUTES } from "@/constants/routes";
import PostCard from ".";

describe("PostCard component", () => {
	it("should render the post card with correct data", async () => {
		const post = { id: "1", title: "Blog title", content: "Blog content" };
		const postLink = ROUTES.postDetails.path(post.id);

		render(<PostCard post={post} />);

		const titleElem = await screen.findByTestId("post-title");
		const linkElem = await screen.findByTestId("post-link");

		expect(titleElem).toHaveTextContent("Blog title");
		expect(linkElem).toHaveAttribute("href", postLink);
	});
});
