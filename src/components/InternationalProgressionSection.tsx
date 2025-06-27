import React from 'react';
import { Globe, GraduationCap, Plane, Clock } from 'lucide-react';

const InternationalProgressionSection: React.FC = () => {
  const universities = [
    { 
      name: "Roosevelt University", 
      country: "USA", 
      color: "futurie-yellow",
      logo: "https://admissions.gemsbschool.com/mba-business-analytic/images/logos/Roosevelt_University_Logo.svg.png"
    },
    { 
      name: "University of Sunderland", 
      country: "UK", 
      color: "futurie-pink",
      logo: "https://admissions.gemsbschool.com/mba-business-analytic/images/logos/university_of_sunderland.png"
    },
    { 
      name: "La Trobe University", 
      country: "Australia", 
      color: "futurie-purple",
      logo: "https://admissions.gemsbschool.com/mba-business-analytic/images/logos/La Trobe.png"
    }
  ];

  const progressionFeatures = [
    "GEMS B SCHOOL's strategic partnerships with reputed International Universities enables students enrolling for the Industry Synergised MBA program for a course progression into an MBA program at one of these International Universities.",
    "GEMS B SCHOOL currently has International Pathway agreements with University of Sunderland – UK, Roosevelt University – USA and La Trobe University – Australia",
    "Students can complete the first year of their MBA at GEMS B SCHOOL and progress to one of these Universities for the final year to get an MBA from that respective University.",
    "The International progression is only for students who are interested in this option and is not mandatory for all. Students enrolling for the Industry synergised MBA have time upto one year to decide whether they would like to choose this option or not."
  ];

  return (
    <section className="bg-futurie-neutral-50">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="inline-block bg-futurie-blue-100 text-futurie-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  International Progression
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-4">
                  International <span className="text-futurie-blue-500">Progression</span>
                </h2>
                <p className="text-xl text-futurie-neutral-600 mb-8 font-medium">(optional)</p>

                {/* University Logos */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-8">
                  {universities.map((university, index) => (
                    <div 
                      key={index}
                      className={`group bg-white rounded-xl p-4 border border-${university.color}-200 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <img 
                        src={university.logo} 
                        alt={university.name}
                        className="w-16 h-16 object-contain mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <p className="text-futurie-neutral-800 text-xs text-center font-medium">{university.name}</p>
                      <p className={`text-${university.color}-600 text-xs text-center font-medium`}>{university.country}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {progressionFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="group flex items-start space-x-3 p-4 rounded-xl bg-futurie-blue-50 border border-futurie-blue-100 transform transition-all duration-300 hover:scale-105 hover:bg-futurie-blue-100 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Globe className="w-6 h-6 text-futurie-blue-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-futurie-neutral-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                {/* 3D Card Layout */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: GraduationCap, title: "Global Degree", desc: "MBA from international universities", color: "futurie-yellow" },
                    { icon: Plane, title: "Study Abroad", desc: "Experience international education", color: "futurie-pink" },
                    { icon: Clock, title: "Flexible Timeline", desc: "One year to decide your path", color: "futurie-purple" },
                    { icon: Globe, title: "Three Countries", desc: "USA, UK, or Australia options", color: "futurie-blue" }
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}-100 to-${card.color}-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 text-center">
                        <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${card.color}-100 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                          <card.icon className={`w-6 h-6 text-${card.color}-600`} />
                        </div>
                        <h3 className={`text-lg font-bold text-futurie-neutral-800 mb-2 group-hover:text-${card.color}-700 transition-colors duration-300`}>
                          {card.title}
                        </h3>
                        <p className="text-futurie-neutral-600 text-sm leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalProgressionSection;