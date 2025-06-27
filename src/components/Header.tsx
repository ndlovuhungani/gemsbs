import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="top" className="bg-futurie-pink-50 border-b border-futurie-pink-100">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://admissions.gemsbschool.com/mba-business-analytic/images/logos/logo.png" 
                alt="GEMS B SCHOOL" 
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Center Content - Mobile Hidden */}
            <div className="hidden md:flex items-center">
              <div className="text-center bg-gradient-to-r from-futurie-yellow-100 to-futurie-yellow-200 rounded-xl px-8 py-4 border-2 border-futurie-yellow-300 shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-futurie-purple-700 font-bold text-xl md:text-2xl">Admissions 2025 Open</p>
                <p className="text-futurie-purple-600 text-base font-semibold">(Bangalore)</p>
              </div>
            </div>

            {/* KPMG Partnership */}
            <div className="flex items-center space-x-2 bg-futurie-blue-100 rounded-xl px-4 py-3 border border-futurie-blue-200 shadow-md">
              <img 
                src="https://admissions.gemsbschool.com/mba-business-analytic/images/logos/KPMG-Logo.jpg" 
                alt="KPMG Partnership" 
                className="h-8 md:h-12 w-auto"
              />
              <span className="text-futurie-blue-700 font-semibold hidden lg:block text-sm md:text-base">Partnership</span>
            </div>
          </div>

          {/* Mobile Center Content */}
          <div className="md:hidden text-center pb-4">
            <div className="bg-gradient-to-r from-futurie-yellow-100 to-futurie-yellow-200 rounded-xl px-6 py-4 border-2 border-futurie-yellow-300 inline-block shadow-lg">
              <p className="text-futurie-purple-700 font-bold text-lg">Admissions 2025 Open</p>
              <p className="text-futurie-purple-600 text-sm font-semibold">(Bangalore)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;