"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";
import HEADER from "../Header";
import FOOTER from "../Footer";
import {
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import i8 from "../../public/i8.webp";
import i7 from "../../public/i7.webp";

function Contacts() {
  const router = useRouter();
  // Sakura Theme Constants
  const sectionBase =
    "min-h-[60vh] w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden";
  const headingLg =
    "font-['Raleway'] font-bold text-5xl md:text-7xl tracking-tighter text-pink-950 mb-8";
  const headingMd =
    "font-['Raleway'] font-bold text-3xl text-pink-900 mb-6 uppercase tracking-widest";
  const bodyText =
    "text-pink-900/70 font-['Roboto','Open_Sans'] text-lg leading-relaxed max-w-xl mb-6";

  return (
    <div className="bg-white selection:bg-pink-200">
      <HEADER blog={false} contact={true} />

      {/* --- HERO SECTION: Let's Connect (Soft Pink Backdrop) --- */}
      <section className={`${sectionBase} bg-[#fff5f7]`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className={headingLg}>
              Let&apos;s{" "}
              <span className="text-pink-500 italic font-['Lora'] font-light">
                Connect
              </span>
            </h1>
            <p className="text-xl text-pink-700 font-['Lora'] font-medium mb-4 italic">
              Starting therapy is courageous.
            </p>
            <p className={bodyText}>
              Get in touch for questions, or to book a free 15-minute
              consultation. I typically respond within 24–48 business hours.
            </p>

            {/* HIPAA Notice: Sakura Pink Accent */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-pink-400 shadow-sm mt-8 ring-1 ring-pink-50">
              <p className="text-sm text-pink-900/80 leading-relaxed font-['Open_Sans']">
                <strong className="text-pink-700 font-bold font-['Raleway']">
                  PLEASE NOTE:
                </strong>{" "}
                To ensure your privacy is protected and to remain{" "}
                <span className="font-bold text-pink-800">HIPAA-compliant</span>
                , please do not share sensitive health information via this
                form. I recommend using the client portal for secure messaging.
              </p>
            </div>
          </div>

          <div className="relative h-125 flex items-center justify-center">
            <Image
              alt="flower"
              width={350}
              height={450}
              src={i7}
              className="rounded-t-full shadow-2xl object-cover border-8 border-white ring-1 ring-pink-100"
            />
            <Image
              alt="flower accent"
              width={180}
              height={180}
              src={i8}
              className="rounded-full absolute bottom-4 right-4 border-8 border-[#fff5f7] shadow-2xl z-10"
            />
          </div>
        </div>
      </section>

      {/* --- APPOINTMENT SECTION --- */}
      <section className={`${sectionBase} bg-white text-center`}>
        <div className="max-w-3xl">
          <h2 className="font-['Libre_Baskerville'] font-bold text-4xl text-pink-950 mb-6">
            Book an appointment
          </h2>
          <p className={bodyText + " mx-auto"}>
            Ready to take the next step? Use the secure scheduling widget below
            to find a time that works for you.
          </p>

          {/* Mock Scheduling Widget: Soft Blossom Styling */}
          <div className="mt-10 p-12 border-2 border-dashed border-pink-100 rounded-[3rem] bg-[#fdf2f4]/50 flex flex-col items-center">
            <p className="text-pink-400 font-['Lora'] italic mb-6 text-xl">
              Your scheduling widget or portal link goes here
            </p>
            <button className="bg-pink-500 text-white px-10 py-4 rounded-full font-['Raleway'] font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100 flex items-center gap-2">
              Open Client Portal <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* --- MAP & OFFICE: Sakura Card --- */}
      <section className={`${sectionBase} bg-[#fdf2f4]/30`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 w-full gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-pink-100">
          <div
           onClick={()=>router.push('/office')}
           className="bg-white p-12 md:p-20 flex flex-col justify-center hover:cursor-pointer">
            <h2 className={headingMd}>My Office</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-pink-500 mt-1" />
                <p className="text-pink-900/70 font-['Open_Sans'] text-lg">
                  123th Street 45 W,
                  <br />
                  Santa Monica, CA 90401
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-pink-500 mt-1" />
                <div>
                  <p className="text-pink-950 font-['Raleway'] font-bold uppercase tracking-widest text-xs mb-2">
                    Hours
                  </p>
                  <p className="text-pink-900/70 font-['Open_Sans'] text-lg">
                    Monday — Friday
                    <br />
                    10am — 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-100 md:h-auto min-h-100 grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6614.361388403876!2d-118.498343500487!3d34.01357249268619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sin!4v1770838408453!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- SOCIAL SECTION: Sakura Blossom Grid --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="font-['Libre_Baskerville'] font-bold text-3xl text-pink-950 mb-4">
            Find me on social
          </h2>
          <p className="text-pink-400 font-['Lora'] italic text-2xl mb-12">
            @LilacStudioWellness
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md ring-1 ring-pink-50"
              >
                <Image
                  alt="social post"
                  fill
                  src={i7}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-pink-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center gap-8 text-pink-200">
            <Instagram
              className="hover:text-pink-500 cursor-pointer transition-colors"
              size={24}
            />
            <Facebook
              className="hover:text-pink-500 cursor-pointer transition-colors"
              size={24}
            />
            <Linkedin
              className="hover:text-pink-500 cursor-pointer transition-colors"
              size={24}
            />
          </div>
        </div>
      </section>

      <FOOTER />
    </div>
  );
}

export default Contacts;
