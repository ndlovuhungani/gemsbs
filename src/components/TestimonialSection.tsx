import React from 'react';
import { Star } from 'lucide-react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Himabindu',
      employer: 'Accenture',
      image: 'https://admissions.gemsbschool.com/mba-business-analytic/images/testimonials/Himabindu.jpg',
      text: 'I left my Job in search of finding an exciting career and joined GEMS B School. My experience with GEMS is beautiful. I just followed what hari sir instructed me and I\'ve seen my career grow. Faculty here are very much talented. Every day is a learning here. I\'m thankful to GEMS.',
      rating: 5
    },
    {
      name: 'Poulami Dutta',
      employer: 'Societe generale',
      image: 'https://admissions.gemsbschool.com/mba-business-analytic/images/testimonials/Poulami.jpg',
      text: 'College Infrastructure: Yes our college offers all the necessary infrastructures and equipments required for academic and non academic requirements. Academics: The quality of education provided in the college is high. College is equipped with well trained and self devoting teachers.',
      rating: 5
    },
    {
      name: 'Madhu Smitha',
      employer: 'Larson & Tubro',
      image: 'https://admissions.gemsbschool.com/mba-business-analytic/images/testimonials/Madhu.jpg',
      text: 'Its a good program where we get a chance to work and understand the industry requirements as well as to learn the topics. And there is full time support from the college in case of studies as well as the placements.',
      rating: 5
    },
    {
      name: 'Sravani',
      employer: 'Tata',
      image: 'https://admissions.gemsbschool.com/mba-business-analytic/images/testimonials/Sravani.jpg',
      text: 'It\'s one of the best business management school where we can learn and earn. And the staff is also friendly and helpful. Mainly placement head (Mr.Hari) is very helpful for the placements.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-futurie-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block bg-futurie-green-100 text-futurie-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Testimonials
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-futurie-neutral-800 mb-6">
                Why learners choose 
                <div className="h-16 md:h-20 flex items-center justify-center mt-4">
                  <GooeyText
                    texts={["Real-World Experience", "Expert Faculty", "Strong Placements", "Industry Recognition"]}
                    morphTime={1.3}
                    cooldownTime={2}
                    className="w-full"
                    textClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-futurie-green-500"
                  />
                </div>
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-futurie-neutral-50 rounded-2xl p-8 border border-futurie-neutral-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-futurie-neutral-700 leading-relaxed italic text-center mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-center">
                      <h3 className="font-bold text-futurie-neutral-800">{testimonial.name}</h3>
                      <p className="text-sm text-futurie-neutral-600">Employer: {testimonial.employer}</p>
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

export default TestimonialSection;