"use client";

import "./globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState, Suspense, lazy } from "react";
import Preloader from "../components/Loader/Preloader/Preloader";
import { useNavbar } from "../components/Navbar/useNavbar";
import { usePreloader } from "@/components/Loader/Preloader/usePreloader";

import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<boolean>(false);

  const { loader } = usePreloader();

  const { size } = useNavbar();

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  return (
    <html>
      <body>
        {loader ? (
          <Preloader loaderProps={loader} />
        ) : (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar mode={mode} setMode={setMode} size={size} />
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
