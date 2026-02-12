"use client";

import Image from 'next/image';
import Header from '../Header';
import Footer from '../Footer';
import { useRouter } from 'next/navigation';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import i1 from "../../public/i1.webp";

function BlogPage() {
  const router = useRouter();

  // Shared Styles
  const sectionBase = "min-h-[60vh] w-full flex flex-col items-center justify-center px-6 py-20";
  const headingLg = "font-sans font-bold text-5xl md:text-7xl tracking-tighter text-gray-900 mb-6";
  const blogCard = "group cursor-pointer bg-white rounded-3xl overflow-hidden border border-purple-100 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500";

  return (
    <div className="bg-white selection:bg-emerald-100">
      <Header blog={true} contact={false} />

      {/* --- HERO SECTION: 60vh --- */}
      <section className={`${sectionBase} bg-purple-50/50`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="relative w-48 h-64 md:w-64 md:h-80 border-[12px] border-white shadow-xl rounded-full overflow-hidden rotate-3">
            <Image fill className="object-cover" src={i1} alt="Lilac Blog" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4">
              <Sparkles size={14} /> The Wellness Journal
            </div>
            <h1 className={headingLg}>The Lilac <span className="text-purple-400 font-light italic">Blog</span></h1>
            <p className="text-gray-500 text-lg md:text-xl font-sans leading-relaxed max-w-lg mb-4">
              My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
            </p>
            <p className="text-purple-600 font-serif italic text-lg italic">Glad you&apos;re here.</p>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID SECTION: 60vh --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((post) => (
              <div 
                key={post} 
                onClick={() => router.push("/blog/blogposttwo")}
                className={blogCard}
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                    <Image 
                      fill 
                      src={i1} 
                      alt="Post Thumbnail" 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-3">
                      <Calendar size={12} /> Feb 12, 2026
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      Blog Post {post === 1 ? "One" : post === 2 ? "Two" : post === 3 ? "Three" : "Four"}
                    </h3>
                    <p className="text-emerald-600 font-semibold flex items-center gap-2 text-sm group-hover:gap-4 transition-all">
                      Read More <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUBSCRIBE SECTION: 60vh --- */}
      <section className={`${sectionBase} bg-emerald-900 text-white`}>
        <div className="max-w-3xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Stay in the <span className="text-emerald-300 italic">Loop</span></h3>
          <p className="text-emerald-50/70 text-lg mb-10 font-sans">
            Sign up with your email address to receive monthly reflections, wellness tips, and studio updates.
          </p>
          
          <div className="relative group max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-6 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/20 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-900 font-bold px-6 rounded-full transition-all text-sm">
              SIGN UP
            </button>
          </div>
          
          <p className="mt-6 text-xs text-emerald-200/50 uppercase tracking-widest font-medium">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
