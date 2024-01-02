import React from "react";
import { Empty } from "antd/lib";
import { API_ROUTES } from "@/constants/api-routes";
import { PostsResponse } from "@/services/models/Post";
import PostCard from "@/components/PostCard";
import styles from "./styles.module.css";

function getPosts() {
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

export default async function PostsList() {
	const { posts, error } = await getPosts();

	if (error) {
		return <Empty description={error} />;
	}

	if (!posts?.length) {
		return <Empty description="No posts are added yet" />;
	}

	const listJSX = posts.map((post) => <PostCard key={post.id} post={post} />);

	return (
		<section>
			<h2>Posts</h2>
			<div className={styles.list}>{listJSX}</div>
		</section>
	);
}
