import Link from "next/link";
import { Flex } from "antd";
import { ROUTES } from "@/constants/routes";
import PostsList from "@/components/PostsList/index";

export default function Home() {
	return (
		<main>
			<div className="container">
				<header>
					<Flex align="center" justify="space-between" wrap="wrap" gap={16}>
						<h1>Blog</h1>

						<Link href={ROUTES.createPost.path}>Create Post</Link>
					</Flex>
				</header>

				<PostsList />
			</div>
		</main>
	);
}
