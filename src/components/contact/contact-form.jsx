import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

export default function ContactForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Registration Form
      </h1>

      <form className="px-10 space-y-4">
        <Input labelName="name" inputType="text" />
        <Input labelName="email" inputType="email" />
        <button className="px-4 py-2 bg-purple-700 text-white font-semibold">
          Submit
        </button>

        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="border-gray-700 border w-full py-1"
          />
          <button
            type="button"
            className="absolute top-2 right-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </form>
    </div>
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
