
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (!error) {
          // Connection successful
          toast({
            title: "Supabase Connected",
            description: "Your application is successfully connected to Supabase.",
          });
        } else {
          throw error;
        }
      } catch (error) {
        console.error("Supabase connection error:", error);
        toast({
          variant: "destructive",
          title: "Connection Error",
          description: "Could not connect to Supabase. Please check your configuration.",
        });
      }
    };

    checkConnection();
  }, [toast]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6">Welcome to Flutter Verse</h1>
          <p className="text-xl text-gray-700 mb-8">
            Your gateway to the latest Flutter resources, tutorials, and community discussions.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Latest Tutorials</h3>
            <p className="text-gray-600 mb-4">Access the newest Flutter tutorials from experts around the world.</p>
            <Button variant="link" className="p-0">Browse Tutorials</Button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600 mb-4">Join discussions with fellow Flutter developers and share your knowledge.</p>
            <Button variant="link" className="p-0">Join Community</Button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Resources</h3>
            <p className="text-gray-600 mb-4">Find helpful resources, packages, and tools for your Flutter projects.</p>
            <Button variant="link" className="p-0">Explore Resources</Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
