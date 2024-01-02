"use client";

import React from "react";
import { message } from "antd";
import { useMutation } from "react-query";
import { queryClient } from "@/providers/QueryProvider";
import { PostsService } from "@/services/PostsService";
import PostForm from "@/components/PostForm";
import type { PostFormData } from "@/services/models/Post";

export default function CreatePost() {
	const { isLoading: isSubmitting, mutate: addPost } = useMutation({
		mutationFn: (data: PostFormData) => {
			return PostsService.createPost(data)
				.then(() => {
					message.success("The post was created successfully.");
					queryClient.invalidateQueries({ queryKey: ["posts"] });
				})
				.catch((err) => {
					message.error(err.message);
				});
		},
	});

	return (
		<main>
			<div className="container">
				<h1>Create Post</h1>
				<PostForm isSubmitting={isSubmitting} onSubmit={addPost} />
			</div>
		</main>
	);
}
