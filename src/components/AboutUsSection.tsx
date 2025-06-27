import React from 'react';
import { Smile, Atom, Palette, Zap } from 'lucide-react';

const AboutUsSection: React.FC = () => {
  const features = [
    {
      icon: Smile,
      title: 'Play-Based Learning',
      description: 'Children thrive when they engage in hands-on activities. We use storytelling, role-playing, and interactive play to make learning fun and meaningful.',
      color: 'futurie-pink'
    },
    {
      icon: Atom,
      title: 'STEM Exploration',
      description: 'Simple experiments, building projects, and problem-solving activities introduce young learners to science, technology, engineering, and math in an exciting way.',
      color: 'futurie-blue'
    },
    {
      icon: Palette,
      title: 'Creative Expression',
      description: 'Music, dance, art, and storytelling allow children to develop their creativity, fine motor skills, and self-confidence.',
      color: 'futurie-purple'
    },
    {
      icon: Zap,
      title: 'Physical Activity',
      description: 'Outdoor play, movement games, and fitness exercises help develop coordination, strength, and a love for active living.',
      color: 'futurie-green'
    }
  ];

  return (
    <section className="bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block bg-futurie-pink-100 text-futurie-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                About us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                A Place<br />
                to <span className="text-futurie-pink-500">Grow</span>
              </h2>
              <p className="text-lg text-futurie-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Our school provides a safe, engaging, and stimulating environment where children can explore, learn, and grow. We nurture young minds with love, creativity, and education.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${feature.color}-100 flex items-center justify-center`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-futurie-neutral-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-futurie-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-futurie-pink-500 hover:bg-futurie-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="text-button-wrap">
                  <span className="text-button">About Us</span>
                  <span className="text-button">About Us</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;