import React from "react";
import { Button, Form, Input, Space } from "antd";
import Item from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";

export default function PostForm() {
	return (
		<Form name="create-post">
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

				<Button type="primary" htmlType="submit">
					Create Post
				</Button>
			</Space>
		</Form>
	);
}
