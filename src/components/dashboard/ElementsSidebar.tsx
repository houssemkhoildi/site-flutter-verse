
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Search, Layers, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import WidgetCategory from './WidgetCategory';

interface ElementsSidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

// Widget categories with their components
const widgetCategories = [
  {
    name: 'Layout',
    widgets: [
      { name: 'Container', icon: '□' },
      { name: 'Row', icon: '⇄' },
      { name: 'Column', icon: '⇅' },
      { name: 'Stack', icon: '⧉' },
      { name: 'GridView', icon: '▦' }
    ]
  },
  {
    name: 'Basic Elements',
    widgets: [
      { name: 'Text', icon: 'T' },
      { name: 'Image', icon: '🖼' },
      { name: 'Icon', icon: '★' },
      { name: 'Button', icon: 'B' },
      { name: 'TextField', icon: '⌨' }
    ]
  },
  {
    name: 'Navigation',
    widgets: [
      { name: 'AppBar', icon: '▀' },
      { name: 'TabBar', icon: '⋯' },
      { name: 'Drawer', icon: '☰' },
      { name: 'BottomNavBar', icon: '▄' }
    ]
  }
];

const ElementsSidebar: React.FC<ElementsSidebarProps> = ({ collapsed, setCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="h-full flex flex-col bg-slate-800 border-r border-slate-700">
      <div className="p-3 flex items-center justify-between">
        {!collapsed && (
          <>
            <h2 className="text-sm font-medium">Widgets</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 w-7 p-0 text-slate-400" 
              onClick={() => setCollapsed(true)}
            >
              <ChevronLeft size={16} />
            </Button>
          </>
        )}
        {collapsed && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 w-7 p-0 mx-auto text-slate-400" 
            onClick={() => setCollapsed(false)}
          >
            <ChevronRight size={16} />
          </Button>
        )}
      </div>
      
      {!collapsed && (
        <>
          <div className="px-3 pb-2">
            <div className="relative">
              <Search size={14} className="absolute left-2 top-2.5 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 py-1 h-8 text-sm bg-slate-900 border-slate-700"
                placeholder="Search for widgets..."
              />
            </div>
          </div>
          
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {widgetCategories.map((category, idx) => (
              <WidgetCategory 
                key={idx} 
                name={category.name} 
                widgets={category.widgets}
                searchTerm={searchTerm}
              />
            ))}
          </div>
          
          <div className="p-3 border-t border-slate-700">
            <Button 
              className="w-full bg-flutter-blue hover:bg-flutter-blue/90 text-white"
              size="sm"
            >
              <Plus size={14} className="mr-1" />
              Add Widget
            </Button>
          </div>
        </>
      )}
      
      {collapsed && (
        <div className="flex flex-col items-center pt-3 gap-3">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Search size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Layers size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Plus size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ElementsSidebar;
