export type Post = {
	id: string;
	title: string;
	content: string;
};

export type PostFormData = {
	title: string;
	content: string;
};

export type CreatePostResponse = {
	name: string;
};

export type PostsResponse = Record<string, PostFormData>;
