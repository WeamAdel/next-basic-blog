"use server";

import { API_ROUTES } from "@/constants/api-routes";
import { revalidateTag } from "next/cache";
import type { Post } from "@/models/Post";

export async function deletePost(id: string) {
	return fetch(API_ROUTES.deletePost.path(id), {
		method: API_ROUTES.deletePost.method,
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to delete post, try again later");
			} else {
				return res.json() as Promise<Post>;
			}
		})
		.then((res) => {
			revalidateTag("posts");
			return res;
		})
		.catch(() => {
			throw new Error("Failed to delete post, try again later");
		});
}
