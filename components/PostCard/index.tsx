import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Post } from "@/services/models/Post";
import styles from "./styles.module.css";

interface Props {
	post: Post;
}

export default function PostCard({ post }: Props) {
	return (
		<article className={styles.card}>
			<h3>{post.title}</h3>
			<Link href={ROUTES.postDetails.path(post.id)}>View details</Link>
		</article>
	);
}
