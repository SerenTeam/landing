import { type ReactNode } from "react";

const SIZES = {
  md: "h-16 w-16",
  sm: "h-10 w-10",
} as const;

const TONES = {
  primary: "bg-primary-light",
  violet: "bg-violet-light/50",
} as const;

export default function IconBadge({
  children,
  tone = "primary",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${SIZES[size]} ${TONES[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
