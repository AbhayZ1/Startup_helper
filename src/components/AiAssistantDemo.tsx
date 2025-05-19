import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AiAssistantDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI startup assistant. How can I help you today? You can ask me about business ideas, marketing strategies, or startup advice.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response = '';
      
      if (input.toLowerCase().includes('business') || input.toLowerCase().includes('idea')) {
        response = "That's a great business idea! I'd recommend starting with market research to validate your concept. I can help you create a simple business model canvas to outline your value proposition, customer segments, and revenue streams.";
      } else if (input.toLowerCase().includes('marketing') || input.toLowerCase().includes('promote')) {
        response = "For effective marketing, I'd suggest starting with content marketing and social media. I can help you create a content calendar and social media posts tailored to your target audience. Would you like me to generate some sample posts for you?";
      } else if (input.toLowerCase().includes('funding') || input.toLowerCase().includes('investor')) {
        response = "When approaching investors, focus on your traction, market opportunity, and unique value proposition. I can help you prepare a compelling pitch deck that highlights these key aspects. Would you like me to outline what should be included in your deck?";
      } else {
        response = "Thanks for your message! I can help with business planning, market research, content creation, and strategic advice for your startup. Could you tell me more about what specific aspect you're working on?";
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="assistant" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try Our AI Assistant
          </h2>
          <p className="text-lg text-gray-600">
            Experience firsthand how our AI can help with your startup questions.
            Ask about business ideas, marketing strategies, or getting funding.
          </p>
        </div>
        
        {/* Chat interface */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-xl p-3 ${
                    message.sender === 'user' 
                      ? 'bg-purple-600 text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mr-1 text-purple-600" />}
                    <span className={`text-xs ${message.sender === 'user' ? 'text-purple-100' : 'text-gray-500'}`}>
                      {message.sender === 'user' ? 'You' : 'AI Assistant'}
                    </span>
                    {message.sender === 'user' && <User className="h-4 w-4 ml-1 text-purple-100" />}
                  </div>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-xl rounded-tl-none max-w-[80%] p-3">
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse mx-1"></span>
                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about business ideas, marketing, funding..."
                className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistantDemo;