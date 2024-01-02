import PostForm from '@/components/PostForm';
import React from 'react';

export default function CreatePost() {
	return (
		<main>
			<div className="container">
				<h1>Create Post</h1>
				<PostForm />
			</div>
		</main>
	);
}
