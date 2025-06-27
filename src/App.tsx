import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramConceptSection from './components/ProgramConceptSection';
import InternationalProgressionSection from './components/InternationalProgressionSection';
import WhatYouLearnSection from './components/WhatYouLearnSection';
import CareerSection from './components/CareerSection';
import EligibilitySection from './components/EligibilitySection';
import SalientFeaturesSection from './components/SalientFeaturesSection';
import StatsSection from './components/StatsSection';
import TestimonialSection from './components/TestimonialSection';
import RankingSection from './components/RankingSection';
import AwardsSection from './components/AwardsSection';
import PlacementsSection from './components/PlacementsSection';
import StickyApplyButton from './components/StickyApplyButton';
import { Phone, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-futurie-neutral-50 overflow-x-hidden">
      {/* Main content area - grows to fill available space */}
      <div className="flex-grow mobile-button-safe-zone">
        <Header />
        <HeroSection />
        <ProgramConceptSection />
        <InternationalProgressionSection />
        <WhatYouLearnSection />
        <CareerSection />
        <EligibilitySection />
        <SalientFeaturesSection />
        <StatsSection />
        <TestimonialSection />
        <RankingSection />
        <AwardsSection />
        <PlacementsSection />
      </div>

      {/* Footer - always at bottom, no whitespace */}
      <footer className="bg-gradient-to-r from-futurie-purple-600 to-futurie-blue-600 text-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-center">
                <p className="text-futurie-purple-100 leading-relaxed">
                  Great Eastern Management School, Royal Cottage, The Bangalore Palace, Vasanthnagar,<br />
                  Bangalore - 560052<br />
                  © Copyright 2025 GEMS B SCHOOL | All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed positioned elements - independent of layout flow */}
      
      {/* Sticky Apply Now Button */}
      <StickyApplyButton />

      {/* Floating Action Buttons - WhatsApp and Call */}
      <div className="force-fixed-bottom-right">
        {/* Desktop - Vertical layout */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/7204992575?text=Hello!%20I%20came%20across%20GEMS%20B%20SCHOOL%20and%20would%20like%20more%20details%20about%20your%20programs.%20Could%20you%20help%20me%20with%20some%20information?%20Thanks!"
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          {/* Call Button */}
          <a
            href="tel:+919035654523"
            className="w-14 h-14 bg-futurie-blue-500 hover:bg-futurie-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="Call Us"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile - Vertical layout */}
        <div className="lg:hidden flex flex-col space-y-4">
          {/* WhatsApp Button - Smaller on mobile */}
          <a
            href="https://wa.me/7204992575?text=Hello!%20I%20came%20across%20GEMS%20B%20SCHOOL%20and%20would%20like%20more%20details%20about%20your%20programs.%20Could%20you%20help%20me%20with%20some%20information?%20Thanks!"
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Call Button - Smaller on mobile */}
          <a
            href="tel:+919035654523"
            className="w-12 h-12 bg-futurie-blue-500 hover:bg-futurie-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            title="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;