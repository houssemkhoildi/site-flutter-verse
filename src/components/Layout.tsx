
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Flutter Verse</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-sky-300 transition-colors">Home</Link></li>
                <li><Link to="/dashboard" className="hover:text-sky-300 transition-colors">Dashboard</Link></li>
                <li><Link to="/about" className="hover:text-sky-300 transition-colors">About</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Flutter Verse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
