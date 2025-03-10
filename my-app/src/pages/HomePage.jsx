import React from 'react';
import NavSection from "../components/NavSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
    return (
        <div>
            <NavSection/>
            <HeroSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default HomePage;