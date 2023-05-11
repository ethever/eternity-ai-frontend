import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { muiTheme, joyTheme } from "./theme.tsx";
import { CssBaseline } from "@mui/joy";
import { Toaster } from "react-hot-toast";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MaterialCssVarsProvider theme={{ [THEME_ID]: muiTheme }}>
      <JoyCssVarsProvider theme={joyTheme}>
        <CssBaseline />
        <Toaster />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  </React.StrictMode>
);
