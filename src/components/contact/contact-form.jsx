import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Fixed schema with confirm password and proper email validation
const registrationSchema = z
  .object({
    name: z.string().min(2, "Name must be 2 or more characters long"),
    email: z.string().email("The given email is invalid"),
    password: z
      .string()
      .min(6, "Password should contain at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function ContactForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <section className="my-10">
      <h1 className="text-4xl font-bold text-center mt-10">
        Registration Form
      </h1>

      <form
        className="px-10 space-y-4 max-w-md mx-auto"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="font-semibold capitalize">Name : </label>
          <input
            type="text"
            className="border border-gray-700 p-2 rounded"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="font-semibold capitalize">Email : </label>
          <input
            type="email"
            className="border border-gray-700 p-2 rounded"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col relative">
          <label className="font-semibold capitalize">Password: </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="border border-gray-700 p-2 rounded w-full"
            {...register("password")}
          />
          <button
            type="button"
            className="absolute top-9 right-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col relative">
          <label className="font-semibold capitalize">Confirm Password: </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="border border-gray-700 p-2 rounded w-full"
            {...register("confirmPassword")}
          />
          <button
            type="button"
            className="absolute top-9 right-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button className="px-4 py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition">
          Submit
        </button>
      </form>
    </section>
  );
}
