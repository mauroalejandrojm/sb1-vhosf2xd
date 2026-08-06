import React from "react";

interface SectionLabelProps {
  eyebrow: string;
  title: string;
  fullBleed?: boolean;
  className?: string;
}

export default function SectionLabel({
  eyebrow,
  title,
  fullBleed = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`mb-12 flex w-full items-center gap-3 ${className}`}>
      <span className="shrink-0 text-xs font-mono font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
        {eyebrow}
      </span>

      <span className="h-1 w-1 shrink-0 rounded-full bg-teal-500 dark:bg-teal-400" />

      <span className="shrink-0 text-xs font-mono font-semibold tracking-widest uppercase text-teal-500 dark:text-teal-400">
        {title}
      </span>

      {!fullBleed ? (
        <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
      ) : (
        <span className="relative h-px flex-1">
          <span className="absolute inset-y-0 left-0 w-[calc(100vw-100%)] bg-slate-200 dark:bg-white/10" />
        </span>
      )}
    </div>
  );
}