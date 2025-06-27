import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    'Qualified and caring educators.',
    'Small class sizes for personalized attention.',
    'Secure, child-friendly facilities.',
    'A balanced mix of academics, play, and social engagement.'
  ];

  return (
    <section className="bg-futurie-neutral-50">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                  alt="Why Choose Us"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-futurie-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">✨</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-futurie-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">💝</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-block bg-futurie-blue-100 text-futurie-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Why Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-futurie-neutral-600 mb-8 font-medium">
                  A Safe & Supportive Environment for Growth
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-futurie-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-futurie-neutral-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="bg-futurie-blue-500 hover:bg-futurie-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="text-button-wrap">
                    <span className="text-button">Contact Us</span>
                    <span className="text-button">Contact Us</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;