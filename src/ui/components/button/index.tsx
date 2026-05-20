import { ButtonHTMLAttributes } from "react";

import { cx } from "@/lib";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  isLoading,
  className,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) {
  const commonClasses = "inline-flex items-center justify-center cursor-pointer transition-colors duration-200 rounded rounded-md";
  const sizeClasses = {
    small: "px-4 py-1 text-sm",
    medium: "px-6 py-2",
    large: "px-8 py-3 text-lg",
  };
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
  };
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];

  const classNames = cx(
    commonClasses,
    sizeClass,
    variantClass,
    isLoading && "opacity-50 cursor-not-allowed",
    className,
  );

  return (
    <button
      className={classNames}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {children}
    </button>
  );
}
