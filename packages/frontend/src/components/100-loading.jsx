import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import centered from "./styles/centered";

export default function Loading(props) {
  return (
    <Box sx={centered}>
      <CircularProgress size={100} />
    </Box>
  );
}
