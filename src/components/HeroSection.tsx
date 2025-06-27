import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { GridPattern } from '@/components/ui/grid-pattern';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    query: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-br from-futurie-pink-50 via-futurie-purple-50 to-futurie-blue-50 min-h-screen flex items-center relative">
      {/* Grid Pattern Background */}
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [20, 5],
          [25, 8],
          [30, 12],
          [35, 6],
          [40, 14],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fill-futurie-pink-100/80 stroke-futurie-pink-200/90",
        )}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className={`w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} bg-futurie-${['pink', 'purple', 'blue', 'yellow'][Math.floor(Math.random() * 4)]}-300 rounded-full opacity-60`} />
          </div>
        ))}
      </div>

      <div className="padding-global w-full relative z-10">
        <div className="container-large">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              {/* Main Heading - Simple and Clean with mobile-safe-text class */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mobile-safe-text">
                  {/* First line */}
                  <div className="mb-4">
                    <span className="text-futurie-purple-600 animate-bounce-in mobile-safe-text">MBA</span>
                    <span className="mx-2 text-futurie-neutral-700 mobile-safe-text">in</span>
                    <span className="text-futurie-pink-500 animate-bounce-in mobile-safe-text" style={{ animationDelay: '0.2s' }}>
                      Business Analytics
                    </span>
                  </div>

                  {/* Second line - Simple inline layout */}
                  <div className="text-futurie-neutral-700 mobile-safe-text">
                    is{' '}
                    <span className="text-futurie-pink-500 font-bold mobile-safe-text">
                      <GooeyText
                        texts={["industry-ready.", "career-focused.", "KPMG partnered."]}
                        morphTime={1.5}
                        cooldownTime={2}
                        className="inline"
                        textClassName="text-4xl md:text-5xl lg:text-6xl font-bold text-futurie-pink-500 mobile-safe-text"
                      />
                    </span>
                  </div>
                </h1>
              </div>
              
              <div className="space-y-6 text-lg text-futurie-neutral-700 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in-up mobile-safe-text" style={{ animationDelay: '0.4s' }}>
                <p className="leading-relaxed mobile-safe-text">
                  A revolutionary 2-year work-study MBA program offered by GEMS B SCHOOL in collaboration with 
                  <span className="text-futurie-blue-600 font-semibold mobile-safe-text"> KPMG</span>.
                </p>
                <p className="leading-relaxed mobile-safe-text">
                  Work Monday to Friday, study on weekends, and graduate with an MBA degree plus 
                  <span className="text-futurie-pink-600 font-semibold mobile-safe-text"> 2 years of industry experience</span>.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {[
                  { text: "Industry Partnership", color: "futurie-yellow" },
                  { text: "Work & Study", color: "futurie-pink" },
                  { text: "Bangalore Campus", color: "futurie-purple" }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-${feature.color}-200 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <p className={`text-${feature.color}-700 text-sm font-medium text-center mobile-safe-text`}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Registration Form */}
            <div id="hero-form" className="relative animate-slide-in-right">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-futurie-pink-500 to-futurie-purple-500 rounded-xl p-4 mb-6">
                  <h3 className="text-white text-xl font-bold text-center mobile-safe-text">Register Now</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-futurie-purple-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name*"
                      className="w-full pl-10 pr-4 py-3 bg-futurie-neutral-50 border border-futurie-purple-200 rounded-lg text-futurie-neutral-800 placeholder-futurie-neutral-500 focus:outline-none focus:ring-2 focus:ring-futurie-pink-500 focus:border-transparent transition-all duration-300 mobile-safe-text"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-futurie-purple-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email*"
                      className="w-full pl-10 pr-4 py-3 bg-futurie-neutral-50 border border-futurie-purple-200 rounded-lg text-futurie-neutral-800 placeholder-futurie-neutral-500 focus:outline-none focus:ring-2 focus:ring-futurie-pink-500 focus:border-transparent transition-all duration-300 mobile-safe-text"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-futurie-purple-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone*"
                      maxLength={10}
                      className="w-full pl-10 pr-4 py-3 bg-futurie-neutral-50 border border-futurie-purple-200 rounded-lg text-futurie-neutral-800 placeholder-futurie-neutral-500 focus:outline-none focus:ring-2 focus:ring-futurie-pink-500 focus:border-transparent transition-all duration-300 mobile-safe-text"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-futurie-purple-400" />
                    </div>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-futurie-neutral-50 border border-futurie-purple-200 rounded-lg text-futurie-neutral-800 focus:outline-none focus:ring-2 focus:ring-futurie-pink-500 focus:border-transparent transition-all duration-300 appearance-none mobile-safe-text"
                      required
                    >
                      <option value="">Select State*</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi & NCR">Delhi & NCR</option>
                    </select>
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-futurie-purple-400" />
                    </div>
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      placeholder="Query*"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 bg-futurie-neutral-50 border border-futurie-purple-200 rounded-lg text-futurie-neutral-800 placeholder-futurie-neutral-500 focus:outline-none focus:ring-2 focus:ring-futurie-pink-500 focus:border-transparent transition-all duration-300 resize-none mobile-safe-text"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-futurie-pink-500 to-futurie-purple-500 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-futurie-pink-500 focus:ring-offset-2 mobile-safe-text"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;