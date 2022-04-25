import { createTheme } from "@material-ui/core/styles";
//import teal from "@material-ui/core/colors/teal";

const theme = createTheme({
  palette: {
    primary: { main: "#5ED5A8", light: "#373E47" },
    secondary: { main: "#777777" },
    error: { main: "#DD4B4B" },
    warning: { main: "#FFCD34" },
    info: { main: "#4AA8FF" },
    success: { main: "#459D7C" },
  },
});

export default theme;
