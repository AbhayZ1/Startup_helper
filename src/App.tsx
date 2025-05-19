import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import PricingSection from './components/PricingSection';
import AiAssistantDemo from './components/AiAssistantDemo';
import TestimonialSection from './components/TestimonialSection';
import ResourceSection from './components/ResourceSection';
import CommunitySection from './components/CommunitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <AiAssistantDemo />
      <PricingSection />
      <TestimonialSection />
      <ResourceSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;