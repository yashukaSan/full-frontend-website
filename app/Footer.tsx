"use client";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function Footer() {
  const router = useRouter();

  // Updated Footer Link: Raleway Font + Sakura Pink Hover
  const footerLink =
    "text-pink-900/60 hover:text-pink-600 transition-colors duration-300 cursor-pointer text-sm font-['Raleway'] tracking-tight";

  return (
    <footer className="bg-[#fff5f7] border-t border-pink-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Connect Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-['Raleway'] font-bold text-2xl tracking-tighter text-pink-950 uppercase">
              Lilac <span className="text-pink-400 font-light">Studio</span>
            </h3>
            <div className="space-y-3 text-pink-900/70 font-['Roboto'] leading-relaxed">
              <p className="flex items-center gap-2 font-['Lora'] italic">
                <MapPin size={16} className="text-pink-300" />
                123 Example Road Minneapolis, MN
              </p>
              <a
                href="mailto:email@example.com"
                className="flex items-center gap-2 hover:text-pink-600 transition-colors"
              >
                <Mail size={16} className="text-pink-300" />
                email@example.com
              </a>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-pink-300" />
                (555) 555-5555
              </p>
            </div>
          </div>

          {/* Right Side: Hours & Navigation */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Hours Column: Sakura Accent Box */}
            <div className="bg-white/60 p-8 rounded-3xl border border-pink-100 shadow-sm">
              <h3 className="font-['Raleway'] font-bold text-pink-500 uppercase tracking-widest text-xs mb-4">
                Hours of Operation
              </h3>
              <p className="text-pink-950 font-['Open_Sans'] font-medium">
                Monday — Friday
              </p>
              <p className="text-pink-400 font-['Raleway'] font-light text-2xl mt-1">
                10am — 6pm
              </p>
              <div className="mt-4 h-1 w-10 bg-pink-300 rounded-full" />
            </div>

            {/* Navigation Column */}
            <div className="flex flex-col space-y-4 px-2">
              <h3 className="font-['Raleway'] font-bold text-pink-950 uppercase tracking-widest text-xs mb-2">
                Explore
              </h3>
              {["Home", "Contacts", "Blog"].map((item) => (
                <p
                  key={item}
                  onClick={() => router.push(`/${item.toLowerCase()}`)}
                  className="group flex items-center gap-2 text-pink-900/70 hover:text-pink-600 cursor-pointer transition-all font-['Raleway'] font-semibold"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-pink-400"
                  />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-pink-100 pt-10 mt-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              <li>
                <a className={footerLink}>Privacy & Cookies Policy</a>
              </li>
              <li>
                <a className={footerLink}>Good Faith Estimate</a>
              </li>
              <li>
                <a className={footerLink}>Terms & Conditions</a>
              </li>
              <li>
                <a className={footerLink}>Disclaimer</a>
              </li>
            </ul>

            <div className="text-right">
              <p className="text-xs text-pink-900/40 font-['Open_Sans'] tracking-wide">
                All Rights Reserved &copy; 2024 Your Business Name Here, LLC.
              </p>
              <p className="text-xs text-pink-900/40 mt-1 font-['Open_Sans']">
                Template Credits:{" "}
                <a className="text-pink-300 hover:text-pink-500 underline decoration-dotted">
                  Go Bloom Creative
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
