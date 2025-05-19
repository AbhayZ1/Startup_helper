import React from 'react';
import { Lightbulb, FileText, Rocket, BarChart3, MessagesSquare, LineChart } from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Tools for Every Stage
          </h2>
          <p className="text-lg text-gray-600">
            Our platform provides cutting-edge AI solutions that help founders from ideation to scale,
            streamlining every aspect of building a successful startup.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Lightbulb className="h-10 w-10 text-purple-600" />}
            title="Idea Validation"
            description="Get instant feedback on your startup ideas with AI-powered market analysis, SWOT, and opportunity assessment."
            linkText="Validate Your Idea"
          />
          
          <FeatureCard
            icon={<FileText className="h-10 w-10 text-purple-600" />}
            title="Business Planning"
            description="Generate comprehensive business plans, financial projections, and pitch decks tailored to your startup."
            linkText="Create Business Plan"
          />
          
          <FeatureCard
            icon={<Rocket className="h-10 w-10 text-purple-600" />}
            title="Marketing Content"
            description="Create engaging marketing copy, social media posts, and email campaigns that convert prospects to customers."
            linkText="Generate Content"
          />
          
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-purple-600" />}
            title="Website Builder"
            description="Build a professional landing page or full website for your startup in minutes with our AI-powered website generator."
            linkText="Build Website"
          />
          
          <FeatureCard
            icon={<MessagesSquare className="h-10 w-10 text-purple-600" />}
            title="AI Assistant"
            description="Get 24/7 support from our conversational AI that can help with brainstorming, research, and problem-solving."
            linkText="Chat with AI"
          />
          
          <FeatureCard
            icon={<LineChart className="h-10 w-10 text-purple-600" />}
            title="Data Insights"
            description="Analyze business metrics and get actionable insights to optimize your startup's performance and growth."
            linkText="Analyze Data"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;