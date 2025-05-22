import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full py-5 px-4 sm:px-6 md:px-8 absolute top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold font-heading gradient-text">
            Lust Stories
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="text-white/80 hover:text-white transition-colors duration-300">
            Features
          </Link>
          <Link href="#stories" className="text-white/80 hover:text-white transition-colors duration-300">
            Stories
          </Link>
          <Link href="#pricing" className="text-white/80 hover:text-white transition-colors duration-300">
            Pricing
          </Link>
          <Link href="#faq" className="text-white/80 hover:text-white transition-colors duration-300">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-white/80 hover:text-white transition-colors duration-300 hidden md:block">
            Log In
          </Link>
          <Link href="/signup" className="btn-primary">
            Get Started
          </Link>
          
          <button className="md:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 