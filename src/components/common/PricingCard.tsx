import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  buttonText,
  buttonVariant,
  features,
  popular = false
}) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden ${
      popular ? 'ring-2 ring-purple-600 scale-105 shadow-xl' : 'border border-gray-200 shadow-sm'
    }`}>
      {popular && (
        <div className="bg-purple-600 text-white py-2 px-4 text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
        
        <p className="text-gray-600 mb-6 min-h-[60px]">{description}</p>
        
        <button 
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
            buttonVariant === 'primary' 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg' 
              : 'bg-white border border-gray-300 text-gray-800 hover:border-purple-300 hover:bg-gray-50'
          }`}
        >
          {buttonText}
        </button>
      </div>
      
      <div className="border-t border-gray-200 p-6">
        <p className="font-medium text-gray-900 mb-4">What's included:</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;