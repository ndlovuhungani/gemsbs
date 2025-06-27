import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const RankingSection: React.FC = () => {
  const rankings = [
    "#1 B School for Placement",
    "#1 B School in South India 2019",
    "The Most Innovative Business School in South India by Times of India",
    "UGC recognised and NAAC 'A' Graded"
  ];

  return (
    <section className="bg-gradient-to-r from-futurie-yellow-400 to-futurie-pink-400 text-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learn from 
                <div className="h-16 md:h-20 flex items-center justify-center mt-4">
                  <GooeyText
                    texts={["Placement Leader", "Innovative Curriculum", "Industry-Focused", "Award-Winning"]}
                    morphTime={1.5}
                    cooldownTime={2.5}
                    className="w-full"
                    textClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-futurie-yellow-100"
                  />
                </div>
                B School
              </h2>
            </div>

            {/* Rankings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {rankings.map((ranking, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    {index === 0 && <Trophy className="w-8 h-8 text-white" />}
                    {index === 1 && <Award className="w-8 h-8 text-white" />}
                    {index === 2 && <Star className="w-8 h-8 text-white" />}
                    {index === 3 && <Award className="w-8 h-8 text-white" />}
                  </div>
                  <p className="text-white font-medium leading-relaxed">{ranking}</p>
                </div>
              ))}
            </div>

            {/* Ranking Image */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <img
                src="https://admissions.gemsbschool.com/mba-business-analytic/images/rank/rank-desktop1.png"
                alt="Top Ranked B School"
                className="w-full max-w-4xl mx-auto h-64 object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;