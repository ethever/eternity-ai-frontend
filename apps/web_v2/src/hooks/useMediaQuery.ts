import { useMediaQuery as useMediaQueryMui, useTheme } from "@mui/material";

export default function useMediaQuery() {
  const { breakpoints } = useTheme();

  const xs = useMediaQueryMui(breakpoints.up("xs"));
  const sm = useMediaQueryMui(breakpoints.up("sm"));
  const md = useMediaQueryMui(breakpoints.up("md"));
  const lg = useMediaQueryMui(breakpoints.up("lg"));
  const xl = useMediaQueryMui(breakpoints.up("xl"));

  return {
    xs,
    sm,
    md,
    lg,
    xl,
  };
}
