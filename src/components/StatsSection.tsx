import React, { useEffect, useState, useRef } from 'react';
import { Users, GraduationCap, Briefcase, Award, Building } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    alumni: 0,
    placements: 0,
    corporateTieups: 0,
    awards: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: "Number of students", value: 1438, key: 'students', color: "futurie-pink" },
    { icon: GraduationCap, label: "Alumni", value: 6510, key: 'alumni', color: "futurie-blue" },
    { icon: Briefcase, label: "Number of placements", value: 6910, key: 'placements', color: "futurie-purple" },
    { icon: Building, label: "Corporate tie-ups", value: 425, key: 'corporateTieups', color: "futurie-green" },
    { icon: Award, label: "Awards & Recognitions", value: 24, key: 'awards', color: "futurie-yellow" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(start)
          }));
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-futurie-purple-600 to-futurie-blue-600 text-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-futurie-purple-100 max-w-2xl mx-auto">
                Because words aren't enough, we let numbers do the talking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-${stat.color}-300/30 shadow-2xl hover:bg-${stat.color}-500/20 transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/20 to-futurie-purple-500/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${stat.color}-400 to-futurie-purple-400 flex items-center justify-center transform transition-transform duration-500 hover:rotate-12 hover:scale-110`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className={`text-4xl md:text-5xl font-bold text-white mb-4 hover:text-${stat.color}-300 transition-colors duration-300`}>
                        {counts[stat.key as keyof typeof counts].toLocaleString()}
                      </div>
                      
                      <p className="text-futurie-purple-100 font-medium leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;