type ReviewPlatform = "google" | "facebook" | "trustpilot";

export interface ReviewPlatformItem {
  countLabel: string;
  platform: ReviewPlatform;
  platformLabel: string;
  rating: string;
  summary: string;
}

interface ReviewPlatformBadgeProps {
  item: ReviewPlatformItem;
}

export function ReviewPlatformBadge({ item }: ReviewPlatformBadgeProps) {
  return (
    <div className="inline-flex w-full max-w-full items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur-sm sm:w-auto">
      <PlatformLogo platform={item.platform} />
      <div className="min-w-0 text-start">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold text-sm text-white sm:text-base">
            {item.rating}
          </span>
          <span aria-hidden className="flex items-center gap-0.5 text-gold">
            {["s1", "s2", "s3", "s4", "s5"].map((starId) => (
              <StarIcon key={starId} />
            ))}
          </span>
          <span className="font-medium text-sm text-white/90">
            {item.platformLabel}
          </span>
        </div>
        <p className="mt-0.5 text-white/75 text-xs sm:text-sm">
          {item.summary}
        </p>
        <p className="text-white/60 text-xs">{item.countLabel}</p>
      </div>
    </div>
  );
}

function PlatformLogo({ platform }: { platform: ReviewPlatform }) {
  switch (platform) {
    case "google":
      return <GoogleLogo />;
    case "facebook":
      return <FacebookLogo />;
    case "trustpilot":
      return <TrustpilotLogo />;
    default:
      return null;
  }
}

function GoogleLogo() {
  return (
    <svg
      aria-hidden="true"
      className="size-9 shrink-0 sm:size-10"
      focusable="false"
      viewBox="0 0 48 48"
    >
      <path
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        fill="#FFC107"
      />
      <path
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
        fill="#FF3D00"
      />
      <path
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.96 11.96 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
        fill="#4CAF50"
      />
      <path
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
        fill="#1976D2"
      />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg
      aria-hidden="true"
      className="size-9 shrink-0 sm:size-10"
      focusable="false"
      viewBox="0 0 48 48"
    >
      <path
        d="M24 4C12.95 4 4 12.95 4 24c0 9.98 7.31 18.25 16.88 19.78V29.69h-5.08V24h5.08v-4.34c0-5.02 2.99-7.79 7.56-7.79 2.19 0 4.48.39 4.48.39v4.93h-2.52c-2.49 0-3.26 1.54-3.26 3.12V24h5.56l-.89 5.69h-4.67v14.09C36.69 42.25 44 33.98 44 24 44 12.95 35.05 4 24 4z"
        fill="#1877F2"
      />
      <path
        d="M33.15 29.69L34.04 24h-5.56v-3.69c0-1.58.78-3.12 3.26-3.12h2.52v-4.93s-2.29-.39-4.48-.39c-4.57 0-7.56 2.77-7.56 7.79V24h-5.08v5.69h5.08v14.09a20.2 20.2 0 006.24 0V29.69h4.67z"
        fill="#fff"
      />
    </svg>
  );
}

function TrustpilotLogo() {
  return (
    <svg
      aria-hidden="true"
      className="size-9 shrink-0 sm:size-10"
      focusable="false"
      viewBox="0 0 48 48"
    >
      <rect fill="#00B67A" height="40" rx="8" width="40" x="4" y="4" />
      <path
        d="M24 12.5l2.7 8.3H35l-6.9 5 2.7 8.2L24 28.9l-6.8 5.1 2.7-8.2-6.9-5h8.3L24 12.5z"
        fill="#fff"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 sm:size-4"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 20 20"
    >
      <path d="M10 1.5l2.4 5.2 5.6.7-4.2 3.8 1.1 5.5L10 14.3 5.1 16.7l1.1-5.5L2 7.4l5.6-.7L10 1.5z" />
    </svg>
  );
}
