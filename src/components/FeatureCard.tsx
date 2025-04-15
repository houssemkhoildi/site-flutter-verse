
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  link 
}) => {
  const cardContent = (
    <>
      <div className="bg-flutter-gradient rounded-lg w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-flutter-dark-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link to={link} className={cn(
        "bg-white rounded-xl p-6 feature-card border border-gray-100 shadow-sm block",
        className
      )}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cn(
      "bg-white rounded-xl p-6 feature-card border border-gray-100 shadow-sm",
      className
    )}>
      {cardContent}
    </div>
  );
};

export default FeatureCard;
