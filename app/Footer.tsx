"use client";
import { useRouter } from 'next/navigation';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'; // Optional icons

function Footer() {
  const router = useRouter();

  // Reusable Link Class for Consistency
  const footerLink = "text-gray-600 hover:text-emerald-600 transition-colors duration-300 cursor-pointer text-sm font-sans tracking-tight";

  return (
    <footer className="bg-white border-t border-purple-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Connect Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-2xl tracking-tighter text-gray-900 uppercase">
              Lilac <span className="text-purple-400 font-light">Studio</span>
            </h3>
            <div className="space-y-3 text-gray-500 font-sans leading-relaxed">
              <p className="flex items-center gap-2 italic">
                <MapPin size={16} className="text-purple-300" /> 
                123 Example Road Minneapolis, MN
              </p>
              <a href="mailto:email@example.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <Mail size={16} className="text-purple-300" /> 
                email@example.com
              </a>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-purple-300" /> 
                (555) 555-5555
              </p>
            </div>
          </div>

          {/* Right Side: Hours & Navigation */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Hours Column */}
            <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100">
              <h3 className="font-sans font-bold text-emerald-600 uppercase tracking-widest text-xs mb-4">
                Hours of Operation
              </h3>
              <p className="text-gray-900 font-medium">Monday — Friday</p>
              <p className="text-purple-500 font-light text-2xl mt-1">10am — 6pm</p>
              <div className="mt-4 h-1 w-10 bg-emerald-500 rounded-full" />
            </div>

            {/* Navigation Column */}
            <div className="flex flex-col space-y-4 px-2">
              <h3 className="font-sans font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">
                Explore
              </h3>
              {["Home", "Contact", "Blog"].map((item) => (
                <p
                  key={item}
                  onClick={() => router.push(`/${item.toLowerCase()}`)}
                  className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 cursor-pointer transition-all font-sans font-medium"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-emerald-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-purple-50 pt-10 mt-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              <li><a className={footerLink}>Privacy & Cookies Policy</a></li>
              <li><a className={footerLink}>Good Faith Estimate</a></li>
              <li><a className={footerLink}>Terms & Conditions</a></li>
              <li><a className={footerLink}>Disclaimer</a></li>
            </ul>
            
            <div className="text-right">
              <p className="text-xs text-gray-400 font-sans tracking-wide">
                All Rights Reserved &copy; 2024 Your Business Name Here, LLC.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Template Credits: <a className="text-purple-400 hover:text-emerald-500 underline decoration-dotted">Go Bloom Creative</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
