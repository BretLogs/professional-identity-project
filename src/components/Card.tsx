import type { FC, ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  transparent?: boolean;
  blur?: boolean;
  border?: boolean;
}

const Card: FC<CardProps> = ({
  children,
  transparent = false,
  blur = true,
  border = true,
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-2xl overflow-hidden";
  const backgroundStyles = transparent
    ? blur
      ? "bg-transparent backdrop-blur-2xl"
      : "bg-transparent"
    : "bg-white";
  const borderStyles = border ? "border border-white/20 shadow-2xl" : "";

  return (
    <div
      className={`${baseStyles} ${backgroundStyles} ${borderStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

