"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { ArrowRight, CheckCircle2, Plus } from 'lucide-react';
// Assuming these are your paths
import i1 from '../public/i1.webp';
import i2 from '../public/i2.webp';
import i3 from '../public/i3.webp';
import i4 from '../public/i4.webp';
import i5 from '../public/i5.webp';
import i6 from '../public/i6.webp';
import i7 from '../public/i7.webp';
import i8 from '../public/i8.webp';
import i9 from '../public/i9.webp';
import FOOTER from "./Footer";
import HEADER from './Header';

export default function Home() {
  const router = useRouter();

  // Reusable Component Styles
  const sectionBase = "min-h-[60vh] w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden";
  const container = "max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center";
  const headingLg = "font-sans font-bold text-4xl md:text-6xl tracking-tighter text-gray-900 leading-tight mb-6";
  const headingMd = "font-sans font-bold text-3xl text-gray-900 mb-4 uppercase tracking-tight";
  const bodyText = "text-gray-600 font-sans text-lg leading-relaxed mb-8 max-w-xl";
  const btnPrimary = "group flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200";

  return (
    <div className="bg-white font-sans selection:bg-purple-200">
      <HEADER />

      {/* --- HERO SECTION --- */}
      <section className={`${sectionBase} bg-purple-50`}>
        <div className={container}>
          <div className="order-2 md:order-1">
            <h2 className={headingLg}>
              Live your life in <span className="text-purple-500 italic font-light">full bloom</span>
            </h2>
            <p className={bodyText}>
              Compassionate therapy for adults navigating life transitions in Minneapolis, MN.
            </p>
            <button className={btnPrimary}>
              Connect With Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] border-8 border-white shadow-2xl rounded-t-full overflow-hidden">
              <Image src={i1} alt="Therapy" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className={container}>
          <div className="flex justify-center">
            <Image src={i2} alt="Fulfilling life" width={450} height={500} className="rounded-2xl shadow-xl border border-purple-100" />
          </div>
          <div>
            <h3 className={headingMd}>live a fulfilling life.</h3>
            <p className={bodyText}>
              Life can be challenging—especially when you&apos;re trying to balance your personal and professional life.
            </p>
            <p className={bodyText}>
              It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I want you to know that I&apos;m here to help.
            </p>
            <button className="text-emerald-600 font-bold tracking-widest border-b-2 border-emerald-600 pb-1 hover:text-purple-600 hover:border-purple-600 transition-all">
              GET IN TOUCH &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- SPECIALITIES --- */}
      <section className={`${sectionBase} bg-purple-50/30`}>
        <h2 className="font-sans font-bold text-4xl text-center mb-16 text-gray-900">My Specialities</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Self-esteem", img: i3, desc: "Building a strong sense of self-worth is key to living a fulfilled life." },
            { title: "Relationships", img: i4, desc: "Navigate complex connections to form healthier, deeper bonds." },
            { title: "Burnout", img: i5, desc: "Identify strategies to manage career stress and reclaim your energy." }
          ].map((spec, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-purple-100 text-center hover:shadow-xl transition-shadow">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-50">
                <Image src={spec.img} alt={spec.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">{spec.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PERSPECTIVE SECTION --- */}
      <section className={`${sectionBase} bg-emerald-900 text-white`}>
        <div className={container}>
          <div className="relative">
            <Image src={i6} alt="Support" width={400} height={500} className="rounded-3xl mix-blend-lighten" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">You don&apos;t have to do this all <i className="text-emerald-300">alone</i></h2>
            <p className="text-emerald-50/80 mb-6">If you are facing any of these, there&apos;s hope:</p>
            <ul className="space-y-4 mb-8">
              {["Persistent feelings of sadness", "Trouble making decisions", "Difficulty maintaining relationships", "Feeling constantly exhausted"].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span className="text-emerald-50 font-light">{text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors">
              WORK WITH ME &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className={container}>
          <div>
            <h2 className={headingLg}>Hi, I&apos;m <span className="text-purple-600">Lilac.</span></h2>
            <p className={bodyText}>
              I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors together.
            </p>
            <button onClick={() => router.push('/contacts')} className={btnPrimary}>
              LET&apos;S CHAT &rarr;
            </button>
          </div>
          <div className="relative h-[500px]">
             <Image src={i7} alt="Lilac" width={300} height={450} className="rounded-t-full absolute top-0 left-0 border-4 border-purple-50 shadow-xl" />
             <Image src={i8} alt="Lilac Accent" width={200} height={200} className="rounded-full absolute bottom-10 right-10 border-8 border-white shadow-2xl" />
          </div>
        </div>
      </section>

      {/* --- FAQ & BACKGROUND --- */}
      <section className={`${sectionBase} bg-purple-50/50`}>
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do you take insurance?", a: "I am an out-of-network provider but can provide superbills for reimbursement." },
              { q: "What are your rates?", a: "Standard sessions start at $150. Please contact me for sliding scale options." },
              { q: "Do you have any openings?", a: "Currently accepting new clients for Tuesday and Thursday afternoons." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl border border-purple-100 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-gray-800">
                  {faq.q} <Plus className="text-purple-400 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className={`${sectionBase} bg-emerald-600 text-white text-center`}>
        <div className="max-w-2xl">
          <h3 className="text-5xl font-bold mb-6 tracking-tight">Get started today.</h3>
          <p className="text-emerald-50 text-xl mb-10 font-light">
            Ready to take the first step towards a happier, healthier you? Let&apos;s start this therapeutic journey together.
          </p>
          <button className="bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            BOOK YOUR SESSION &rarr;
          </button>
        </div>
      </section>

      <FOOTER />
    </div>
  );
}
