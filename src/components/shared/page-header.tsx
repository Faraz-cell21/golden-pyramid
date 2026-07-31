interface PageHeaderProps {
  description?: string;
  title: string;
}

export function PageHeader({ description, title }: PageHeaderProps) {
  return (
    <header className="mb-6 space-y-2 sm:mb-8 sm:space-y-3">
      <h1 className="font-semibold text-2xl text-navy tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-navy/75 text-sm leading-relaxed sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
