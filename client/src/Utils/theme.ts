import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h4:{
      color:"#7b1fa2",
      fontWeight:"700"
    },
  },
  palette: {
    primary: {
      light: "#ab47bc",
      main: "#9c27b0",
      dark: "#8e24aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ab47bc",
      main: "#9c27b0",
      dark: "#8e24aa",
      contrastText: "#000",
    },
  },
});
