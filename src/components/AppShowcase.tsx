
import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppShowcaseProps {
  className?: string;
}

interface AppProject {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const apps: AppProject[] = [
  {
    title: "Food Delivery",
    description: "A beautiful app for ordering food from local restaurants.",
    image: "/placeholder.svg",
    bgColor: "bg-orange-100"
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts and monitor your fitness progress.",
    image: "/placeholder.svg",
    bgColor: "bg-green-100"
  },
  {
    title: "Task Manager",
    description: "Organize tasks and increase your productivity.",
    image: "/placeholder.svg",
    bgColor: "bg-blue-100"
  },
  {
    title: "Social Network",
    description: "Connect with friends and share your moments.",
    image: "/placeholder.svg",
    bgColor: "bg-purple-100"
  },
  {
    title: "E-commerce Store",
    description: "Shop for products with a seamless shopping experience.",
    image: "/placeholder.svg",
    bgColor: "bg-pink-100"
  }
];

const AppShowcase: React.FC<AppShowcaseProps> = ({ className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-flutter-dark-blue">
            App Showcase
          </h2>
          <p className="text-gray-600">
            Discover what you can build with Flutter. These example projects showcase the versatility and beauty of Flutter apps.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-100 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-flutter-blue" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {apps.map((app, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] snap-center"
              >
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 h-full bg-white">
                  <div className={`h-48 ${app.bgColor} flex items-center justify-center`}>
                    <div className="phone-mockup transform scale-[0.6] -my-20">
                      <div className="phone-screen bg-white overflow-hidden">
                        <img 
                          src={app.image} 
                          alt={app.title}
                          className="w-full h-full object-cover placeholder-blur"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-flutter-dark-blue">{app.title}</h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <Button variant="outline" className="w-full border-flutter-blue text-flutter-blue hover:bg-flutter-blue hover:text-white">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-100 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-flutter-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
