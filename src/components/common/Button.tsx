import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        "px-2 py-1 bg-purple-800 text-white rounded",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
