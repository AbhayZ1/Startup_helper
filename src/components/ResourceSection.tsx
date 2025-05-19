import React from 'react';
import { BookOpen, FileText, Play, Lightbulb } from 'lucide-react';
import ResourceCard from './common/ResourceCard';

const ResourceSection: React.FC = () => {
  return (
    <section id="resources" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Resources for Founders
          </h2>
          <p className="text-lg text-gray-600">
            Discover guides, tutorials, and insights to help you leverage AI effectively in your startup journey.
          </p>
        </div>
        
        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ResourceCard
            icon={<BookOpen className="h-8 w-8 text-purple-600" />}
            title="Ultimate Guide to AI for Startups"
            description="Learn how to implement AI in every aspect of your startup from ideation to scale."
            type="Guide"
            link="#"
          />
          
          <ResourceCard
            icon={<FileText className="h-8 w-8 text-purple-600" />}
            title="AI Pitch Deck Templates"
            description="Download ready-to-use pitch deck templates optimized for AI startups."
            type="Template"
            link="#"
          />
          
          <ResourceCard
            icon={<Play className="h-8 w-8 text-purple-600" />}
            title="Getting Funding for AI Startups"
            description="Video tutorial on how to approach investors and secure funding for AI ventures."
            type="Video"
            link="#"
          />
          
          <ResourceCard
            icon={<Lightbulb className="h-8 w-8 text-purple-600" />}
            title="AI Business Model Canvas"
            description="Interactive tool to help you define your AI startup's business model."
            type="Tool"
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;