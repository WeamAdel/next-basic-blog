import { message } from "antd";
import { useQuery, type UseQueryResult } from "react-query";
import { getPost } from "@/app/post/[id]/actions";
import type { Post } from "@/models/Post";
import type { QueryOptions } from "@/types/query";

export function useGetPostQuery(
	id: string,
	options?: QueryOptions,
): UseQueryResult<{ post: Post; error: string }> {
	return useQuery(
		["post", id],
		() => {
			return getPost(id)
				.then((res) => res)
				.catch((err) => {
					message.error(err.message);
				});
		},
		options,
	);
}
