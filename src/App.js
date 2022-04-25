import React from "react";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import content from "./content";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
