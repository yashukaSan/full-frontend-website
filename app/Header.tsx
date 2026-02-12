"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react'; 

const Header = ({ blog, contact }: { blog?: boolean; contact?: boolean }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  /**
   * TYPOGRAPHY & COLOR STRATEGY:
   * Headings: Sans-serif geometric (font-sans + tracking-tight)
   * Primary: Soft Lilac (bg-purple-50)
   * Accent: Bold Green (text-emerald-600) for contrast
   */
  const linkClass = `
    relative cursor-pointer transition-all duration-300 ease-in-out
    text-gray-600 hover:text-purple-700 font-sans tracking-wide text-sm uppercase
    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
    after:w-0 after:h-[1.5px] after:bg-emerald-500 after:transition-all 
    after:duration-300 after:ease-in-out hover:after:w-full
  `;

  const activeClass = "after:w-full text-purple-700 font-semibold";

  return (
    <header className="sticky top-0 z-50 px-6 py-4 border-b border-purple-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO: Clean Geometric Sans-Serif */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => router.push('/')}
        >
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
            <Sparkles size={16} className="text-purple-600 group-hover:text-emerald-600" />
          </div>
          <h1 className="font-sans font-bold text-xl tracking-tighter text-gray-900">
            LILAC <span className="text-purple-500 font-light">STUDIO</span>
          </h1>
        </div>

        {/* 
            DESKTOP NAV: Hidden < 800px 
            Layout: Generous spacing (gap-10)
        */}
        <nav className="hidden min-[800px]:flex items-center gap-10">
          <p 
            onClick={() => router.push('/blog')}
            className={`${linkClass} ${blog ? activeClass : ''}`}
          >
            Blog
          </p>
          <p
            onClick={() => router.push('/contacts')}
            className={`${linkClass} ${contact ? activeClass : ''}`}
          >
            Contact
          </p>
          {/* CTA Button: Rounded with Accent Green */}
          <button className="ml-4 px-5 py-2 bg-emerald-600 text-white text-sm font-sans font-medium rounded-full hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
            Get Started
          </button>
        </nav>

        {/* 
            MOBILE TOGGLE: Visible < 800px 
        */}
        <div className="min-[800px]:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN: Airy with generous padding */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white border-b border-purple-100 shadow-xl flex flex-col p-8 z-50 min-[800px]:hidden animate-in slide-in-from-top-2 duration-300">
          <p 
            onClick={() => { router.push('/blog'); setIsOpen(false); }}
            className="py-4 text-lg font-sans text-gray-800 border-b border-gray-50 flex justify-between items-center"
          >
            Blog <span className="text-emerald-500">→</span>
          </p>
          <p 
            onClick={() => { router.push('/contacts'); setIsOpen(false); }}
            className="py-4 text-lg font-sans text-gray-800 flex justify-between items-center"
          >
            Contact <span className="text-emerald-500">→</span>
          </p>
          <button className="mt-6 w-full py-4 bg-purple-600 text-white rounded-xl font-semibold">
            Work With Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
