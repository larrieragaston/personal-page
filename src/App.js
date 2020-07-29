import React from "react";
import "./App.css";
import { NavBar, ContentSection, Footer } from "./components";
import { TranslatorProvider } from "react-translate";

function App() {
  return (
    <TranslatorProvider translations={require('./assets/languages/es.json')}>
      <React.Fragment>
        <NavBar />
        <ContentSection />
        <Footer />
      </React.Fragment>
    </TranslatorProvider>
  );
}

export default App;
