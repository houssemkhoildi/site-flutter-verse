
import React from 'react';

interface EditorCanvasProps {
  zoom: number;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({ zoom, deviceType }) => {
  // Determine device dimensions
  const deviceDimensions = {
    mobile: { width: 360, height: 640 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1440, height: 900 }
  };
  
  const { width, height } = deviceDimensions[deviceType];
  const scale = zoom / 100;
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-950 overflow-auto p-4">
      <div className="relative" style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
        <div 
          className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-slate-300"
          style={{ 
            width: `${width}px`, 
            height: `${height}px`
          }}
        >
          {/* Example mock content */}
          <div className="bg-flutter-blue text-white p-4 flex items-center justify-between">
            <span className="font-medium">shop.io</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </div>
          </div>
          
          <div className="p-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Featured Products</h2>
            <p className="text-sm text-slate-600 mb-4">View our latest styles from across our store below.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-100 rounded-lg aspect-square flex items-center justify-center">
                <div className="bg-slate-200 w-3/4 h-3/4 rounded"></div>
              </div>
              <div className="bg-slate-100 rounded-lg aspect-square flex items-center justify-center">
                <div className="bg-slate-200 w-3/4 h-3/4 rounded"></div>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-3 mb-3 shadow-sm">
              <div className="bg-slate-200 w-full h-32 rounded mb-2"></div>
              <div className="bg-slate-100 w-1/2 h-5 rounded mb-1"></div>
              <div className="bg-slate-100 w-1/4 h-4 rounded"></div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-3 mb-3 shadow-sm">
              <div className="bg-slate-200 w-full h-32 rounded mb-2"></div>
              <div className="bg-slate-100 w-1/2 h-5 rounded mb-1"></div>
              <div className="bg-slate-100 w-1/4 h-4 rounded"></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs py-1 px-3 rounded-full">
          {width} × {height}
        </div>
      </div>
    </div>
  );
};

export default EditorCanvas;
