import { message } from "antd";
import { PostsService } from "@/services/PostsService";
import { useQuery, type UseQueryResult } from "react-query";
import type { Post } from "@/services/models/Post";
import type { QueryOptions } from "@/types/query";

export function useGetPostQuery(
	id: string,
	options?: QueryOptions,
): UseQueryResult<Post> {
	return useQuery(
		["post", id],
		() => {
			return PostsService.getPost(id)
				.then((res) => res)
				.catch((err) => {
					message.error(err.message);
				});
		},
		options,
	);
}
