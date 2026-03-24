import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
};

export function FormField({
  label,
  name,
  type = "text",
  required,
  className,
  as = "input",
  children,
}: FormFieldProps) {
  const base =
    "mt-2 w-full rounded-md border border-haze/70 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-olive";

  return (
    <label className={cn("block text-sm text-ink", className)}>
      <span className="font-medium">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} required={required} className={cn(base, "min-h-[120px]")} />
      ) : as === "select" ? (
        <select name={name} required={required} className={base}>
          {children}
        </select>
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
