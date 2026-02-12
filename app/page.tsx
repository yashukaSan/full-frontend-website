"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { ArrowRight, CheckCircle2, Plus } from 'lucide-react';
// Import Google Fonts in your layout.tsx or globals.css for these classes to work
import i1 from '../public/sk1.webp';
import i2 from '../public/s5.jpg';
import i3 from '../public/s4.jpg';
import i4 from '../public/sk2.jpg';
import i5 from '../public/s8.webp';
import i6 from '../public/sk4.jpg';
import i7 from '../public/DrMaya.png';
import FOOTER from "./Footer";
import HEADER from './Header';

export default function Home() {
  const router = useRouter();

  // Sakura Theme Styles
  const sectionBase = "min-h-[60vh] w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden";
  const container = "max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center";
  
  // Typography Constants
  const headingLg = "font-['Raleway'] md:font-['Libre_Baskerville'] font-bold text-4xl md:text-6xl tracking-tight text-pink-950 leading-tight mb-6";
  const headingMd = "font-['Raleway'] font-bold text-3xl text-pink-900 mb-4 uppercase tracking-widest";
  //const subHeading = "font-['Lora'] italic text-2xl text-pink-700 mb-4";
  const bodyText = "text-pink-900/80 font-['Roboto'] font-['Open_Sans'] text-lg leading-relaxed mb-8 max-w-xl";
  const quoteText = "font-['Lora'] italic text-pink-800";
  
  const btnPrimary = "group flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all shadow-lg shadow-pink-200 hover:shadow-pink-300";

  return (
    <div className="bg-[#fff5f7] font-['Roboto'] selection:bg-pink-200">
      <HEADER />

      {/* --- HERO SECTION --- */}
      <section className={`${sectionBase} bg-[#fdf2f4]`}>
        <div className={container}>
          <div className="order-2 md:order-1">
            <h2 className={headingLg}>
              Live your life in <span className="text-pink-500 italic font-['Lora'] font-light">full bloom</span>
            </h2>
            <p className={bodyText}>
              Compassionate therapy for adults navigating life transitions in Minneapolis, MN.
            </p>
            <button className={btnPrimary} onClick={()=>router.push('/aboutme')} >
              Connect With Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-96 md:w-96 md:h-125 border-8 border-white shadow-2xl rounded-t-full overflow-hidden ring-1 ring-pink-100">
              <Image src={i1} alt="Therapy" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className={container}>
          <div className="flex justify-center">
            <Image src={i2} alt="Fulfilling life" width={450} height={500} className="rounded-2xl shadow-xl border border-pink-50" />
          </div>
          <div>
            <h3 className={headingMd}>live a fulfilling life.</h3>
            <p className={bodyText}>
              Life can be challenging—especially when you&apos;re trying to balance your personal and professional life.
            </p>
            <p className={`${bodyText} ${quoteText}`}>
              &quot;It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I want you to know that I&apos;m here to help.&quot;
            </p>
            <button className="text-pink-600 font-['Raleway'] font-bold tracking-widest border-b-2 border-pink-200 pb-1 hover:text-pink-800 hover:border-pink-600 transition-all">
              GET IN TOUCH &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- SPECIALITIES --- */}
      <section className={`${sectionBase} bg-[#fdf2f4]/50`}>
        <h2 className="font-['Raleway'] font-bold text-4xl text-center mb-16 text-pink-950">My Specialities</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Self-esteem", img: i3, desc: "Building a strong sense of self-worth is key to living a fulfilled life." },
            { title: "Relationships", img: i4, desc: "Navigate complex connections to form healthier, deeper bonds." },
            { title: "Burnout", img: i5, desc: "Identify strategies to manage career stress and reclaim your energy." }
          ].map((spec, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-pink-100 text-center hover:shadow-xl transition-shadow group">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-pink-50 group-hover:border-pink-200 transition-colors">
                <Image src={spec.img} alt={spec.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-['Raleway'] font-bold text-pink-800 mb-3">{spec.title}</h3>
              <p className="text-pink-900/60 font-['Open_Sans'] text-sm leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PERSPECTIVE SECTION --- */}
      <section className={`${sectionBase} bg-pink-950 text-pink-50`}>
        <div className={container}>
          <div className="relative z-1">
            <Image src={i6} alt="Support" width={400} height={500} className="rounded-3xl mix-blend-soft-light opacity-80" />
          </div>
          <div>
            <h2 className="font-['Libre_Baskerville'] text-4xl font-bold mb-6">You don&apos;t have to do this all <i className="text-pink-300 font-['Lora']">alone</i></h2>
            <p className="font-['Lora'] text-pink-200/80 mb-6 text-xl">If you are facing any of these, there&apos;s hope:</p>
            <ul className="space-y-4 mb-8">
              {["Persistent feelings of sadness", "Trouble making decisions", "Difficulty maintaining relationships", "Feeling constantly exhausted"].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-pink-400" size={20} />
                  <span className="font-['Open_Sans'] font-light">{text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-pink-100 text-pink-950 px-8 py-3 rounded-full font-['Raleway'] font-bold hover:bg-white transition-colors">
              WORK WITH ME &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className={container}>
          <div>
            <h2 className={headingLg}>Hi, I&apos;m <span className="text-pink-500">Lilac.</span></h2>
            <p className={bodyText}>
              I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors together.
            </p>
            <button onClick={() => router.push('/contacts')} className={btnPrimary}>
              LET&apos;S CHAT &rarr;
            </button>
          </div>
          <div className="relative h-125">
             <Image src={i7} alt="Lilac" width={300} height={450} className="rounded-t-full absolute top-0 left-0 border-4 border-pink-50 shadow-xl" />
          </div>
        </div>
      </section>

      {/* --- FAQ & BACKGROUND --- */}
      <section className={`${sectionBase} bg-[#fdf2f4]/30`}>
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="font-['Raleway'] text-4xl font-bold text-center text-pink-950 mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do you take insurance?", a: "I am an out-of-network provider but can provide superbills for reimbursement." },
              { q: "What are your rates?", a: "Standard sessions start at $150. Please contact me for sliding scale options." },
              { q: "Do you have any openings?", a: "Currently accepting new clients for Tuesday and Thursday afternoons." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl border border-pink-100 cursor-pointer transition-all hover:border-pink-300">
                <summary className="flex justify-between items-center font-['Raleway'] font-bold text-pink-900">
                  {faq.q} <Plus className="text-pink-400 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="mt-4 font-['Open_Sans'] text-pink-800/70 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FOOTER />
    </div>
  );
}
