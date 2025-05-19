import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Build Your Startup with AI?
        </h2>
        <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-8">
          Join thousands of founders who have accelerated their journey with our AI-powered platform.
          Get started today with our free plan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <button className="bg-white text-purple-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all flex items-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-all">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;