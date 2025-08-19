import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../libs/api-client";

export const postsKey = ["get-posts"];

export default function usePosts() {
  return useQuery({
    queryKey: postsKey,
    queryFn: fetchPosts,
  });
}

const fetchPosts = async () => {
  try {
    const response = await apiClient.get("/posts");
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
