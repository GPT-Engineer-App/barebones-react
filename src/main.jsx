import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const dungeonsTheme = extendTheme({
  colors: {
    brand: {
      900: "#4A4341",
      800: "#6B8E23",
      700: "#DAA520",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={dungeonsTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
