
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Investors from "@/components/Investors";
import Customers from "@/components/Customers";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ScrollVideo from "@/components/ScrollVideo";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Terminal Industries</title>
        <meta name="description" content="Welcome to Terminal Industries - Reinventing the future of logistics through the yard." />
        <meta name="keywords" content="logistics, terminal, yard, ai, supply chain, home" />
      </Helmet>
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
    </>
  );
};

export default Home;