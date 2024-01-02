import React from "react";
import { Button, Form, Input, Space } from "antd";
import Item from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import type { PostFormData } from "@/services/models/Post";

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
		<Form initialValues={initialValues} name="create-post" onFinish={onSubmit}>
			<Space className="w-100" direction="vertical" size={20}>
				<Space className="w-100" direction="vertical" size={16}>
					<Item
						name="title"
						rules={[
							{
								required: true,
								message: "Please add a title",
							},
						]}
					>
						<Input className="form-control" placeholder="Title" />
					</Item>

					<Item
						name="content"
						rules={[
							{
								required: true,
								message: "Please add a content",
							},
						]}
					>
						<TextArea placeholder="Content" />
					</Item>
				</Space>

				<Button loading={isSubmitting} type="primary" htmlType="submit">
					{initialValues ? "Save Changes" : "Create Post"}
				</Button>
			</Space>
		</Form>
	);
}
