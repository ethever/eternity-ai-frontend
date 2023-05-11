import { experimental_extendTheme as extendMaterialTheme } from "@mui/material/styles";
import { extendTheme } from "@mui/joy/styles";

export const muiTheme = extendMaterialTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ED3131",
        },
        secondary: {
          main: "#252525",
        },
      },
    },
  },
});

declare module "@mui/joy/styles" {
  // No custom tokens found, you can skip the theme augmentation.
  interface Palette {
    background: {
      community: string;
      communityItem: string;
    };
  }
}

export const joyTheme = extendTheme({
  components: {
    JoyListItem: {
      styleOverrides: { root: { paddingLeft: 0, paddingRight: 0 } },
    },
    JoyList: {},
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "plain" && {
            background: "transparent",
          }),
          ...(ownerState.variant === "solid" && {
            background: "red",
          }),
        }),
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: { community: "#e4e4e4", communityItem: "white" },
        primary: {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
        },
        neutral: {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});
