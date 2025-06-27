import React from 'react';
import { GraduationCap, Clock, Calendar } from 'lucide-react';

const EligibilitySection: React.FC = () => {
  const eligibilityData = [
    {
      icon: GraduationCap,
      title: "Eligibility",
      subtitle: "Graduation with 50% aggregate",
      color: "futurie-pink"
    },
    {
      icon: Clock,
      title: "Duration",
      subtitle: "2 year",
      color: "futurie-blue"
    },
    {
      icon: Calendar,
      title: "Classes",
      subtitle: "Weekends",
      color: "futurie-purple"
    }
  ];

  return (
    <section className="bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {eligibilityData.map((item, index) => (
                <div
                  key={index}
                  className={`text-center p-8 rounded-2xl bg-${item.color}-50 border border-${item.color}-200 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${item.color}-200 flex items-center justify-center`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-700`} />
                  </div>
                  <h3 className={`text-xl font-bold text-${item.color}-800 mb-2`}>{item.title}</h3>
                  <p className={`text-${item.color}-600 font-medium`}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;