export default function MarketingLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="h-8 w-2/3 max-w-sm animate-pulse rounded bg-navy/10" />
      <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded bg-navy/5" />
      <div className="mt-2 h-4 w-5/6 max-w-lg animate-pulse rounded bg-navy/5" />
      <div className="mt-8 space-y-3">
        <div className="h-24 animate-pulse rounded-xl bg-navy/5" />
        <div className="h-24 animate-pulse rounded-xl bg-navy/5" />
      </div>
    </div>
  );
}
