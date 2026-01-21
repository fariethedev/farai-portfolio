import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects"; // Assuming you have a Projects component
import ContactMe from "../components/ContactMe";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
    <Header />
    <AboutMe />
    <Projects />    
    <ContactMe />
    <Cta />
    {/* Add any additional components or sections here */}
    </>
  );
}   