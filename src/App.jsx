import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";
import Features from "./Components/Features"
import HowitWorks from "./Components/HowitWorks";
import Footer from "./Components/Footer"
// Uncomment Sentry integration if needed
// import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <HowitWorks/>
      <Footer/>
    </main>
  );
};

export default App;
