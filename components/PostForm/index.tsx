import React from "react";
import { Button, Form, Input, Space } from "antd";
import Item from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import type { PostFormData } from "@/models/Post";

interface Props {
	initialValues?: PostFormData;
	isSubmitting: boolean;
	onSubmit: (data: PostFormData) => void;
}

export default function PostForm({
	isSubmitting,
	onSubmit,
	initialValues,
}: Props) {
	return (
		<Form
			layout="vertical"
			initialValues={initialValues}
			name="create-post"
			onFinish={onSubmit}
		>
			<Space className="w-100" direction="vertical" size={20}>
				<Space className="w-100" direction="vertical" size={16}>
					<Item
						label="Title"
						name="title"
						rules={[
							{
								required: true,
								message: "Please add a title",
							},
						]}
					>
						<Input
							maxLength={100}
							className="form-control"
							placeholder="Title"
							count={{ max: 100, show: true }}
							data-testid="title-input"
						/>
					</Item>

					<Item
						label="Content"
						name="content"
						rules={[
							{
								required: true,
								message: "Please add a content",
							},
						]}
					>
						<TextArea
							maxLength={1000}
							count={{ max: 1000, show: true }}
							placeholder="Content"
							data-testid="content-input"
						/>
					</Item>
				</Space>

				<Button
					loading={isSubmitting}
					type="primary"
					htmlType="submit"
					data-testid="post-submit-btn"
				>
					{initialValues ? "Save Changes" : "Create Post"}
				</Button>
			</Space>
		</Form>
	);
}
