
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Investors from "@/components/Investors";
import Customers from "@/components/Customers";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

import React, { useState, useEffect } from "react";
import ScrollVideo from "@/components/ScrollVideo";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ScrollVideo section at the top, scrolls through all frames */}
      <ScrollVideo />
      {/* Anchor for smooth scroll and to ensure next section appears right after video */}
      <div id="explore" />
      {/* Main content below video, appears immediately after video section */}
      <Navigation />
      {/* <Hero /> */}
      <Features />
      <Benefits />
      <Investors />
      <Footer />
    </div>
  );
};

export default Home;