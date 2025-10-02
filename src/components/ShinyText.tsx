import type { CSSProperties, FC, ReactNode } from "react";

interface ShinyTextProps {
  text?: string;
  children?: ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: FC<ShinyTextProps> = ({
  text,
  children,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  const maskStyle: CSSProperties = disabled
    ? {}
    : {
        maskImage: `linear-gradient(-75deg, rgba(255,255,255,0.6) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 70%)`,
        WebkitMaskImage: `linear-gradient(-75deg, rgba(255,255,255,0.6) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 70%)`,
        maskSize: "200%",
        WebkitMaskSize: "200%",
        animation: `shiny-text ${animationDuration} infinite`,
      };

  return (
    <>
      <style>{`
        @keyframes shiny-text {
          0% {
            mask-position: 0%;
            -webkit-mask-position: 0%;
          }
          100% {
            mask-position: 200%;
            -webkit-mask-position: 200%;
          }
        }
      `}</style>
      <span
        className={`inline-block ${className}`}
        style={maskStyle}
      >
        {children || text}
      </span>
    </>
  );
};

export default ShinyText;

