import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#110F14",
    },
    secondary: {
      main: "#0AAE59",
    },
    highlight: {
      main: "#E00029",
    },
    true: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    h3: {
      fontWeight: 600,
    },
  },
});
export default theme;
