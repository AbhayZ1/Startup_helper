import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, linkText }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all group">
      <div className="mb-4 inline-block p-3 bg-purple-50 rounded-lg">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <a 
        href="#" 
        className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-800 transition-colors"
      >
        {linkText}
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default FeatureCard;