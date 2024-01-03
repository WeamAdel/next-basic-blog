"use server";

import { API_ROUTES } from "@/constants/api-routes";
import type { Post } from "@/models/Post";

export async function getPost(id: string) {
	return fetch(API_ROUTES.getPost.path(id), {
		method: API_ROUTES.getPost.method,
		next: {
			revalidate: 60,
			tags: [id],
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Failed to get post, try again later");
			} else {
				return res.json() as Promise<Post>;
			}
		})
		.then((res) => {
			return { post: res, error: null };
		})
		.catch(() => {
			return { post: null, error: "Failed to get post, try again later" };
		});
}
