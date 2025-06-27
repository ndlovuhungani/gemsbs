import React from 'react';
import { TrendingUp, Users, Briefcase } from 'lucide-react';

const CareerSection: React.FC = () => {
  const careerPoints = [
    "In the next few Years, the size of the analytics market will evolve to at least one-thirds of the global IT Market.",
    "The current demand for qualified data professionals is just the beginning.",
    "The number of job postings related to analytics in portals is increasing substantially."
  ];

  return (
    <section className="bg-futurie-neutral-50">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block bg-futurie-yellow-100 text-futurie-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Career Prospects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                Why a career in <span className="text-futurie-yellow-500">Analytics</span> is a great option?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="text-center animate-slide-in-left">
                <img 
                  src="https://admissions.gemsbschool.com/mba-business-analytic/images/career1.png" 
                  alt="Career in Analytics" 
                  className="w-full max-w-md mx-auto h-80 object-cover rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105"
                />
              </div>

              {/* Career Points */}
              <div className="space-y-6 animate-slide-in-right">
                {careerPoints.map((point, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl border transform transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                      index % 2 === 0 
                        ? 'bg-futurie-yellow-50 border-futurie-yellow-200' 
                        : 'bg-futurie-blue-50 border-futurie-blue-200'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index % 2 === 0 
                          ? 'bg-futurie-yellow-200' 
                          : 'bg-futurie-blue-200'
                      }`}>
                        {index === 0 && <TrendingUp className={`w-6 h-6 ${index % 2 === 0 ? 'text-futurie-yellow-700' : 'text-futurie-blue-700'}`} />}
                        {index === 1 && <Users className={`w-6 h-6 ${index % 2 === 0 ? 'text-futurie-yellow-700' : 'text-futurie-blue-700'}`} />}
                        {index === 2 && <Briefcase className={`w-6 h-6 ${index % 2 === 0 ? 'text-futurie-yellow-700' : 'text-futurie-blue-700'}`} />}
                      </div>
                      <p className="text-futurie-neutral-700 leading-relaxed flex-1">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;