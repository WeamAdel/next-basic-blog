"use client";

import React from "react";
import { Spin, message, Empty } from "antd";
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { PostsService } from "@/services/PostsService";
import PostForm from "@/components/PostForm";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useGetPostQuery } from "@/queries/posts";
import { queryClient } from "@/providers/QueryProvider";
import type { PostFormData } from "@/services/models/Post";

export default function EditPost() {
	const { id } = useParams();
	const router = useRouter();
	const { isLoading, data, error } = useGetPostQuery(id as string, {
		enabled: Boolean(id),
	});

	const { isLoading: isSubmitting, mutate: addPost } = useMutation({
		mutationFn: (data: PostFormData) => {
			return PostsService.editPost(id as string, data)
				.then(() => {
					router.push(ROUTES.postDetails.path(id as string));
					message.success("The post was edited successfully.");
					queryClient.invalidateQueries({ queryKey: ["post", id] });
				})
				.catch((err) => {
					message.error(err.message);
				});
		},
	});

	const contentJSX = error ? (
		<Empty description="Failed to load post data" />
	) : data ? (
		<PostForm
			isSubmitting={isSubmitting}
			onSubmit={addPost}
			initialValues={data?.post}
		/>
	) : (
		<Empty description="Not found" />
	);

	return (
		<main>
			<div className="container">
				<h1>Edit {data?.post ? data.post.title : "Post"}</h1>
				{isLoading ? <Spin /> : contentJSX}
			</div>
		</main>
	);
}
