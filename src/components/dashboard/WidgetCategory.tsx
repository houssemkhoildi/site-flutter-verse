
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Widget {
  name: string;
  icon: string;
}

interface WidgetCategoryProps {
  name: string;
  widgets: Widget[];
  searchTerm: string;
}

const WidgetCategory: React.FC<WidgetCategoryProps> = ({ name, widgets, searchTerm }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const filteredWidgets = searchTerm 
    ? widgets.filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : widgets;
    
  if (searchTerm && filteredWidgets.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-2">
      <div 
        className="flex items-center px-3 py-1.5 hover:bg-slate-700/50 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        <span className="text-xs font-medium ml-1">{name}</span>
      </div>
      
      {isExpanded && (
        <div className="pl-3">
          {filteredWidgets.map((widget, idx) => (
            <div 
              key={idx}
              className="flex items-center px-3 py-1.5 hover:bg-slate-700/70 cursor-pointer group"
              draggable
            >
              <div className="w-5 h-5 flex items-center justify-center text-xs bg-slate-700 rounded mr-2 group-hover:bg-slate-600">
                {widget.icon}
              </div>
              <span className="text-xs">{widget.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WidgetCategory;
