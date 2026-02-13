"use client";

import Image from "next/image";
import HEADER from "../Header";
import FOOTER from "../Footer";
import { MapPin, Clock, Sun, Wind, Coffee, Sparkles } from "lucide-react";
import of1 from '../../public/office1.jpeg';
import of2 from "../../public/office2.jpeg";
import { useRouter } from 'next/navigation'

export default function OfficePage() {
  const sectionBase =
    "min-h-[60vh] w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden";
    const headingMd =
      "font-['Raleway'] font-bold text-3xl text-pink-900 mb-4 uppercase tracking-widest";
    const router = useRouter();
  // Theme & Pattern Constants
  const sectionWrapper =
    "min-h-[60vh] w-full flex items-center justify-center py-24 px-6 overflow-hidden";
  const contentContainer =
    "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center";

  // Typography (Raleway, Libre Baskerville, Lora, Roboto/Open Sans)
  const h1Heading =
    "font-['Raleway'] font-bold text-5xl md:text-7xl tracking-tighter text-pink-950 mb-6";
  const h2Heading =
    "font-['Libre_Baskerville'] font-bold text-3xl md:text-4xl text-pink-900 mb-8";
  const bodyText =
    "text-pink-900/70 font-['Roboto','Open_Sans'] text-lg leading-relaxed mb-6";
  const quoteText =
    "font-['Lora'] italic text-2xl text-pink-600 leading-relaxed";

  return (
    <div className="bg-white selection:bg-pink-200">
      <HEADER blog={false} contact={false} />

      {/* --- HERO SECTION: The Sanctuary --- */}
      <section className={`${sectionWrapper} bg-[#fff5f7]`}>
        <div className={contentContainer}>
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 text-pink-400 font-['Raleway'] font-bold tracking-widest text-xs uppercase mb-4">
              <Sparkles size={14} /> Santa Monica Sanctuary
            </div>
            <h1 className={h1Heading}>
              The{" "}
              <span className="text-pink-500 italic font-['Lora'] font-light">
                Space
              </span>
            </h1>
            <p className={quoteText}>
              &quot;A quiet, private space designed to feel calm and grounding
              from the moment you arrive.&quot;
            </p>
            <p className={bodyText + " mt-6"}>
              Located in the heart of Santa Monica, my office serves as a
              dedicated environment for reflection, safety, and therapeutic
              depth.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {/* Pattern Image 1: Arched & Styled */}
            <div className="relative w-full aspect-4/5 max-w-sm border-12 border-white shadow-2xl rounded-t-full overflow-hidden ring-1 ring-pink-100">
              <Image
                src={of1}
                alt="Therapy Office Interior"
                fill
                className="object-cover"
                priority
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILS SECTION: Light & Environment --- */}
      <section className={`${sectionWrapper} bg-white`}>
        <div className={contentContainer}>
          <div className="relative flex justify-center">
            {/* Pattern Image 2: Large Rounded Rect with Shadow */}
            <Image
              src={of2}
              alt="Natural Light in Office"
              width={450}
              height={600}
              className="rounded-3xl shadow-xl border border-pink-50"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className={h2Heading}>
              Designed for <span className="text-pink-400">Ease</span>.
            </h2>
            <p className={bodyText}>
              The environment is intentionally uncluttered and filled with
              natural light to support emotional regulation. Whether you are
              visiting for in-person sessions or connecting via telehealth, the
              focus remains on your comfort and privacy.
            </p>

            {/* Office Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <Sun className="text-pink-400 mt-1" size={20} />
                <div>
                  <p className="font-['Raleway'] font-bold text-pink-950 text-sm uppercase">
                    Natural Light
                  </p>
                  <p className="font-['Open_Sans'] text-pink-900/60 text-sm">
                    Bright, airy atmosphere for focus.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind className="text-pink-400 mt-1" size={20} />
                <div>
                  <p className="font-['Raleway'] font-bold text-pink-950 text-sm uppercase">
                    Quiet & Private
                  </p>
                  <p className="font-['Open_Sans'] text-pink-900/60 text-sm">
                    A secure space for vulnerable work.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="text-pink-400 mt-1" size={20} />
                <div>
                  <p className="font-['Raleway'] font-bold text-pink-950 text-sm uppercase">
                    Uncluttered
                  </p>
                  <p className="font-['Open_Sans'] text-pink-900/60 text-sm">
                    Minimalist design to reduce stress.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-pink-400 mt-1" size={20} />
                <div>
                  <p className="font-['Raleway'] font-bold text-pink-950 text-sm uppercase">
                    Central Location
                  </p>
                  <p className="font-['Open_Sans'] text-pink-900/60 text-sm">
                    123th Street 45 W, Santa Monica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSITIONAL CTA: Booking --- */}
      <section className="py-24 bg-pink-950 text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-['Libre_Baskerville'] text-4xl mb-6">
            Experience the space for{" "}
            <span className="text-pink-300 italic">yourself</span>.
          </h2>
          <p className="font-['Open_Sans'] text-pink-100/70 mb-10 text-lg leading-relaxed">
            I offer a limited number of in-person slots in my Santa Monica
            office, as well as telehealth across California.
          </p>
          <button
            onClick={() => router.push("/contacts")}
            className="bg-white text-pink-950 px-10 py-4 rounded-full font-['Raleway'] font-bold hover:bg-pink-100 transition-all uppercase tracking-widest text-xs"
          >
            Book a Consultation &rarr;
          </button>
        </div>
      </section>

      {/* --- MAP & OFFICE: Sakura Card --- */}
      <section className={`${sectionBase} bg-[#fdf2f4]/30`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 w-full gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-pink-100">
          <div
            onClick={() => router.push("/office")}
            className="bg-white p-12 md:p-20 flex flex-col justify-center hover:cursor-pointer"
          >
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

      <FOOTER />
    </div>
  );
}
