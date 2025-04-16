
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const Index = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Use a simple health check that doesn't require a specific table
        const { data, error } = await supabase.auth.getSession();
        
        if (!error) {
          // Connection successful
          setIsConnected(true);
          toast({
            title: "Supabase Connected",
            description: "Your application is successfully connected to Supabase.",
          });
        } else {
          throw error;
        }
      } catch (error) {
        console.error("Supabase connection error:", error);
        setIsConnected(false);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Supabase + React App</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${
                isConnected === null ? 'bg-gray-400' : 
                isConnected ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span>
                {isConnected === null ? 'Checking connection...' : 
                 isConnected ? 'Connected to Supabase' : 'Connection failed'}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            You're ready to start building with Supabase and React!
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Refresh Connection
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
