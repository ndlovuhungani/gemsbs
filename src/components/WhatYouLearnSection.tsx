import React from 'react';
import { BarChart, Code, Table, Cog, Signal, Chrome, Briefcase, Database, TrendingUp, PieChart, FileSpreadsheet, Clock, Globe } from 'lucide-react';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

const WhatYouLearnSection: React.FC = () => {
  const learningModules = [
    { icon: BarChart, title: "Business Statistics", color: "futurie-pink" },
    { icon: Code, title: "Business Analytics using R", color: "futurie-blue" },
    { icon: Table, title: "Visualization using Tableau", color: "futurie-purple" },
    { icon: Cog, title: "Machine Learning using Python", color: "futurie-green" },
    { icon: Signal, title: "Network analysis and text analytics using R", color: "futurie-yellow" },
    { icon: Chrome, title: "Web data extraction & analytics using R and Python", color: "futurie-pink" },
    { icon: Briefcase, title: "Advanced business analytics using R", color: "futurie-blue" },
    { icon: Database, title: "Database using SQL", color: "futurie-purple" },
    { icon: TrendingUp, title: "Financial Analytics", color: "futurie-green" },
    { icon: PieChart, title: "Human Resource Analytics", color: "futurie-yellow" },
    { icon: Code, title: "SAS & Minitab", color: "futurie-pink" },
    { icon: BarChart, title: "Marketing Analytics", color: "futurie-blue" },
    { icon: FileSpreadsheet, title: "Advanced Excel", color: "futurie-purple" },
    { icon: Database, title: "Database Management using MongoDB", color: "futurie-green" },
    { icon: Clock, title: "Time Series Forecasting", color: "futurie-yellow" },
    { icon: Globe, title: "Natural Language Processing and Web Scrapping", color: "futurie-pink" }
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        squares={[
          [2, 3],
          [6, 1],
          [10, 4],
          [14, 2],
          [18, 5],
          [22, 3],
          [26, 1],
          [30, 4],
        ]}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] fill-futurie-green-100/70 stroke-futurie-green-200/90",
        )}
      />
      
      <div className="padding-global relative z-10">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block bg-futurie-green-100 text-futurie-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Curriculum
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                What do you <span className="text-futurie-green-500">Learn?</span>
              </h2>
            </div>

            {/* Learning Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningModules.map((module, index) => (
                <div
                  key={index}
                  className={`group bg-${module.color}-50 hover:bg-${module.color}-100 rounded-2xl p-6 border border-${module.color}-200 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${module.color}-200 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <module.icon className={`w-6 h-6 text-${module.color}-700`} />
                  </div>
                  <h3 className={`text-center font-bold text-${module.color}-800 text-sm leading-tight group-hover:text-${module.color}-900 transition-colors duration-300`}>
                    {module.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;