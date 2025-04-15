
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4", 
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="font-poppins font-bold text-2xl bg-clip-text text-transparent bg-flutter-gradient">
            houdev.tech
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors">
            Features
          </a>
          <a href="#showcase" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors">
            Showcase
          </a>
          <a href="#tech" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors">
            Tech Stack
          </a>
          {user ? (
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
          ) : (
            <Button 
              className="bg-flutter-blue hover:bg-flutter-secondary transition-colors"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-flutter-dark-blue">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a onClick={toggleMenu} href="#features" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors py-2">
              Features
            </a>
            <a onClick={toggleMenu} href="#showcase" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors py-2">
              Showcase
            </a>
            <a onClick={toggleMenu} href="#tech" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors py-2">
              Tech Stack
            </a>
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/dashboard');
                    toggleMenu();
                  }}
                  className="text-flutter-dark-blue hover:text-flutter-blue justify-start"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    handleSignOut();
                    toggleMenu();
                  }}
                  className="border-flutter-blue text-flutter-blue hover:bg-flutter-blue/10 w-full"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                className="bg-flutter-blue hover:bg-flutter-secondary transition-colors w-full"
                onClick={() => {
                  navigate('/auth');
                  toggleMenu();
                }}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
