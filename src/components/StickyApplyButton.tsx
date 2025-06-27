import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

const StickyApplyButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer to watch the hero form
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide button when hero form IS visible
          // Show button when hero form is NOT visible (user scrolled past it)
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Find and observe the hero form
    const heroForm = document.getElementById('hero-form');
    if (heroForm && observerRef.current) {
      observerRef.current.observe(heroForm);
    }

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Cycle through animation phases for continuous engagement
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleApplyClick = () => {
    // Scroll to the registration form in hero section
    const heroSection = document.querySelector('#hero-form');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      {/* Desktop Sticky Button - HORIZONTAL Layout Centered at bottom */}
      <div className="hidden lg:block force-fixed-bottom-center">
        <div className={`transition-all duration-700 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-full opacity-0 scale-95'
        }`}>
          <div className="relative">
            {/* Floating Sparkles Animation */}
            <div className="absolute -inset-8 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-futurie-yellow-400 rounded-full animate-float opacity-60 ${
                    animationPhase === 0 ? 'animate-ping' : 
                    animationPhase === 1 ? 'animate-pulse' : 'animate-bounce'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            {/* Main Button - HORIZONTAL Layout for Desktop */}
            <button
              onClick={handleApplyClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative bg-gradient-to-r from-futurie-pink-500 via-futurie-purple-500 to-futurie-blue-500 hover:from-futurie-pink-600 hover:via-futurie-purple-600 hover:to-futurie-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:rotate-1 sticky-apply-glow"
            >
              {/* Animated Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-futurie-yellow-400 via-futurie-pink-400 to-futurie-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 group-hover:translate-x-full" />
              
              {/* Multiple Sparkle Animations */}
              <div className="absolute -top-2 -right-2">
                <Sparkles className={`w-5 h-5 text-futurie-yellow-300 transition-all duration-500 ${
                  isHovered ? 'animate-spin scale-125' : animationPhase === 0 ? 'animate-pulse' : 'animate-bounce'
                }`} />
              </div>
              
              <div className="absolute -top-1 -left-1">
                <Star className={`w-3 h-3 text-futurie-pink-300 transition-all duration-300 ${
                  isHovered ? 'animate-ping' : 'animate-pulse'
                }`} />
              </div>

              <div className="absolute -bottom-1 -right-1">
                <Zap className={`w-4 h-4 text-futurie-blue-300 transition-all duration-400 ${
                  isHovered ? 'animate-bounce' : animationPhase === 1 ? 'animate-spin' : 'animate-pulse'
                }`} />
              </div>
              
              {/* Button Content - HORIZONTAL Layout for Desktop */}
              <div className="relative z-10 flex items-center space-x-4">
                <GraduationCap className={`w-8 h-8 transition-all duration-500 ${
                  isHovered ? 'scale-125 rotate-12 text-futurie-yellow-200' : 'scale-100'
                } ${animationPhase === 2 ? 'animate-bounce' : ''}`} />
                
                <div className="flex items-center space-x-3">
                  <span className={`text-xl font-bold whitespace-nowrap transform transition-all duration-500 mobile-safe-text ${
                    isHovered ? 'scale-110 text-futurie-yellow-100' : ''
                  } ${animationPhase === 0 ? 'animate-pulse' : ''}`}>
                    APPLY NOW
                  </span>
                  
                  <ArrowRight className={`w-6 h-6 transition-all duration-500 ${
                    isHovered ? 'translate-x-2 scale-110 text-futurie-yellow-200' : ''
                  } ${animationPhase === 2 ? 'animate-bounce' : ''}`} />
                </div>
              </div>
              
              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110" />
              
              {/* Glowing Border Animation */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                isHovered 
                  ? 'border-futurie-yellow-300 opacity-100 shadow-lg shadow-futurie-yellow-300/50' 
                  : 'border-white/30 opacity-60'
              }`} />

              {/* Pulsing Outer Ring */}
              <div className={`absolute -inset-2 rounded-3xl border-2 border-futurie-pink-300 opacity-30 transition-all duration-1000 ${
                animationPhase === 0 ? 'scale-110 opacity-60' : 'scale-100 opacity-30'
              }`} />
            </button>

            {/* Floating Text Animation */}
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              isHovered ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'
            }`}>
              <div className="bg-futurie-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce whitespace-nowrap mobile-safe-text">
                🎓 Start Your MBA Journey Today!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETELY NEW Mobile Sticky Button - Fixed positioned from scratch */}
      <div 
        className="lg:hidden"
        style={{
          position: 'fixed',
          bottom: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          transition: 'all 0.7s ease-out',
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
      >
        <div className="relative">
          {/* Enhanced Mobile Floating Sparkles */}
          <div className="absolute -inset-6 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-futurie-yellow-400 rounded-full animate-float opacity-70 ${
                  animationPhase === i % 3 ? 'animate-ping' : 'animate-pulse'
                }`}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${1.5 + Math.random() * 1.5}s`
                }}
              />
            ))}
          </div>

          <button
            onClick={handleApplyClick}
            className="group relative bg-gradient-to-r from-futurie-pink-500 via-futurie-purple-500 to-futurie-blue-500 hover:from-futurie-pink-600 hover:via-futurie-purple-600 hover:to-futurie-blue-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-4xl active:scale-95"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)'
            }}
          >
            {/* Enhanced Mobile Background Animations */}
            <div className="absolute inset-0 bg-gradient-to-r from-futurie-yellow-400 via-futurie-pink-400 to-futurie-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Enhanced Mobile Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 group-hover:translate-x-full" />
            
            {/* Enhanced Mobile Sparkles */}
            <div className="absolute -top-2 -right-2">
              <Sparkles className={`w-4 h-4 text-futurie-yellow-300 transition-all duration-300 ${
                animationPhase === 0 ? 'animate-spin' : 'animate-pulse'
              }`} />
            </div>
            
            <div className="absolute -bottom-2 -left-2">
              <Star className={`w-3 h-3 text-futurie-pink-300 transition-all duration-300 ${
                animationPhase === 1 ? 'animate-bounce' : 'animate-pulse'
              }`} />
            </div>

            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <Zap className={`w-3 h-3 text-futurie-blue-300 transition-all duration-300 ${
                animationPhase === 2 ? 'animate-ping' : 'animate-pulse'
              }`} />
            </div>
            
            {/* Mobile Button Content - HORIZONTAL Layout */}
            <div className="relative z-10 flex items-center space-x-3">
              <GraduationCap className={`w-6 h-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:text-futurie-yellow-200 ${
                animationPhase === 1 ? 'animate-bounce' : ''
              }`} />
              
              <div className="flex items-center space-x-2">
                <span 
                  className={`text-base font-bold whitespace-nowrap transform transition-all duration-500 group-hover:scale-110 group-hover:text-futurie-yellow-100 mobile-safe-text ${
                    animationPhase === 0 ? 'animate-pulse' : ''
                  }`}
                  style={{ 
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  APPLY NOW
                </span>
                
                <ArrowRight className={`w-5 h-5 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-125 group-hover:text-futurie-yellow-200 ${
                  animationPhase === 2 ? 'animate-bounce' : ''
                }`} />
              </div>
            </div>
            
            {/* Enhanced Mobile Glow Effects */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-futurie-pink-400 to-futurie-purple-400 opacity-0 group-hover:opacity-50 transition-all duration-500 blur-sm" />
            
            {/* Enhanced Mobile Pulsing Ring */}
            <div className={`absolute -inset-2 rounded-3xl border-2 border-futurie-yellow-300 transition-all duration-1000 ${
              animationPhase === 1 ? 'scale-115 opacity-70' : 'scale-100 opacity-40'
            }`} />

            {/* Additional Mobile Glow Ring */}
            <div className={`absolute -inset-4 rounded-3xl border border-futurie-pink-300 transition-all duration-1500 ${
              animationPhase === 2 ? 'scale-120 opacity-50' : 'scale-100 opacity-20'
            }`} />
          </button>

          {/* Enhanced Mobile Floating Tooltip */}
          <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 pointer-events-none ${
            animationPhase === 2 ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'
          }`}>
            <div 
              className="bg-futurie-purple-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-xl whitespace-nowrap mobile-safe-text border border-futurie-purple-400"
              style={{ 
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              🚀 Join Now!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyApplyButton;