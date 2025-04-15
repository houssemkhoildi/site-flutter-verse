
import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flutter-background min-h-screen flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium">Build Once, Run Anywhere</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Create Beautiful 
              <span className="block mt-2">Mobile Apps with Flutter</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Develop cross-platform native apps with Flutter's rich set of Material Design and Cupertino widgets—all from a single codebase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-flutter-blue hover:bg-opacity-90">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Examples
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                  <Code size={20} />
                </div>
                <span className="font-medium">Fast Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                  <Smartphone size={20} />
                </div>
                <span className="font-medium">iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                  <Globe size={20} />
                </div>
                <span className="font-medium">Web Compatible</span>
              </div>
            </div>
          </div>
          
          <div className={`relative flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
            <div className="phone-mockup animate-float">
              <div className="phone-screen bg-flutter-gradient overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col">
                  <div className="bg-flutter-blue h-14 flex items-center justify-between px-4">
                    <span className="text-white font-medium">Flutter App</span>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-3">
                    <div className="bg-gray-100 h-20 rounded-lg mb-3"></div>
                    <div className="flex gap-3 mb-3">
                      <div className="bg-flutter-light-blue h-32 flex-1 rounded-lg"></div>
                      <div className="bg-flutter-secondary h-32 flex-1 rounded-lg"></div>
                    </div>
                    <div className="bg-gray-100 h-14 rounded-lg mb-3"></div>
                    <div className="bg-gray-100 h-14 rounded-lg mb-3"></div>
                    <div className="flex gap-3">
                      <div className="bg-flutter-secondary h-10 w-10 rounded-full"></div>
                      <div className="bg-gray-100 h-10 flex-1 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="bg-gray-100 h-14 flex justify-around items-center px-4">
                    <div className="w-8 h-8 bg-flutter-blue rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flutter logo floating decoration */}
            <div className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-sm h-16 w-16 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold text-white">F</div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 bg-white/10 backdrop-blur-sm h-20 w-20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
              <div className="bg-flutter-gradient h-12 w-12 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
