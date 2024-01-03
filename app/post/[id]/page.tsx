import React from "react";
import { Flex } from "antd";
import Link from "next/link";
import { Empty } from "antd/lib";
import { ROUTES } from "@/constants/routes";
import { PostsService } from "@/services/PostsService";
import DeletePost from "@/components/DeletePost";

interface Props {
	params: {
		id: string;
	};
}

export default async function PostDetails({ params: { id } }: Props) {
	const { post, error } = await PostsService.getPost(id);

	if (post) {
		return (
			<main>
				<div className="container">
					<article>
						<h1>{post.title}</h1>
						<p>{post.content}</p>
						<footer>
							<Flex gap={16} align="center">
								<Link href={ROUTES.editPost.path(id as string)}>Edit</Link>
								<DeletePost id={id as string} />
							</Flex>
						</footer>
					</article>
				</div>
			</main>
		);
	}

	return (
		<main>
			<div className="container">
				<h1>Post Details</h1>

				{error ? (
					<Empty description="Failed to load the post data" />
				) : (
					<Empty description="Not found" />
				)}
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	const { posts } = await PostsService.getPosts();

	return posts?.map((post) => ({
		id: post.id,
	}));
}
