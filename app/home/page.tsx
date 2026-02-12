"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Plus } from 'lucide-react';
import i1 from "../../public/i1.webp";
import i2 from "../../public/i2.webp";
import i3 from "../../public/i3.webp";
import i4 from "../../public/i4.webp";
import i5 from "../../public/i5.webp";
import i6 from "../../public/i6.webp";
import i7 from "../../public/i7.webp";
import i8 from "../../public/i8.webp";
import i9 from "../../public/i9.webp";
import FOOTER from "../Footer";
import HEADER from "../Header";

export default function Home() {
  const router = useRouter();

  // Reusable Tailwind Styles based on your criteria
  const sectionWrapper = "min-h-[60vh] w-full flex items-center justify-center py-20 px-6 overflow-hidden";
  const contentContainer = "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left";
  const h2Heading = "font-sans font-bold text-4xl md:text-6xl tracking-tighter text-gray-900 mb-6 leading-tight";
  const h3Heading = "font-sans font-bold text-2xl md:text-3xl text-purple-800 mb-4 uppercase tracking-tight";
  const bodyText = "text-gray-600 font-sans text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0";
  const btnAccent = "group flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-sans font-bold hover:bg-emerald-700 transition-all shadow-lg mx-auto md:mx-0";

  return (
    <div className="bg-white selection:bg-purple-200">
      <HEADER />

      {/* --- HERO SECTION --- */}
      <section className={`${sectionWrapper} bg-purple-50`}>
        <div className={contentContainer}>
          <div className="order-2 md:order-1">
            <h2 className={h2Heading}>
              Live your life in <span className="text-purple-500 italic font-light">full bloom</span>
            </h2>
            <p className={bodyText}>
              Boutique therapy for adults in Minneapolis, MN. We focus on growth, healing, and personal evolution.
            </p>
            <button className={btnAccent}>
              Connect With Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] border-[12px] border-white shadow-2xl rounded-t-full overflow-hidden">
              <Image src={i1} alt="Bloom" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className={`${sectionWrapper} bg-white`}>
        <div className={contentContainer}>
          <div className="flex justify-center">
            <Image src={i2} alt="Life" width={400} height={500} className="rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border border-purple-100" />
          </div>
          <div>
            <h3 className={h3Heading}>live a fulfilling life.</h3>
            <p className={bodyText}>
              Life can be challenging—especially when you&apos;re trying to balance your personal and professional life.
            </p>
            <p className={bodyText}>
              It&apos;s easy to feel like you&apos;re alone, but I want you to know that I&apos;m here to help you find clarity and warmth.
            </p>
            <button className="text-emerald-600 font-bold border-b-2 border-emerald-600 pb-1 hover:text-purple-600 hover:border-purple-600 transition-all uppercase tracking-widest text-sm">
              Get in touch &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- SPECIALITIES SECTION --- */}
      <section className={`${sectionWrapper} bg-purple-50/30 flex-col`}>
        <h2 className="font-sans font-bold text-4xl text-center mb-16 text-gray-900">My Specialities</h2>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Self-esteem", img: i3, desc: "Work together to bolster your self-worth and inner dialogue." },
            { title: "Relationships", img: i4, desc: "Navigate complex connections to form healthier, deeper bonds." },
            { title: "Burnout", img: i5, desc: "Identify strategies to manage career stress and reclaim your energy." }
          ].map((spec, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-purple-100 text-center hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-50">
                <Image src={spec.img} alt={spec.title} fill className="object-cover" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">{spec.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- EMPATHY SECTION --- */}
      <section className={`${sectionWrapper} bg-emerald-900 text-white`}>
        <div className={contentContainer}>
          <div className="relative flex justify-center">
            <Image src={i6} alt="Hope" width={350} height={450} className="rounded-3xl border border-emerald-700/50" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">You don&apos;t have to do this all <i className="text-emerald-300">alone</i></h2>
            <ul className="space-y-4 mb-10">
              {["Persistent feelings of sadness", "Trouble making decisions", "Difficulty maintaining relationships", "Constant exhaustion"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-sans text-emerald-50">
                  <CheckCircle2 className="text-emerald-400" size={20} /> {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors uppercase tracking-widest text-xs">
              Work with me &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT BIO SECTION --- */}
      <section className={`${sectionWrapper} bg-white`}>
        <div className={contentContainer}>
          <div className="text-left">
            <h2 className={h2Heading}>Hi, I&apos;m <span className="text-purple-600">Lilac.</span></h2>
            <p className={bodyText}>
              I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors with clinical expertise and warmth.
            </p>
            <button onClick={() => router.push("/contacts")} className={btnAccent}>
              Let&apos;s Chat &rarr;
            </button>
          </div>
          <div className="relative h-[500px] flex items-center justify-center">
            <Image src={i7} alt="Lilac" width={300} height={400} className="rounded-t-full shadow-2xl z-10 border-8 border-white" />
            <Image src={i8} alt="Lilac Accent" width={180} height={180} className="rounded-full absolute bottom-4 right-10 md:right-0 border-8 border-purple-50 shadow-2xl z-20" />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className={`${sectionWrapper} bg-purple-50/50`}>
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <Image src={i9} alt="FAQ" width={280} height={380} className="rounded-t-full shadow-lg" />
          </div>
          <div className="space-y-6 text-left">
            <h2 className={h3Heading}>FAQs</h2>
            {[
              { q: "Do you take insurance?", a: "I am an out-of-network provider but can provide superbills." },
              { q: "What are your rates?", a: "Please contact me for current rates and sliding scale availability." },
              { q: "Do you have any openings?", a: "Contact me to check current availability for new clients." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-purple-200 pb-4 group cursor-pointer">
                <div className="flex justify-between items-center text-gray-900 font-bold uppercase text-sm tracking-widest group-hover:text-emerald-600 transition-colors">
                  {faq.q} <Plus size={16} />
                </div>
                <p className="mt-2 text-gray-500 text-sm italic font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className={`${sectionWrapper} bg-emerald-600 text-white text-center`}>
        <div className="max-w-3xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Get started today.</h3>
          <p className="text-emerald-50 text-xl mb-10 font-light">Ready to take the first step towards a happier, healthier you? Let&apos;s start this therapeutic journey together.</p>
          <button className="bg-white text-emerald-600 px-12 py-5 rounded-full font-sans font-bold hover:scale-105 transition-transform shadow-2xl">
            GET IN TOUCH &rarr;
          </button>
        </div>
      </section>

      <FOOTER />
    </div>
  );
}
