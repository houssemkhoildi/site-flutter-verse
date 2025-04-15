
import React from 'react';
import { ArrowRight, Smartphone, Laptop, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="bg-flutter-gradient rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 lg:p-16 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Ready to Build Your Next Mobile App with Flutter?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-lg">
                  Let's transform your idea into a stunning cross-platform mobile application. Get in touch with our Flutter development team today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-flutter-blue hover:bg-white/90">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-white">
                  <Smartphone className="mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p className="opacity-90">Native-quality iOS and Android apps from a single codebase.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-white">
                  <Laptop className="mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Web Apps</h3>
                  <p className="opacity-90">Progressive web apps with the same codebase as mobile.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-white md:col-span-2">
                  <Code className="mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="opacity-90">Tailored Flutter development solutions for your specific business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
