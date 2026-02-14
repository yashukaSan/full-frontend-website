"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Heart, Wind, ShieldCheck, Sparkles } from "lucide-react";
import HEADER from "../Header";
import FOOTER from "../Footer";
import maya from "../../public/DrMaya.png";
import i1 from "../../public/s2.jpg";

// Using the established pattern of 60vh blocks and grid layouts
export default function AboutDrMaya() {
  const router = useRouter();

  // Pattern Constants
  const sectionWrapper =
    "min-h-[60vh] w-full flex items-center justify-center py-24 px-6 overflow-hidden";
  const contentContainer =
    "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center";

  // Typography Mapping (Raleway, Libre Baskerville, Lora, Roboto)
  const h1Heading =
    "font-['Raleway'] font-bold text-5xl md:text-7xl tracking-tighter text-pink-950 mb-6 leading-tight";
  const h2Heading =
    "font-['Libre_Baskerville'] font-bold text-3xl md:text-4xl text-pink-900 mb-8";
  const bodyText =
    "text-pink-900/70 font-['Roboto','Open_Sans'] text-lg leading-relaxed mb-6 max-w-2xl";
  const accentText = "font-['Lora'] italic text-2xl text-pink-600 mb-6";
  const btnPrimary =
    "group flex items-center gap-2 bg-pink-500 text-white px-10 py-4 rounded-full font-['Raleway'] font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100";

  return (
    <div className="bg-white selection:bg-pink-200">
      <HEADER blog={false} contact={false} />

      {/* --- HERO SECTION: Clinical Expertise meets Warmth --- */}
      <section className={`${sectionWrapper} bg-[#fff5f7]`}>
        <div className={contentContainer}>
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 text-pink-400 font-['Raleway'] font-bold tracking-widest text-xs uppercase mb-4">
              <Sparkles size={14} /> Licensed Clinical Psychologist
            </div>
            <h1 className={h1Heading}>
              Dr. Maya{" "}
              <span className="text-pink-500 italic font-['Lora'] font-light">
                Reynolds
              </span>
              , PsyD
            </h1>
            <p className={accentText}>
              Grounded therapy for the high-achieving, thoughtful, and
              self-aware.
            </p>
            <p className={bodyText}>
              Based in Santa Monica, I help adults navigate the invisible weight
              of anxiety, trauma, and burnout—moving from
              &quots;functional&quots; to truly flourishing.
            </p>
            <button
              onClick={() => router.push("/contacts")}
              className={btnPrimary}
            >
              Work With Me{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            {/* Pattern: Arched imagery with shadow */}
            <div className="relative w-72 h-96 md:w-100 md:h-137.5 border-12 border-white shadow-2xl rounded-t-full overflow-hidden ring-1 ring-pink-100">
              <Image
                src={maya}
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION: The Internal Struggle --- */}
      <section className={`${sectionWrapper} bg-white`}>
        <div className={contentContainer}>
          <div className="relative group h-125">
            {/* Using Unsplash for Office/Therapy vibe since Drive links require auth */}
            <Image
              src={i1}
              alt="Santa Monica Office"
              fill
              className="rounded-3xl object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 bg-pink-50 p-8 rounded-2xl border border-pink-100 hidden md:block shadow-lg max-w-xs">
              <p className="font-['Lora'] italic text-pink-800 text-lg">
                &quot;The space itself is designed to help you feel more at ease the
                moment you arrive.&quot;
              </p>
            </div>
          </div>
          <div>
            <h2 className={h2Heading}>
              You look functional on the outside, but feel{" "}
              <span className="text-pink-400">exhausted</span> within.
            </h2>
            <p className={bodyText}>
              Many of my clients are entrepreneurs and creatives who have spent
              years pushing through stress. You might be bracing for something
              to go wrong, struggling with overthinking, or feeling disconnected
              from your own body.
            </p>
            <p className={bodyText}>
              My goal isn&apos;t just symptom relief—it&apos;s helping you develop a
              stronger, more resilient relationship with yourself.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2 font-['Raleway'] font-bold text-pink-900 text-sm tracking-wide">
                <Wind size={16} className="text-pink-400" /> MINDFULNESS
              </div>
              <div className="flex items-center gap-2 font-['Raleway'] font-bold text-pink-900 text-sm tracking-wide">
                <ShieldCheck size={16} className="text-pink-400" /> EMDR TRAINED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIALIZED APPROACH: Evidence-Based Grid --- */}
      <section className={`${sectionWrapper} bg-pink-950 text-white flex-col`}>
        <div className="max-w-4xl text-center mb-16">
          <h2 className="font-['Libre_Baskerville'] text-4xl md:text-5xl font-bold mb-6">
            A Collaborative{" "}
            <span className="text-pink-300 italic font-['Lora'] font-light">
              Approach
            </span>
          </h2>
          <p className="font-['Open_Sans'] text-pink-100/70 text-lg">
            Integrating evidence-based methods to address both the emotional and
            physiological sides of your experience.
          </p>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Trauma Recovery",
              desc: "Paced carefully with an emphasis on safety and regulation, using EMDR and body-oriented techniques.",
              icon: <ShieldCheck />,
            },
            {
              title: "Burnout & Pressure",
              desc: "For high-achievers feeling disconnected after years of pushing through chronic professional stress.",
              icon: <Wind />,
            },
            {
              title: "Anxiety & Panic",
              desc: "Support for constant worry, overthinking, and the physical tension that keeps you on edge.",
              icon: <Heart />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all text-center"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {item.icon}
              </div>
              <h4 className="text-xl font-['Raleway'] font-bold mb-4 uppercase tracking-widest">
                {item.title}
              </h4>
              <p className="text-pink-100/60 font-['Roboto'] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE SPACE: Santa Monica Context --- */}
      <section className={`${sectionWrapper} bg-white`}>
        <div className={contentContainer}>
          <div>
            <h2 className={h2Heading}>
              Located in the heart of{" "}
              <span className="text-pink-500">Santa Monica</span>.
            </h2>
            <p className={bodyText}>
              My office is a private, grounded space filled with natural
              light—designed to be a quiet sanctuary from the fast-paced
              environment of Southern California.
            </p>
            <div className="space-y-4 mb-8 font-['Open_Sans']">
              <div className="flex items-center gap-3 text-pink-900">
                <MapPin className="text-pink-400" size={20} />
                <span>123th Street 45 W, Santa Monica, CA 90401</span>
              </div>
              <div className="flex items-center gap-3 text-pink-900">
                <Clock className="text-pink-400" size={20} />
                <span>In-person & Telehealth (CA Licensed)</span>
              </div>
            </div>
            <button
              onClick={() => router.push("/contacts")}
              className="text-pink-500 hover:cursor-pointer font-['Raleway'] font-bold border-b-2 border-pink-500 pb-1 hover:text-pink-700 hover:border-pink-700 transition-all uppercase tracking-widest text-sm"
            >
              Schedule a Consultation &rarr;
            </button>
          </div>

          <div className="relative h-125">
            {/* Smart extraction: Highlighting natural light and uncluttered environment */}
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

      <FOOTER />
    </div>
  );
}

// Re-importing missing Icon from Lucide
function MapPin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
