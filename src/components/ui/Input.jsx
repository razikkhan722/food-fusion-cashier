// src/components/Input.jsx
import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="mb-1 font-semibold">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

export default Input;
