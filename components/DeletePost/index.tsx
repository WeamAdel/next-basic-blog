"use client";

import React, { useState } from "react";
import { ROUTES } from "@/constants/routes";
import { queryClient } from "@/providers/QueryProvider";
import { Button, Modal, message } from "antd";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { deletePost } from "./actions";

interface Props {
	id: string;
}

export default function DeletePost({ id }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const { isLoading: isDeleting, mutate: deletePostMutation } = useMutation({
		mutationFn: handleDelete,
	});

	async function handleDelete() {
		return deletePost(id)
			.then(() => {
				queryClient.invalidateQueries({ queryKey: ["post", id] });
				message.success("Post deleted successfully");
				setIsOpen(false);
				router.replace(ROUTES.home.path);
			})
			.catch((err) => {
				message.error(err.message);
			});
	}

	return (
		<>
			<Button
				type="link"
				onClick={() => setIsOpen(true)}
				title="Delete Post"
				danger
			>
				Delete
			</Button>

			<Modal
				open={isOpen}
				okButtonProps={{
					danger: true,
					type: "primary",
					loading: isDeleting,
				}}
				okText="Confirm"
				cancelText="No, cancel"
				cancelButtonProps={{
					type: "default",
				}}
				onOk={() => deletePostMutation()}
				onCancel={() => setIsOpen(false)}
			>
				<h2>Are you sure you want to delete this post?</h2>
				<p>This action is irreversible.</p>
			</Modal>
		</>
	);
}
