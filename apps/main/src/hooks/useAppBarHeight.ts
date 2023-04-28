import { useTheme } from "@mui/material";
import useDesktopQuery from "./useDesktopQuery";

export default function useAppBarHeight(): number {
  const { isDesktop, isLandscape, queryDesktop, queryLandscape } =
    useDesktopQuery();
  const {
    mixins: { toolbar },
  } = useTheme();

  const cssToolbar =
    toolbar[isDesktop ? queryDesktop : isLandscape ? queryLandscape : ""];

  return ((cssToolbar ?? toolbar) as { minHeight: number })?.minHeight ?? 0;
}
