import { createTheme } from "@mui/material/styles";

export default () =>
  createTheme({
    palette: {
      primary: {
        light: "#5e92f3",
        main: '#1565c0',
        dark: '#003c8f',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#9fffe0',
        main: '#69f0ae',
        dark: '#2bbd7e',
        contrastText: '#000',
      },
    },
  });
