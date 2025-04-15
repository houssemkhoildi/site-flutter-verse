
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import AppShowcase from '@/components/AppShowcase';
import TechStack from '@/components/TechStack';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Zap, Code, Smartphone, Palette, RotateCcw, Award } from 'lucide-react';

const Index = () => {
  // Add scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-flutter-dark-blue">
              Why Choose Flutter?
            </h2>
            <p className="text-gray-600">
              Flutter provides an easy and efficient way to build beautiful mobile apps 
              with a single codebase for multiple platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap} 
              title="Fast Development" 
              description="Hot reload helps you quickly and easily experiment, build UIs, add features, and fix bugs."
              link="/dashboard"
            />
            <FeatureCard 
              icon={Smartphone} 
              title="Native Performance" 
              description="Flutter's widgets incorporate all critical platform differences such as scrolling, navigation, icons and fonts." 
            />
            <FeatureCard 
              icon={Code} 
              title="Single Codebase" 
              description="Build apps for mobile, web, desktop, and embedded devices, all from a single codebase." 
            />
            <FeatureCard 
              icon={Palette} 
              title="Expressive UI" 
              description="Quickly ship features with a focus on native end-user experiences with Flutter's layered architecture." 
            />
            <FeatureCard 
              icon={RotateCcw} 
              title="Hot Reload" 
              description="See changes in real-time without losing state, making development faster and more efficient." 
            />
            <FeatureCard 
              icon={Award} 
              title="Google Quality" 
              description="Backed by Google, Flutter is an open-source UI toolkit for building beautiful applications." 
            />
          </div>
        </div>
      </section>
      
      <AppShowcase />
      <TechStack />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
