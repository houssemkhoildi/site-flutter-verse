
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClick = (callback: () => void) => {
    callback();
    onClose();
  };

  return (
    <div className="md:hidden bg-white absolute top-16 left-0 w-full p-4 shadow-md animate-fade-in">
      <div className="flex flex-col space-y-4">
        <a onClick={() => handleClick(onClose)} href="#features" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors py-2">
          Features
        </a>
        <a onClick={() => handleClick(onClose)} href="#showcase" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors py-2">
          Showcase
        </a>
        <a onClick={() => handleClick(onClose)} href="#tech" className="font-medium text-flutter-dark-blue hover:text-flutter-blue transition-colors py-2">
          Tech Stack
        </a>
        <AuthButtons />
      </div>
    </div>
  );
};
