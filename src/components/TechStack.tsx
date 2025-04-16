
import React from 'react';
import { Check } from 'lucide-react';

interface TechStackProps {
  className?: string;
}

interface TechItem {
  name: string;
  features: string[];
  icon: string;
}

const technologies: TechItem[] = [
  {
    name: "Flutter",
    icon: "F",
    features: [
      "Single codebase for all platforms",
      "Rich set of pre-designed widgets",
      "Fast development with hot reload",
      "Native performance on all platforms"
    ]
  },
  {
    name: "Dart",
    icon: "D",
    features: [
      "Object-oriented programming language",
      "Strong typing for safer code",
      "Asynchronous programming support",
      "Optimized for UI development"
    ]
  },
  {
    name: "Firebase",
    icon: "Fb",
    features: [
      "Real-time database integration",
      "Authentication services",
      "Cloud storage solutions",
      "Analytics and crash reporting"
    ]
  }
];

const TechStack: React.FC<TechStackProps> = ({ className }) => {
  return (
    <section id="tech" className={`py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-flutter-dark-blue">
            Technology Stack
          </h2>
          <p className="text-gray-600">
            We use cutting-edge technologies to build robust, scalable, and beautiful mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transform transition-transform hover:scale-105"
            >
              <div className="bg-flutter-gradient p-6 text-white text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                  <span className="text-2xl font-bold">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check size={16} className="text-green-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
