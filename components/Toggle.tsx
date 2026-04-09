"use client";

type ToggleOption = {
  value: string;
  label: string;
};

type ToggleProps = {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  /** fullWidth: tabs stretch to fill container (50/50) */
  fullWidth?: boolean;
  className?: string;
};

export default function Toggle({
  options,
  value,
  onChange,
  fullWidth = false,
  className = "",
}: ToggleProps) {
  return (
    <div
      className={`flex border border-border bg-primary p-0.5 ${className}`}
      role="tablist"
      aria-label="Kies jouw rol"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={`
              relative py-2.5 text-[13px] font-semibold tracking-wide
              transition-all duration-200 select-none
              ${fullWidth ? "flex-1 text-center" : "px-5"}
              ${active ? "bg-accent text-primary" : "text-muted/65 hover:text-white"}
            `}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
