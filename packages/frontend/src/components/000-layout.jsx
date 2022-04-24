import React from "react";
import { Outlet } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import getTheme from "./styles/getTheme";
import AppBar from "./010-appbar";

const theme = getTheme();

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Container maxWidth="xl" style={style}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

const style = {
  paddingTop: "65px",
  height: "calc(100% - 65px)",
  flexGrow: 1,
};

export default Layout;
