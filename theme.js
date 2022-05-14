import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(253, 134, 23)",
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
