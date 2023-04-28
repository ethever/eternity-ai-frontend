import { useMemo } from "react";

export function Wave({ width, color }: { width: number; color: string }) {
  const height = useMemo(() => (18 / 66) * width, [width]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="6" width="2" height="5" fill={color} />
      <rect x="28" y="6" width="2" height="5" fill={color} />
      <rect x="64" y="6" width="2" height="5" fill={color} />
      <rect x="4" y="4" width="2" height="10" fill={color} />
      <rect x="32" y="4" width="2" height="10" fill={color} />
      <rect x="12" y="4" width="2" height="10" fill={color} />
      <rect x="40" y="4" width="2" height="10" fill={color} />
      <rect x="60" y="4" width="2" height="10" fill={color} />
      <rect x="20" y="4" width="2" height="10" fill={color} />
      <rect x="48" y="4" width="2" height="10" fill={color} />
      <rect x="16" y="1" width="2" height="16" fill={color} />
      <rect x="44" y="1" width="2" height="16" fill={color} />
      <rect x="24" y="1" width="2" height="16" fill={color} />
      <rect x="52" y="1" width="2" height="16" fill={color} />
      <rect x="56" y="1" width="2" height="16" fill={color} />
      <rect x="8" width="2" height="18" fill={color} />
      <rect x="36" width="2" height="18" fill={color} />
    </svg>
  );
}
