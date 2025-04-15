
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface PropertySectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const PropertySection: React.FC<PropertySectionProps> = ({ 
  title, 
  children, 
  defaultExpanded = true 
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  
  return (
    <div className="border-b border-slate-700">
      <div 
        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-slate-700/30"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-sm font-medium">{title}</h3>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      
      {expanded && (
        <div className="px-4 py-2 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
};

const PropertyPanel: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-slate-800 border-l border-slate-700">
      <div className="p-3 border-b border-slate-700">
        <h2 className="text-sm font-medium">Properties</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <PropertySection title="Page Parameters">
          <div className="space-y-1.5">
            <Label htmlFor="page-name" className="text-xs">Page Name</Label>
            <Input 
              id="page-name" 
              className="h-8 text-sm bg-slate-700 border-slate-600" 
              defaultValue="mainHomePage"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="page-description" className="text-xs">Description</Label>
            <Input 
              id="page-description" 
              className="h-8 text-sm bg-slate-700 border-slate-600" 
              placeholder="Describe your page here..."
            />
          </div>
        </PropertySection>
        
        <PropertySection title="Route Settings">
          <div className="space-y-1.5">
            <Label htmlFor="route-path" className="text-xs">Route</Label>
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">/</span>
              <Input 
                id="route-path" 
                className="h-8 text-sm bg-slate-700 border-slate-600" 
                defaultValue="mainHomePage"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 pt-1">
            <Switch id="auth-required" />
            <Label htmlFor="auth-required" className="text-xs">Requires Authentication</Label>
          </div>
        </PropertySection>
        
        <PropertySection title="Visibility">
          <div className="space-y-1.5">
            <Label className="text-xs">Opacity</Label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue="1"
                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs w-6 text-right">1</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 pt-1">
            <Switch id="animated-opacity" />
            <Label htmlFor="animated-opacity" className="text-xs">Animated Opacity</Label>
          </div>
        </PropertySection>
        
        <PropertySection title="Page (Scaffold) Properties">
          <div className="space-y-1.5">
            <Label className="text-xs">Background Color</Label>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded border border-slate-600"></div>
              <span className="text-xs">Primary Background</span>
            </div>
          </div>
          
          <div className="pt-2">
            <Label className="text-xs block mb-1">Safe Area</Label>
            <div className="flex items-center space-x-2">
              <Switch id="safe-area" defaultChecked />
              <span className="text-xs text-slate-300">Enabled</span>
            </div>
          </div>
          
          <div className="pt-2">
            <Label className="text-xs block mb-1">Keyboard Options</Label>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Switch id="hide-keyboard" defaultChecked />
                <Label htmlFor="hide-keyboard" className="text-xs">Hide Keyboard on Tap</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disable-back" />
                <Label htmlFor="disable-back" className="text-xs">Disable Android Back Button</Label>
              </div>
            </div>
          </div>
        </PropertySection>
        
        <PropertySection title="Nav Bar Item Properties">
          <div className="flex items-center space-x-2">
            <Switch id="show-nav-bar" defaultChecked />
            <Label htmlFor="show-nav-bar" className="text-xs">Show on Nav Bar</Label>
          </div>
          
          <div className="flex items-center space-x-2 pt-1">
            <Switch id="always-show" />
            <Label htmlFor="always-show" className="text-xs">Always Show Nav Bar on Page</Label>
          </div>
          
          <div className="space-y-1.5 pt-2">
            <Label htmlFor="nav-label" className="text-xs">Label</Label>
            <Input 
              id="nav-label" 
              className="h-8 text-sm bg-slate-700 border-slate-600" 
              defaultValue="Home"
            />
          </div>
        </PropertySection>
      </div>
    </div>
  );
};

export default PropertyPanel;
