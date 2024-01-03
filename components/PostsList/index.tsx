import React from "react";
import { Empty } from "antd/lib";
import PostCard from "@/components/PostCard";
import styles from "./styles.module.css";
import { getPosts } from "./actions";

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
