import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const AwardsSection: React.FC = () => {
  const awards = [
    {
      title: "Economic Times Best Education Brands 2025",
      description: "The Economic Times recognises GEMS B SCHOOL for the 2nd time in three years as one of India's Best Education Brands.",
      images: [
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/economic-2025-1.webp",
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/economic-2025-2.webp"
      ],
      icon: Trophy
    },
    {
      title: "ASSOCHAM B School of the Year 2022",
      description: "GEMS B SCHOOL was recognised as the 'B School of the year' at the ASSOCHAM 15th International Education Leadership & Skill Development Summit.",
      images: [
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/Coveted-1.webp",
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/Coveted-2.webp"
      ],
      icon: Award
    },
    {
      title: "Most Innovative Business School",
      description: "GEMS B SCHOOL was recognised as 'The Most Innovative Business School in South India' at the Times Business Awards 2020.",
      images: [
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/awards-IMG6.jpg"
      ],
      icon: Star
    },
    {
      title: "Best Education Brands India 2023",
      description: "GEMS B SCHOOL takes great pride in being recognised as one of the Best Education Brands in India 2023 by The Economic Times.",
      images: [
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/Pilani-1.webp",
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/Pilani-2.webp"
      ],
      icon: Trophy
    },
    {
      title: "Most Preferred B School for Placements",
      description: "GEMS B SCHOOL received the prestigious ASSOCHAM award for the 'Most Preferred B School for Placements' nationally.",
      images: [
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/awards-IMG1.webp",
        "https://admissions.gemsbschool.com/mba-business-analytic/images/awards/awards-IMG2.webp"
      ],
      icon: Award
    }
  ];

  return (
    <section className="bg-futurie-neutral-50">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block bg-futurie-yellow-100 text-futurie-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Recognition
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                <span className="text-futurie-yellow-500">Awards</span> & Recognition
              </h2>
            </div>

            {/* Awards Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-futurie-neutral-200 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-futurie-yellow-100 flex items-center justify-center">
                      <award.icon className="w-8 h-8 text-futurie-yellow-600" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-futurie-neutral-800 mb-3 text-center leading-tight">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-futurie-neutral-600 leading-relaxed text-center text-sm mb-6">
                    {award.description}
                  </p>

                  {/* Images */}
                  <div className={`grid gap-4 ${award.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {award.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative group overflow-hidden rounded-xl min-h-[200px] bg-futurie-neutral-50 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={image}
                          alt={`${award.title} - Image ${imgIndex + 1}`}
                          className="w-full h-auto object-contain transform transition-all duration-500"
                          onError={(e) => {
                            console.log(`Failed to load image: ${image}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
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

export default AwardsSection;