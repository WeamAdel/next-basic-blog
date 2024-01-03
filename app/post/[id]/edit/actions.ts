"use server";

import { API_ROUTES } from "@/constants/api-routes";
import { revalidateTag } from "next/cache";
import type { Post, PostFormData } from "@/models/Post";

export async function editPost(id: string, data: PostFormData) {
	return fetch(API_ROUTES.editPost.path(id), {
		method: API_ROUTES.editPost.method,
		body: JSON.stringify(data),
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed edit the post, try again later");
			} else {
				return res.json() as Promise<Post>;
			}
		})
		.then((res) => {
			revalidateTag("posts");
			revalidateTag(id);
			return res;
		})
		.catch(() => {
			throw new Error("Failed edit the post, try again later");
		});
}
