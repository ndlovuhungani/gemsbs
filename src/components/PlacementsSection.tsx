import React from 'react';
import { Marquee } from '@/components/ui/marquee';

const PlacementsSection: React.FC = () => {
  const companies = [
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c1.jpg",
      alt: "Accenture"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c2.jpg",
      alt: "Wipro"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c3.jpg",
      alt: "TCS"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c4.jpg",
      alt: "Infosys"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c5.jpg",
      alt: "Cognizant"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c6.jpg",
      alt: "IBM"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c7.jpg",
      alt: "Microsoft"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c8.jpg",
      alt: "Amazon"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c10.jpg",
      alt: "Deloitte"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c11.jpg",
      alt: "KPMG"
    },
    {
      src: "https://admissions.gemsbschool.com/mba-business-analytic/images/placements/c12.jpg",
      alt: "EY"
    }
  ];

  // Create duplicated arrays for seamless looping
  const firstRowCompanies = [...companies, ...companies];
  const secondRowCompanies = [...companies.slice().reverse(), ...companies.slice().reverse()];

  return (
    <section className="bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block bg-futurie-blue-100 text-futurie-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Career Success
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                Our <span className="text-futurie-blue-500">Placement</span> Partners
              </h2>
              <p className="text-lg text-futurie-neutral-600 max-w-2xl mx-auto">
                Join the ranks of successful professionals working at top companies worldwide
              </p>
            </div>

            {/* Marquee Animation - First Row (Left to Right) */}
            <div className="mb-8">
              <Marquee pauseOnHover speed={40} className="[--duration:40s]">
                {firstRowCompanies.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="relative h-full w-fit mx-6 flex items-center justify-center"
                  >
                    <div className="bg-white rounded-xl p-6 border border-futurie-neutral-200 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl min-w-[180px] h-20 flex items-center justify-center group">
                      <img
                        src={company.src}
                        alt={company.alt}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                        onError={(e) => {
                          console.log(`Failed to load image: ${company.src}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Marquee Animation - Second Row (Right to Left) */}
            <div className="mb-8">
              <Marquee pauseOnHover speed={35} direction="right" className="[--duration:35s]">
                {secondRowCompanies.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="relative h-full w-fit mx-6 flex items-center justify-center"
                  >
                    <div className="bg-white rounded-xl p-6 border border-futurie-neutral-200 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl min-w-[180px] h-20 flex items-center justify-center group">
                      <img
                        src={company.src}
                        alt={company.alt}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                        onError={(e) => {
                          console.log(`Failed to load image: ${company.src}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-futurie-blue-50 rounded-2xl border border-futurie-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-futurie-blue-600 mb-2">95%</div>
                <p className="text-futurie-blue-700 font-medium">Placement Rate</p>
              </div>
              <div className="text-center p-6 bg-futurie-green-50 rounded-2xl border border-futurie-green-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-futurie-green-600 mb-2">425+</div>
                <p className="text-futurie-green-700 font-medium">Corporate Partners</p>
              </div>
              <div className="text-center p-6 bg-futurie-purple-50 rounded-2xl border border-futurie-purple-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-futurie-purple-600 mb-2">₹8.5L</div>
                <p className="text-futurie-purple-700 font-medium">Average Package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;