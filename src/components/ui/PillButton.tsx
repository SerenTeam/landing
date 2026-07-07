import Link from "next/link";
import { type MouseEventHandler, type ReactNode } from "react";

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "bg-white text-text-secondary shadow-pill hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]",
  "ghost-dark":
    "bg-transparent text-white/80 border border-white/20 hover:border-white/40 hover:text-white",
} as const;

const SIZES = {
  lg: "h-[51px] px-8 text-[18px]",
  md: "h-[42px] px-6 text-[16px]",
} as const;

interface PillButtonProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  ctaLabel?: string;
  ctaPosition?: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export default function PillButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  ctaLabel,
  ctaPosition,
  className = "",
  onClick,
}: PillButtonProps) {
  const cls = `font-display inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const dataAttrs = {
    ...(ctaLabel ? { "data-cta-label": ctaLabel } : {}),
    ...(ctaPosition ? { "data-cta-position": ctaPosition } : {}),
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} onClick={onClick} {...dataAttrs}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cls} onClick={onClick} {...dataAttrs}>
      {children}
    </a>
  );
}
