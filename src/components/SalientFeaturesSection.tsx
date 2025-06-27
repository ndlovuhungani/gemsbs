import React from 'react';
import { Wifi, Users, BookOpen, Users2, Lightbulb, MapPin, Palette, Building, Zap, Briefcase } from 'lucide-react';

const SalientFeaturesSection: React.FC = () => {
  const features = [
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/smart-city.png", 
      title: "Wi-Fi", 
      subtitle: "Campus", 
      color: "futurie-pink" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/teacher.png", 
      title: "Faculty", 
      subtitle: "from Industry", 
      color: "futurie-blue" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/digital-library.png", 
      title: "Digital", 
      subtitle: "Library", 
      color: "futurie-purple" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/team-building.png", 
      title: "Team", 
      subtitle: "Building", 
      color: "futurie-green" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/experimental-learning.png", 
      title: "Experiential", 
      subtitle: "Learning", 
      color: "futurie-yellow" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/outbound-workshop.png", 
      title: "Outbound", 
      subtitle: "Workshops", 
      color: "futurie-pink" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/creative-focus.png", 
      title: "Creative", 
      subtitle: "Focus", 
      color: "futurie-blue" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/industrial-visit.png", 
      title: "Industrial", 
      subtitle: "Visits", 
      color: "futurie-purple" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/highly-flexible.png", 
      title: "Highly", 
      subtitle: "flexible", 
      color: "futurie-green" 
    },
    { 
      icon: "https://admissions.gemsbschool.com/mba-business-analytic/images/features/industry.png", 
      title: "Industry", 
      subtitle: "Relevant Curriculum", 
      color: "futurie-yellow" 
    }
  ];

  return (
    <section className="bg-futurie-neutral-50">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block bg-futurie-purple-100 text-futurie-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Features
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                Salient <span className="text-futurie-purple-500">Features</span>
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl bg-${feature.color}-50 border border-${feature.color}-200 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${feature.color}-200 flex items-center justify-center`}>
                    <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                  </div>
                  <h3 className={`font-bold text-${feature.color}-800 text-sm mb-1`}>{feature.title}</h3>
                  <p className={`text-${feature.color}-600 text-xs`}>{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalientFeaturesSection;