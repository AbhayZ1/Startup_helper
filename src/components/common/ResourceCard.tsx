import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, type, link }) => {
  return (
    <a 
      href={link}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="mb-4 inline-block p-2 bg-purple-50 rounded-lg">
          {icon}
        </div>
        
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
          {type}
        </span>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600">
          {description}
        </p>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-100">
        <span className="inline-flex items-center text-sm font-medium text-purple-600 group-hover:text-purple-800 transition-colors">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </a>
  );
};

export default ResourceCard;