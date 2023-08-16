"use client";

import "./globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState, Suspense } from "react";
import Preloader from "../components/Loader/Preloader";

import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  return (
    <html>
      <body>
        <>
          <Preloader />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar mode={mode} setMode={setMode} />
            {children}
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
