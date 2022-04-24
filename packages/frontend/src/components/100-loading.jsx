import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading(props) {
  return (
    <Box sx={centered}>
      <CircularProgress size={100} />
    </Box>
  );
}

const centered = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
