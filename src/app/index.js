import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentUI from "components/CommentUI";
import TopCommenters from "components/TopCommenters";
import { amber } from "@material-ui/core/colors";

// Demonstrating the different ways to set a custom theme's properties. First by specifing a color using a hex code, and second using Material UI's built in color options
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#50C878",
    },
    secondary: amber,
  },
});

// By wrapping the app in the ThemeProvider componenet, the entire app now has access to this new primary and secondary color scheme
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CommentModal />
      <CommentUI />
      <TopCommenters />
    </ThemeProvider>
  );
}

export default App;
