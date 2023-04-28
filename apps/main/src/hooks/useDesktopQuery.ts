import { useMediaQuery, useTheme } from "@mui/material";

export default function useDesktopQuery() {
  const { breakpoints } = useTheme();

  const queryDesktop = breakpoints.up("sm");
  const queryLandscape = `${breakpoints.up("xs")} and (orientation: landscape)`;

  const isDesktop = useMediaQuery(queryDesktop);
  const isLandscape = useMediaQuery(queryLandscape);

  return {
    isDesktop,
    isLandscape,
    queryDesktop,
    queryLandscape,
  };
}
