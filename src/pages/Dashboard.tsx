
import React, { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Button } from '@/components/ui/button';
import { ChevronLeft, Layout, Layers, Settings, Smartphone, Monitor, Tablet, Search, Plus, X, Save, Eye } from 'lucide-react';
import ElementsSidebar from '@/components/dashboard/ElementsSidebar';
import EditorCanvas from '@/components/dashboard/EditorCanvas';
import PropertyPanel from '@/components/dashboard/PropertyPanel';
import { Separator } from '@/components/ui/separator';

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [zoom, setZoom] = useState(90);

  return (
    <div className="h-screen flex flex-col bg-slate-900 text-slate-100">
      {/* Top Navigation Bar */}
      <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-3 justify-between">
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center">
            <span className="font-poppins font-bold text-xl bg-clip-text text-transparent bg-flutter-gradient">
              FlutterVerse
            </span>
          </a>
          <Separator orientation="vertical" className="h-6 bg-slate-700" />
          <span className="text-sm font-medium">My Project</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-slate-700 rounded-md px-2 py-1">
            <Smartphone 
              size={16} 
              className={`cursor-pointer ${selectedDevice === 'mobile' ? 'text-flutter-blue' : 'text-slate-400'}`} 
              onClick={() => setSelectedDevice('mobile')}
            />
            <Tablet 
              size={16} 
              className={`cursor-pointer ${selectedDevice === 'tablet' ? 'text-flutter-blue' : 'text-slate-400'}`} 
              onClick={() => setSelectedDevice('tablet')}
            />
            <Monitor 
              size={16} 
              className={`cursor-pointer ${selectedDevice === 'desktop' ? 'text-flutter-blue' : 'text-slate-400'}`} 
              onClick={() => setSelectedDevice('desktop')}
            />
          </div>
          
          <div className="flex items-center space-x-1 bg-slate-700 rounded-md px-2 py-1">
            <button onClick={() => setZoom(Math.max(10, zoom - 10))} className="text-slate-400 hover:text-white">-</button>
            <span className="text-xs w-8 text-center">{zoom}%</span>
            <button onClick={() => setZoom(Math.min(200, zoom + 10))} className="text-slate-400 hover:text-white">+</button>
          </div>
          
          <Button size="sm" variant="outline" className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
            <Eye size={15} className="mr-1" />
            Preview
          </Button>
          
          <Button size="sm" className="bg-flutter-blue hover:bg-flutter-blue/90">
            <Save size={15} className="mr-1" />
            Save
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Left sidebar */}
          <ResizablePanel 
            defaultSize={20} 
            minSize={collapsed ? 5 : 15} 
            maxSize={collapsed ? 5 : 30} 
            className={collapsed ? "min-w-[50px] w-[50px]" : ""}
          >
            <ElementsSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Main editor area */}
          <ResizablePanel defaultSize={55}>
            <EditorCanvas zoom={zoom} deviceType={selectedDevice} />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          {/* Property panel */}
          <ResizablePanel defaultSize={25}>
            <PropertyPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Dashboard;
