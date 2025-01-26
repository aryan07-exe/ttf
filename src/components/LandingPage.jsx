import React from "react"; 
import "./LandingPage.css";
import Navbar from "./Navbar.jsx";
import HeroSlider from './HeroSlider.jsx';

import Domestic from './Domestic';
import TravelExperiences from './TravelExperiences';
import AdventurePackages from './AdventurePackages';
import Footer from './Footer';
import ContactUs from './ContactUs';
import InternationalDestinations from './InternationalDestinations';
import Gallery from './Gallery';

function LandingPage() {  
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* Modern Hero Section */}
      <HeroSlider />

      {/* Domestic Destinations Section */}
      <Domestic />

      {/* International Destinations Section */}
      <InternationalDestinations />

      {/* Adventure Packages */}
      <AdventurePackages />

      {/* Customer Testimonials */}
      <TravelExperiences />

      {/* Gallery */}
      <Gallery />

      {/* Contact Us Section */}
      <ContactUs />

    

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default LandingPage;
