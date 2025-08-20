import React, { useState } from "react";
import usePosts from "../../queries/use-posts";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../input-field";
import useCreatePost from "../../mutations/use-create-posts";

const addPostSchema = z.object({
  title: z.string().min(2, "At least 2 characters is required"),
  body: z.string().min(2, "At least 2 characters is required"),
});

export default function PostsList() {
  const [isDataVisible, setIsDataVisible] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(addPostSchema) });

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isPostError,
  } = usePosts();

  const { data, isPending, isError, mutate } = useCreatePost();

  const submitHandler = (data) => {
    mutate(data);
    reset();
    setIsDataVisible(true);
  };

  if (isPostLoading) {
    return <h1>Loading</h1>;
  }

  if (isPostError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div className="flex flex-col items-center max-w-320 mx-auto px-10">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <InputField
          labelFor="Title"
          field="title"
          type="text"
          errorField={errors.title}
          register={register}
        />

        <InputField
          labelFor="Body of Post"
          field="body"
          type="text"
          errorField={errors.body}
          register={register}
        />

        <button
          type="submit"
          onClick={() => setIsDataVisible(!isDataVisible)}
          disabled={isPending}
          className="disabled:bg-blue-200 bg-blue-700 text-white px-4 py-1 font-semibold rounded-lg hover:bg-blue-600 w-fit hover:cursor-pointer my-8 flex items-center gap-2"
        >
          {isPending && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="size-4 text-white animate-spin  fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          )}
          Add Post
        </button>
      </form>

      {/* button */}
      <button
        type="button"
        onClick={() => setIsDataVisible(!isDataVisible)}
        className="bg-red-700 text-white px-4 py-1 font-semibold rounded-lg hover:bg-red-600 w-fit hover:cursor-pointer my-8"
      >
        {isDataVisible ? "Hide" : "Show"} Data
      </button>
      {/* data */}
      {isDataVisible && (
        <div className="">
          {posts?.map((item, index) => (
            <div key={item.id}>
              <h1>
                {index + 1} : {item.title}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
