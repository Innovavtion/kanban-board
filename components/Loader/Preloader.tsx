"use client";

import { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

type Props = {
  loader: boolean;
};

export default function Preloader({ loader }: Props) {
  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
