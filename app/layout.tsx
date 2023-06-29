"use client";

import "./globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Kanban",
  description: "Generated Kanban-Board",
};

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar mode={mode} setMode={setMode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
