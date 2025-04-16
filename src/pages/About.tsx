
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">About Flutter Verse</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg">
            Flutter Verse is a comprehensive platform for Flutter developers, enthusiasts, and beginners alike. Our mission is to create an ecosystem where Flutter developers can learn, grow, and connect.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Our Story</h2>
          <p>
            Founded in 2025, Flutter Verse emerged from the growing need for a centralized hub of Flutter resources. 
            What started as a small blog has evolved into a thriving community of developers sharing knowledge and building the future of mobile and web applications with Flutter.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
          <p>
            We're dedicated to empowering Flutter developers by providing high-quality tutorials, comprehensive resources, and a supportive community. 
            We believe in the power of knowledge sharing and collaborative learning to advance the Flutter ecosystem.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Connect With Us</h2>
          <p>
            We're always looking to connect with Flutter enthusiasts and experts. Whether you want to contribute content, suggest improvements, or just say hello, we'd love to hear from you!
          </p>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button>Contact Us</Button>
          <Button variant="outline">Join Our Team</Button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
