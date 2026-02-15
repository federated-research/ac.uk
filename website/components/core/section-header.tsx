interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
      )}
      <h2>{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
