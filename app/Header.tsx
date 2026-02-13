"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

const Header = ({ blog, contact }: { blog?: boolean; contact?: boolean }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  /**
   * SAKURA THEME STRATEGY:
   * Headings/Links: Raleway (font-['Raleway'])
   * Primary: Sakura Pink (text-pink-500)
   * Accent: Deep Cherry (text-pink-900) for contrast
   */
  const linkClass = `
    relative cursor-pointer transition-all duration-300 ease-in-out
    text-pink-900/70 hover:text-pink-600 font-['Raleway'] font-medium tracking-widest text-xs uppercase
    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
    after:w-0 after:h-[1.5px] after:bg-pink-400 after:transition-all 
    after:duration-300 after:ease-in-out hover:after:w-full
  `;

  const activeClass = "after:w-full text-pink-600 font-bold";

  return (
    <header className="sticky top-0 z-50 px-6 py-4 border-b border-pink-100 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO: Raleway Branding */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => router.push("/")}
        >
          <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
            <Sparkles
              size={16}
              className="text-pink-400 group-hover:text-pink-500"
            />
          </div>
          <h1 className="font-['Raleway'] font-bold text-xl tracking-tighter text-pink-950">
            SAKURA <span className="text-pink-400 font-light">THEME</span>
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden min-[800px]:flex items-center gap-10">
          <p
            onClick={() => router.push("/blog")}
            className={`${linkClass} ${blog ? activeClass : ""}`}
          >
            Blog
          </p>
          <p
            onClick={() => router.push("/contacts")}
            className={`${linkClass} ${contact ? activeClass : ""}`}
          >
            Contact
          </p>
          <p
            onClick={() => router.push("/office")}
            className={`${linkClass} ${contact ? activeClass : ""}`}
          >
            Office
          </p>
          {/* CTA Button: Sakura Pink with Soft Shadow */}
          <button
            onClick={() => router.push("/aboutme")}
            className="ml-4 px-6 py-2 bg-pink-500 text-white text-sm font-['Raleway'] font-bold rounded-full hover:bg-pink-600 transition-all shadow-md shadow-pink-100 hover:shadow-pink-200"
          >
            Get Started
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <div className="min-[800px]:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-pink-900/60 hover:text-pink-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-pink-100 shadow-xl flex flex-col p-8 z-50 min-[800px]:hidden animate-in slide-in-from-top-2 duration-300">
          <p
            onClick={() => {
              router.push("/blog");
              setIsOpen(false);
            }}
            className="py-4 text-lg font-['Raleway'] font-semibold text-pink-950 border-b border-pink-50 flex justify-between items-center hover:cursor-pointer"
          >
            Blog <span className="text-pink-400">→</span>
          </p>
          <p
            onClick={() => {
              router.push("/contacts");
              setIsOpen(false);
            }}
            className="py-4 text-lg font-['Raleway'] font-semibold text-pink-950 flex justify-between items-center hover:cursor-pointer"
          >
            Contact <span className="text-pink-400">→</span>
          </p>
          <p
            onClick={() => {
              router.push("/office");
              setIsOpen(false);
            }}
            className="py-4 text-lg font-['Raleway'] font-semibold text-pink-950 flex justify-between items-center hover:cursor-pointer"
          >
            Our Office <span className="text-pink-400">→</span>
          </p>
          <button
           onClick={()=>router.push('/aboutme')}
           className="mt-6 w-full py-4 bg-pink-500 text-white rounded-2xl font-['Raleway'] font-bold shadow-lg shadow-pink-100 hover:cursor-pointer">
            Work With Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
