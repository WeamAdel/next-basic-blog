export const ROUTES = {
	home: {
		path: "/",
	},
	createPost: {
		path: "/create",
	},
	editPost: {
		path: (id: string) => `/post/${id}/edit`,
	},
	postDetails: {
		path: (id: string) => `/post/${id}`,
	},
};
