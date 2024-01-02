"use client";

import React from "react";
import { message } from "antd";
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { PostsService } from "@/services/PostsService";
import PostForm from "@/components/PostForm";
import type { PostFormData } from "@/services/models/Post";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function EditPost() {
	const { id } = useParams();
	const router = useRouter();

	const { isLoading: isSubmitting, mutate: addPost } = useMutation({
		mutationFn: (data: PostFormData) => {
			return PostsService.editPost(id as string, data)
				.then(() => {
					router.push(ROUTES.postDetails.path(id as string));
					message.success("The post was edited successfully.");
				})
				.catch((err) => {
					message.error(err.message);
				});
		},
	});

	return (
		<main>
			<div className="container">
				<h1>Edit Post</h1>
				<PostForm
					isSubmitting={isSubmitting}
					onSubmit={addPost}
					initialValues={{
						title: "Hello",
						content: "World",
					}}
				/>
			</div>
		</main>
	);
}
