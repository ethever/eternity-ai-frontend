import { useMemo } from "react";

export function LogoText({
  variant,
  width,
}: {
  variant: "white" | "black";
  width: number;
}) {
  const height = useMemo(() => (120 / 643) * width, [width]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 643 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.456 95.0001V75.8001H21.08V58.3921H54.872V40.6001H21.08V23.3201H58.328V4.24813H0.855957V95.0001H58.456Z"
        fill={variant}
      />
      <path
        d="M97.497 12.8241H80.089V21.0161C80.089 26.9041 76.889 31.3841 70.233 31.3841H67.033V48.4081H78.297V75.6721C78.297 88.3441 86.3609 96.1521 99.545 96.1521C105.689 96.1521 108.889 94.7441 109.657 94.3601V78.2321C108.505 78.4881 106.585 78.8721 104.537 78.8721C100.313 78.8721 97.497 77.4641 97.497 72.2161V48.4081H109.913V31.3841H97.497V12.8241Z"
        fill={variant}
      />
      <path
        d="M137.671 55.5761C138.055 50.8401 142.151 44.8241 150.343 44.8241C159.559 44.8241 162.887 50.7121 163.143 55.5761H137.671ZM164.551 72.0881C162.759 77.0801 158.791 80.4081 151.751 80.4081C144.199 80.4081 137.671 75.2881 137.287 68.1201H181.575C181.703 67.7361 181.959 64.7921 181.959 62.1041C181.959 41.6241 169.799 29.4641 150.087 29.4641C133.575 29.4641 118.343 42.5201 118.343 63.0001C118.343 84.3761 133.959 96.9201 151.495 96.9201C167.623 96.9201 177.735 87.7041 180.807 76.6961L164.551 72.0881Z"
        fill={variant}
      />
      <path
        d="M234.899 31.3841C233.619 31.0001 231.699 30.7441 229.779 30.7441C224.659 30.7441 216.595 32.7921 213.267 39.9601V31.3841H194.451V95.0001H213.907V67.2241C213.907 54.5521 220.947 49.9441 228.755 49.9441C230.675 49.9441 232.723 50.0721 234.899 50.5841V31.3841Z"
        fill={variant}
      />
      <path
        d="M266.157 58.5201C266.157 52.1201 270.253 47.3841 276.653 47.3841C283.693 47.3841 287.021 52.1201 287.021 58.3921V95.0001H306.477V55.0641C306.477 41.1121 299.309 29.7201 283.309 29.7201C276.781 29.7201 268.973 32.6641 265.517 38.6801V31.3841H246.701V95.0001H266.157V58.5201Z"
        fill={variant}
      />
      <path
        d="M342.282 95.0001V31.3841H322.826V95.0001H342.282ZM321.162 11.9281C321.162 18.2001 326.282 23.3201 332.426 23.3201C338.826 23.3201 343.946 18.2001 343.946 11.9281C343.946 5.65614 338.826 0.536133 332.426 0.536133C326.282 0.536133 321.162 5.65614 321.162 11.9281Z"
        fill={variant}
      />
      <path
        d="M382.622 12.8241H365.214V21.0161C365.214 26.9041 362.014 31.3841 355.358 31.3841H352.158V48.4081H363.422V75.6721C363.422 88.3441 371.486 96.1521 384.67 96.1521C390.814 96.1521 394.014 94.7441 394.782 94.3601V78.2321C393.63 78.4881 391.71 78.8721 389.662 78.8721C385.438 78.8721 382.622 77.4641 382.622 72.2161V48.4081H395.038V31.3841H382.622V12.8241Z"
        fill={variant}
      />
      <path
        d="M435.536 119.448L474.704 31.3841H454.096L440.016 65.4321L424.528 31.3841H402.768L429.52 86.4241L415.056 119.448H435.536Z"
        fill={variant}
      />
      <path
        d="M483.808 82.9681C483.808 90.0081 489.696 96.1521 496.864 96.1521C504.032 96.1521 510.048 90.0081 510.048 82.9681C510.048 75.8001 504.032 69.9121 496.864 69.9121C489.696 69.9121 483.808 75.8001 483.808 82.9681Z"
        fill="#FF0000"
      />
      <path
        d="M588.531 95.0001H610.547L576.755 4.24813H553.331L519.155 95.0001H540.403L546.931 76.5681H582.003L588.531 95.0001ZM564.723 26.7761L575.603 58.1361H553.587L564.723 26.7761Z"
        fill={variant}
      />
      <path
        d="M642.211 95.0001V4.24813H621.731V95.0001H642.211Z"
        fill={variant}
      />
    </svg>
  );
}

export function LogoIcon({ color, width }: { color: string; width: number }) {
  const height = useMemo(() => (226 / 512) * width, [width]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M432.982 26.7517C344.797 12.6901 267.823 200.58 132.064 200.58C57.7198 200.58 5.92322 140.915 33.5288 102.175C86.1307 28.357 259.136 210.864 413.6 200.58C502.105 194.687 513.01 39.5125 432.982 26.7517Z"
        stroke={color}
        stroke-width="50"
      />
    </svg>
  );
}
