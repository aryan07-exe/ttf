import { Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import AdventurePackages from "./components/AdventurePackages";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      emailjs.init("wWdbz_ObusfHueH25");
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adv" element={<AdventurePackages />} />
      </Routes>
    </div>
  );
}

export default App;

