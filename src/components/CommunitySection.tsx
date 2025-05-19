import React from 'react';
import { Users, Calendar, MessageCircle, Globe } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Founder Community
          </h2>
          <p className="text-lg text-gray-600">
            Connect with like-minded founders, share experiences, and get support on your startup journey.
          </p>
        </div>
        
        {/* Community features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Founder Community" 
              className="rounded-lg w-full h-auto shadow-md"
            />
          </div>
          
          {/* Features */}
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Networking Events</h3>
                <p className="mt-2 text-gray-600">
                  Regular virtual and in-person meetups with founders, investors, and industry experts.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                  <Calendar className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Exclusive Workshops</h3>
                <p className="mt-2 text-gray-600">
                  Participate in specialized workshops focused on AI implementation, fundraising, and growth.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Private Forum</h3>
                <p className="mt-2 text-gray-600">
                  Access our members-only discussion board to share challenges, solutions, and resources.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                  <Globe className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Global Connections</h3>
                <p className="mt-2 text-gray-600">
                  Build relationships with a diverse network of founders from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;