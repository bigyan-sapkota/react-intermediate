import React from "react";

export default function InputField({
  labelFor,
  type,
  register,
  field,
  errorField,
  decorator,
}) {
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
}
