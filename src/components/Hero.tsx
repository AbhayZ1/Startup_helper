import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(124, 58, 237, 0.1) 0%, rgba(15, 23, 42, 0) 50%)`,
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Interactive background gradient */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={gradientStyle}
      />
      
      {/* Hero content */}
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-8">
          <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
          <span className="text-sm font-medium text-purple-800">
            Transforming Startups with AI in 2025
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
          Build Your Startup Faster <br className="hidden md:inline" />
          with Advanced AI Tools
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Leverage cutting-edge artificial intelligence to validate ideas, create content, 
          manage operations, and scale your business. The complete toolkit for the modern founder.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:shadow-lg transition-all flex items-center justify-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg text-lg font-medium hover:border-purple-300 hover:bg-gray-50 transition-all">
            Watch Demo
          </button>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-purple-600 mb-1">2,500+</p>
            <p className="text-gray-600 text-sm">Startups Launched</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-purple-600 mb-1">$120M+</p>
            <p className="text-gray-600 text-sm">Funding Raised</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-purple-600 mb-1">98%</p>
            <p className="text-gray-600 text-sm">Founder Satisfaction</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-purple-600 mb-1">30+</p>
            <p className="text-gray-600 text-sm">AI Tools & Features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;