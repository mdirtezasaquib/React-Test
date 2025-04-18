import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white to-blue-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                React Props Practice
              </span>
            </Link>
          </div>
          
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/practice">Practice</NavLink>
            <NavLink to="/resource">Resources</NavLink>
           
          </div>
          
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 focus:outline-none transition duration-150 ease-in-out"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

    
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-xl rounded-lg mx-4 mb-2 transition-all duration-300`}>
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/practice" onClick={() => setIsOpen(false)}>Practice</MobileNavLink>
          <MobileNavLink to="/resource" onClick={() => setIsOpen(false)}>Resources</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}


function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative py-2 px-3 text-gray-600 font-medium hover:text-green-600 transition-colors duration-300
               after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-green-500 
               hover:after:w-full after:transition-all after:duration-300"
    >
      {children}
    </Link>
  );
}


function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block pl-5 pr-4 py-3 text-gray-600 hover:bg-green-50 rounded-lg
               transition-colors duration-200 font-medium border-l-4 border-transparent
               hover:border-green-500 mx-2"
    >
      {children}
    </Link>
  );
}
