"use client";

import React from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useMutation } from "react-query";
import { createPost } from "./actions";
import PostForm from "@/components/PostForm";
import type { PostFormData } from "@/models/Post";

export default function CreatePost() {
	const router = useRouter();
	const { isLoading: isSubmitting, mutate: addPost } = useMutation({
		mutationFn: (data: PostFormData) => {
			return createPost(data)
				.then((id) => {
					message.success("The post was created successfully.");
					router.push(ROUTES.postDetails.path(id as string));
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
