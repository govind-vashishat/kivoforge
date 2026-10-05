import { cn } from "@/lib/utils";

// Placeholder mark: an isometric "glass box" with a solid lime cube at its core.
export function Logo({
  size = 24,
  strokeWidth = 4,
  className,
  title,
}: {
  size?: number;
  /** In viewBox units (the viewBox is 100 wide). */
  strokeWidth?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {/* inner edges: a "Y" from the centre */}
      <path
        d="M50 50 13.63 29M50 50 86.37 29M50 50V92"
        stroke="#A8AEB8"
        strokeOpacity={0.35}
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
      />
      {/* outer hexagon: the cube's silhouette */}
      <path
        d="M50 8 86.37 29V71L50 92 13.63 71V29Z"
        stroke="#A8AEB8"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* the live core */}
      <path d="M50 35 63 42.5 50 50 37 42.5Z" fill="#E4FF8F" />
      <path d="M37 42.5 50 50V65L37 57.5Z" fill="#C6F432" />
      <path d="M63 42.5V57.5L50 65V50Z" fill="#7E9C14" />
    </svg>
  );
}
