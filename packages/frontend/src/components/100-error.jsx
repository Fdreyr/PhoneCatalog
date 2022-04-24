import React from "react";
import { Typography } from "@mui/material";
import centered from "./styles/centered";

function GenericError(props) {
  return (
    <Typography variant="h2" style={centered}>
      Oops... Something bad happened
    </Typography>
  );
}

export default GenericError;
