import type { FC, ReactNode } from "react";

interface BlurTextProps {
  text?: string;
  children?: ReactNode;
  delay?: number;
  className?: string;
}

const BlurText: FC<BlurTextProps> = ({
  text,
  children,
  delay = 0,
  className = "",
}) => {
  const content = children || text || "";
  const letters = typeof content === "string" ? content.split("") : [content];

  return (
    <>
      <style>{`
        @keyframes blur-fade-in {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
      <span className={`inline-block ${className}`}>
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: 0,
              filter: "blur(10px)",
              animation: "blur-fade-in 0.6s ease forwards",
              animationDelay: `${delay + index * 0.03}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </>
  );
};

export default BlurText;

