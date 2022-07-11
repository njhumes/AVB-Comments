import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentUI from "components/CommentUI";
import TopCommenters from "components/TopCommenters";
import { amber } from "@material-ui/core/colors";

// Demonstrating the different ways to set a custom theme's properties
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#50C878",
    },
    secondary: amber,
  },
});

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
