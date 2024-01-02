"use client";

import { ROUTES } from "@/constants/routes";
import { useGetPostQuery } from "@/queries/posts";
import { Spin } from "antd";
import { Empty } from "antd/lib";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function PostDetails() {
	const { id } = useParams();
	const {
		data: post,
		error,
		isLoading,
	} = useGetPostQuery(id as string, {
		enabled: Boolean(id),
	});

	if (post) {
		return (
			<main>
				<div className="container">
					<article>
						<h1>{post.title}</h1>
						<p>{post.content}</p>
						<footer>
							<Link href={ROUTES.editPost.path(id as string)}>Edit</Link>
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
				) : isLoading ? (
					<Spin />
				) : (
					<Empty description="Not found" />
				)}
			</div>
		</main>
	);
}
