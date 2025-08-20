import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../libs/api-client";
import { toast } from "sonner";
import { queryClient } from "../main";
import { postsKey } from "../queries/use-posts";

export const createPostKey = ["create-post"];

export default function useCreatePost() {
  return useMutation({
    mutationKey: createPostKey,
    mutationFn: (data) => createPost(data),
    onMutate: () => {
      toast.loading("Adding post...");
    },
    onSuccess: () => {
      toast.dismiss();
    },
    onSettled: () => {
      queryClient.invalidateQueries(postsKey);
    },
  });
}

const createPost = async (data) => {
  try {
    const response = await apiClient.post("/posts", data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
