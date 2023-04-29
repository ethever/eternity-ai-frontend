import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/public-sans";
import CssBaseline from "@mui/joy/CssBaseline";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as muiTHEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { joyTheme, muiTheme } from "./theme.ts";
import GlobalStyles from "@mui/joy/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MaterialCssVarsProvider theme={{ [muiTHEME_ID]: muiTheme }}>
      <JoyCssVarsProvider theme={joyTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              background: "linear-gradient(90deg, #F3FFFC 0%, #FAF4FC 100%)",
              overflow: "overlay",
            },
          }}
        />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  </React.StrictMode>
);
