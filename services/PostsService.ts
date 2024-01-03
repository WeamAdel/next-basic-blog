import { API_ROUTES } from "@/constants/api-routes";
import type {
	CreatePostResponse,
	Post,
	PostFormData,
	PostsResponse,
} from "./models/Post";

export class PostsService {
	public static createPost(data: PostFormData) {
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
				return res.name;
			})
			.catch(() => {
				throw new Error("Failed to create post, try again later");
			});
	}

	public static editPost(id: string, data: PostFormData) {
		return fetch(API_ROUTES.editPost.path(id), {
			method: API_ROUTES.editPost.method,
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed edit the post, try again later");
				} else {
					return res.json() as Promise<CreatePostResponse>;
				}
			})
			.catch(() => {
				throw new Error("Failed edit the post, try again later");
			});
	}

	public static getPost(id: string) {
		return fetch(API_ROUTES.getPost.path(id), {
			method: API_ROUTES.getPost.method,
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to get post, try again later");
				} else {
					return res.json() as Promise<Post>;
				}
			})
			.then((res) => {
				return res;
			})
			.catch(() => {
				throw new Error("Failed to get post, try again later");
			});
	}

	public static deletePost(id: string) {
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
				return res;
			})
			.catch(() => {
				throw new Error("Failed to delete post, try again later");
			});
	}

	public static getPosts() {
		return fetch(API_ROUTES.getPosts.path, {
			method: API_ROUTES.getPosts.method,
			next: {
				revalidate: 1,
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
					const posts = Object.entries(res).map(([id, post]) => {
						return {
							id,
							...post,
						};
					});

					return { posts, error: null };
				}

				return { posts: [], error: null };
			})
			.catch(() => {
				return { posts: [], error: "Failed to get posts, try again later" };
			});
	}
}
