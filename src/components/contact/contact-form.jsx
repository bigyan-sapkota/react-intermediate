import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";

// const registrationSchema = z.object({
//   name: z.string().min(2, "Name must be 2 or more characters long"),
//   email: z.email("The given email is invalid"),
//   password: z.string().min(6, "Password should contain at least 6 characters"),
// });

export default function ContactForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="my-10">
      <h1 className="text-4xl font-bold text-center mt-10">
        Registration Form
      </h1>

      <form
        className="px-10 space-y-4"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {/* name */}
        <div className="flex flex-col">
          <label className="font-semibold capitalize">Name : </label>
          <input
            type="text"
            className="border border-gray-700 p-1 text-sm"
            {...register("name")}
          />
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label className="font-semibold capitalize">Email : </label>
          <input
            type="email"
            className="border border-gray-700 p-1 text-sm"
            {...register("email")}
          />
        </div>

        {/* password */}
        <div className="relative">
          <label className="font-semibold capitalize">Password: </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="border-gray-700 border w-full py-1 px-1"
            {...register("password")}
          />
        </div>

        {/* confirm password */}
        <div className="relative">
          <label className="font-semibold capitalize">Confirm Password: </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="border-gray-700 border w-full py-1 px-1"
          />

          {/* eye icon */}
          <button
            type="button"
            className="absolute top-8 right-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <button className="px-4 py-2 bg-purple-700 text-white font-semibold">
          Submit
        </button>
      </form>
    </section>
  );
}

const Input = ({ labelName, inputType }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold capitalize">{labelName} : </label>
      <input type={inputType} className="border border-gray-700 p-1 text-sm" />
    </div>
  );
};
