import { type ReactNode } from "react";

export default function SectionHeading({
  kicker,
  title,
  lead,
  className = "",
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-xl ${className}`}>
      <p className="font-display mb-2 text-[11px] font-medium uppercase tracking-[1.5px] text-primary">
        {kicker}
      </p>
      <h2 className="font-sans mb-4 text-[28px] font-normal leading-[1.3] text-text sm:text-[32px] lg:text-[36.5px] lg:leading-[1.315]">
        {title}
      </h2>
      {lead && (
        <p className="font-display text-[17px] font-medium leading-[1.6] text-text-secondary lg:text-[19.5px] lg:leading-[1.64]">
          {lead}
        </p>
      )}
    </div>
  );
}
