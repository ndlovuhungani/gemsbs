import React from 'react';
import { CheckCircle, Target } from 'lucide-react';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

const ProgramConceptSection: React.FC = () => {
  const programFeatures = [
    "2 year work-study MBA program in Business Analytics offered by GEMS B SCHOOL in collaboration with KPMG",
    "Students are placed with a company in their chosen domain at the beginning of the course",
    "Monday to Friday: Work in the company. Saturday and Sunday: Attend classes in college",
    "Graduate with MBA in Business Analytics and PGP in Business Analytics from KPMG with 2 years of relevant domain experience",
    "Students receive a salary while in full-time employment",
    "Entire delivery of Business Analytics modules done by KPMG",
    "MBA degree awarded by UGC recognised and NAAC 'A' grade accredited Indian University",
    "Fees payable in 8 easy instalments. Hostel accommodation available on campus"
  ];

  const whyChooseFeatures = [
    "Offered in collaboration with one of the Big 4s 'KPMG'",
    "Only Programme in Analytics offered by Industry & Academia Collaboratively",
    "Extensive programme that Equips the learner with all the In-Demand Analytics Skills",
    "Programme Delivered by Analytics experts from KPMG",
    "Hands-on practical programme",
    "Programming Skills not required",
    "Job Placement Assistance",
    "Certification from KPMG"
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,white/70,transparent)] fill-futurie-pink-100/60 stroke-futurie-pink-200/80",
        )}
      />
      
      <div className="padding-global relative z-10">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Program Concept */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <div className="inline-block bg-futurie-pink-100 text-futurie-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Program Concept
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-8">
                  Program <span className="text-futurie-pink-500">Concept</span>
                </h2>
                
                <div className="space-y-4">
                  {programFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="group flex items-start space-x-3 p-4 rounded-xl bg-futurie-pink-50 border border-futurie-pink-100 transform transition-all duration-300 hover:scale-105 hover:bg-futurie-pink-100 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-6 h-6 text-futurie-pink-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-futurie-neutral-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-slide-in-right">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-futurie-pink-200 to-futurie-purple-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <img 
                    src="https://admissions.gemsbschool.com/mba-business-analytic/images/prog-concept-img.jpg" 
                    alt="Program Concept" 
                    className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-futurie-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-futurie-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Why Choose This Program */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group animate-slide-in-left">
                <div className="absolute inset-0 bg-gradient-to-r from-futurie-purple-200 to-futurie-blue-200 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <img 
                  src="https://admissions.gemsbschool.com/mba-business-analytic/images/international-IMG.jpg" 
                  alt="Why Choose Analytics" 
                  className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-futurie-blue-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-futurie-purple-400 rounded-full animate-bounce"></div>
              </div>

              <div className="animate-slide-in-right">
                <div className="inline-block bg-futurie-purple-100 text-futurie-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Why Choose
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-8">
                  Why is this 'The' <span className="text-futurie-purple-500">Analytics</span> Programme to go for?
                </h2>
                
                <div className="space-y-4">
                  {whyChooseFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="group flex items-start space-x-3 p-4 rounded-xl bg-futurie-purple-50 border border-futurie-purple-100 transform transition-all duration-300 hover:scale-105 hover:bg-futurie-purple-100 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Target className="w-6 h-6 text-futurie-purple-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-futurie-neutral-700 leading-relaxed">{feature}</p>
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

export default ProgramConceptSection;