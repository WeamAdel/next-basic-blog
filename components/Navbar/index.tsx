import React from "react";
import { Flex } from "antd";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import styles from "./styles.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className="container">
				<Flex gap={16}>
					<Link href={ROUTES.home.path}>Posts</Link>
					<Link href={ROUTES.createPost.path}>Create Post</Link>
				</Flex>
			</div>
		</nav>
	);
}
