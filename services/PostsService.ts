import { message } from "antd";
import { API_ROUTES } from "@/constants/api-routes";
import type { CreatePostResponse, PostFormData } from "./models/Post";

export class PostsService {
	public static createPost(data: PostFormData) {
		return fetch(API_ROUTES.createPost.path, {
			method: API_ROUTES.createPost.method,
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to create post");
				} else {
					return res.json() as Promise<CreatePostResponse>;
				}
			})
			.then((res) => {
				return res.name;
			})
			.catch(() => {
				message.error("Failed to create post, try again later");
			});
	}
}
