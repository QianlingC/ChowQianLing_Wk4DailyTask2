import React from "react";
import { Header } from "./stories/Header";
import { GroceryDisplay } from "./GroceryDisplay";
import { Footer } from "./stories/Footer";
function App() {
  return (
    <>
      <Header user />
      <GroceryDisplay />
      <Footer />
    </>
  );
}

export default App;
