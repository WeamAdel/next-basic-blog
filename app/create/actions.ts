"use server";

import { API_ROUTES } from "@/constants/api-routes";
import { revalidateTag } from "next/cache";
import type { CreatePostResponse, PostFormData } from "@/models/Post";

export async function createPost(data: PostFormData) {
	return fetch(API_ROUTES.createPost.path, {
		method: API_ROUTES.createPost.method,
		body: JSON.stringify(data),
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to create post, try again later");
			} else {
				return res.json() as Promise<CreatePostResponse>;
			}
		})
		.then((res) => {
			revalidateTag("posts");
			return res.name;
		})
		.catch((err) => {
			console.log(err);

			throw new Error("Failed to create post, try again later");
		});
}
