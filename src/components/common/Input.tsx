import classNames from "classnames";
import React, { ChangeEvent } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
  label: string;
}

const Input = ({
  value,
  onChange,
  name,
  className,
  label,
  type = "text",
  ...rest
}: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label className="flex flex-col">
      <div className="cursor-pointer">{label}</div>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleInputChange}
        className={classNames(
          "py-1 px-2 border border-solid border-gray-500 rounded",
          className
        )}
        {...rest}
      />
    </label>
  );
};

export default Input;
