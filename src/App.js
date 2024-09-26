import React from "react";
import "./App.css";
import {
  About,
  Header,
  Hero,
  Skills,
  Qualification,
  Footer,
  Scroll,
  Contact,
  Projects,
  Testimonial,
} from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </div>
  );
};

export default App;
