import { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

type Props = {
  loaderProps: boolean;
};

export default function Preloader({ loaderProps }: Props) {
  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loaderProps}
    >
      <CircularProgress color="inherit" />
      <Typography sx={{ mt: 3, fontWeight: "500" }} translate="no">
        Loading
      </Typography>
    </Backdrop>
  );
}
