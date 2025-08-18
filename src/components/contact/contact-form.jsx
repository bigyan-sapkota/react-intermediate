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
    reset,
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
    reset();
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
        <InputField
          labelFor="Name"
          field="name"
          type="text"
          errorField={errors.name}
          register={register}
        />

        {/* Email Field */}
        <InputField
          labelFor="Email"
          field="email"
          type="email"
          errorField={errors.email}
          register={register}
        />

        {/* Password Field */}
        <InputField
          labelFor="Password"
          field="password"
          type={isPasswordVisible ? "text" : "password"}
          errorField={errors.password}
          register={register}
        />

        {/* Confirm Password Field */}
        <InputField
          labelFor="Confirm Password"
          field="confirmPassword"
          type={isPasswordVisible ? "text" : "password"}
          errorField={errors.confirmPassword}
          register={register}
          decorator={
            <button
              type="button"
              className="absolute top-9 right-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          }
        />

        <button className="px-4 py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition">
          Submit
        </button>
      </form>
    </section>
  );
}

const InputField = ({
  labelFor,
  type,
  register,
  field,
  errorField,
  decorator,
}) => {
  return (
    <div
      className="flex flex-col"
      style={{
        position: `${decorator && "relative"}`,
      }}
    >
      <label className="font-semibold capitalize">{labelFor} : </label>
      <input
        type={type}
        className="border border-gray-700 p-2 rounded"
        {...register(field)}
      />
      {decorator && decorator}
      {errorField && (
        <p className="text-red-500 text-sm mt-1">{errorField.message}</p>
      )}
    </div>
  );
};
