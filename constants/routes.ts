export const ROUTES = {
	home: {
		path: "/",
	},
	createPost: {
		path: "/create-post",
	},
	editPost: {
		path: (id: string) => `/edit-post/${id}`,
	},
	postDetails: {
		path: (id: string) => `/posts/${id}`,
	},
};
