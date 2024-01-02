const API_URL = "https://next-basic-blog-241df-default-rtdb.firebaseio.com";
const POSTS_ENDPOINT = `${API_URL}/posts.json`;

export const API_ROUTES = {
	getPosts: {
		method: "GET",
		path: POSTS_ENDPOINT,
	},
	createPost: {
		method: "POST",
		path: POSTS_ENDPOINT,
	},
	editPost: {
		method: "PUT",
		path: (id: string) => `${API_URL}/posts/${id}.json`,
	},
};
