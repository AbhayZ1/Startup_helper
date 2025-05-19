import React from 'react';
import { Check } from 'lucide-react';
import PricingCard from './common/PricingCard';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible Plans for Every Stage
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're just starting out or scaling up, we have the perfect plan to support your journey.
            All plans include our core AI tools with varying usage limits.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <PricingCard
            title="Free"
            price="$0"
            description="Perfect for testing the waters and validating your startup idea."
            buttonText="Get Started"
            buttonVariant="secondary"
            features={[
              "Idea validation (3 per month)",
              "Basic content generation",
              "1-page website builder",
              "Community access",
              "Email support"
            ]}
          />
          
          {/* Premium Tier */}
          <PricingCard
            title="Premium"
            price="$49"
            description="Ideal for early-stage startups gaining traction and building their foundation."
            buttonText="Start Free Trial"
            buttonVariant="primary"
            popular={true}
            features={[
              "Unlimited idea validation",
              "Advanced content generation",
              "Full website builder",
              "Business plan generation",
              "AI assistant (100 queries/mo)",
              "Data analysis tools",
              "Priority email support"
            ]}
          />
          
          {/* Enterprise Tier */}
          <PricingCard
            title="Enterprise"
            price="$199"
            description="Designed for growing startups that need advanced AI capabilities and customization."
            buttonText="Contact Sales"
            buttonVariant="secondary"
            features={[
              "All Premium features",
              "Unlimited AI assistant usage",
              "Custom AI model training",
              "API access for integrations",
              "Advanced data analytics",
              "Dedicated success manager",
              "24/7 priority support",
              "Team collaboration features"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;