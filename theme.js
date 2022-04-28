import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#095e6d",
    },
    secondary: {
      main: "#556cd6",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
