
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const AuthButtons = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (user) {
    return (
      <>
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="text-flutter-dark-blue hover:text-flutter-blue"
        >
          Dashboard
        </Button>
        <Button 
          variant="outline" 
          onClick={handleSignOut}
          className="border-flutter-blue text-flutter-blue hover:bg-flutter-blue/10"
        >
          Sign Out
        </Button>
      </>
    );
  }

  return (
    <Button 
      className="bg-flutter-blue hover:bg-flutter-secondary transition-colors"
      onClick={() => navigate('/auth')}
    >
      Sign In
    </Button>
  );
};
