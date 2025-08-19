import React, { useState } from "react";
import usePosts from "../../queries/use-posts";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../input-field";

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
  } = useForm({ resolver: zodResolver(addPostSchema) });

  const { data, isLoading, isError } = usePosts();

  const submitHandler = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
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
          onClick={() => setIsDataVisible(!isDataVisible)}
          className="bg-blue-700 text-white px-4 py-1 font-semibold rounded-lg hover:bg-blue-600 w-fit hover:cursor-pointer my-8"
        >
          Add Post
        </button>
      </form>

      {/* button */}
      <button
        onClick={() => setIsDataVisible(!isDataVisible)}
        className="bg-red-700 text-white px-4 py-1 font-semibold rounded-lg hover:bg-red-600 w-fit hover:cursor-pointer my-8"
      >
        {isDataVisible ? "Hide" : "Show"} Data
      </button>
      {/* data */}
      {isDataVisible && (
        <div className="">
          {data?.map((item, index) => (
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
