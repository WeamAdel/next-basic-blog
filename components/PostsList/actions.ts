"use server";

import { API_ROUTES } from "@/constants/api-routes";
import { flattenData } from "@/utils/formatters";
import type { PostsResponse } from "@/models/Post";

export async function getPosts() {
	return fetch(API_ROUTES.getPosts.path, {
		method: API_ROUTES.getPosts.method,
		next: {
			revalidate: 60,
			tags: ["posts"],
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json() as Promise<PostsResponse>;
			}

			throw new Error("Failed to get posts, try again later");
		})
		.then((res) => {
			if (res) {
				const posts = flattenData(res);

				return { posts, error: null };
			}

			return { posts: [], error: null };
		})
		.catch(() => {
			return { posts: [], error: "Failed to get posts, try again later" };
		});
}
