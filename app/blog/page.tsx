"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import i1 from "../../public/s1.webp";
import i2 from "../../public/s2.jpg";
import i3 from "../../public/s3.webp";
import i4 from "../../public/s9.webp";
import i5 from "../../public/s10.webp";

function BlogPage() {
  const router = useRouter();

  // Sakura Theme Shared Styles
  const sectionBase =
    "min-h-[60vh] w-full flex flex-col items-center justify-center px-6 py-20";
  const headingLg =
    "font-['Raleway'] font-bold text-5xl md:text-7xl tracking-tighter text-pink-950 mb-6";
  const blogCard =
    "group cursor-pointer bg-white rounded-3xl overflow-hidden border border-pink-100 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-500";

  return (
    <div className="bg-white selection:bg-pink-100">
      <Header blog={true} contact={false} />

      {/* --- HERO SECTION: Sakura Soft Pink --- */}
      <section className={`${sectionBase} bg-[#fff5f7]`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="relative w-48 h-64 md:w-64 md:h-80 border-12 border-white shadow-xl rounded-full overflow-hidden rotate-3 ring-1 ring-pink-50">
            <Image
              fill
              placeholder="blur"
              className="object-cover"
              src={i1}
              alt="Lilac Blog"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-pink-500 font-['Raleway'] font-bold tracking-widest text-xs uppercase mb-4">
              <Sparkles size={14} /> The Wellness Journal
            </div>
            <h1 className={headingLg}>
              The Lilac{" "}
              <span className="text-pink-400 font-['Lora'] font-light italic">
                Blog
              </span>
            </h1>
            <p className="text-pink-900/60 text-lg md:text-xl font-['Roboto'] leading-relaxed max-w-lg mb-4">
              My tiny corner of the internet where I talk about all things
              healing, heart, and wholeness.
            </p>
            <p className="text-pink-600 font-['Lora'] italic text-2xl">
              Glad you&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className={`${sectionBase} bg-white`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-10">
            {[
              { path: "/blog/blogpostone", loc: i2 },
              { path: "/blog/blogposttwo", loc: i3 },
              { path: "/blog/blogpostthree", loc: i4 },
              { path: "/blog/blogpostfour", loc: i5 },
            ].map(
              (
                post,
                index, // Using ( ) instead of { } removes the need for 'return'
              ) => (
                <div
                  key={index}
                  onClick={() => router.push(post.path)}
                  className={blogCard}
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                      <Image
                        fill
                        src={post.loc}
                        alt="Post Thumbnail"
                        placeholder="blur"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-2 text-pink-400 text-xs font-['Open_Sans'] font-bold uppercase tracking-widest mb-3">
                        <Calendar size={12} /> Feb 12, 2026
                      </div>
                      <h3 className="text-2xl font-['Libre_Baskerville'] font-bold text-pink-950 mb-4 group-hover:text-pink-600 transition-colors">
                        Blog Post{" "}
                        {index === 0
                          ? "One"
                          : index === 1
                            ? "Two"
                            : index === 2
                              ? "Three"
                              : "Four"}
                      </h3>
                      <p className="text-pink-500 font-['Raleway'] font-bold flex items-center gap-2 text-sm group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={16} />
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* --- SUBSCRIBE SECTION: Deep Cherry --- */}
      <section className={`${sectionBase} bg-pink-950 text-white`}>
        <div className="max-w-3xl text-center">
          <h3 className="font-['Libre_Baskerville'] text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Stay in the{" "}
            <span className="text-pink-300 font-['Lora'] italic">Loop</span>
          </h3>
          <p className="text-pink-100/70 text-lg mb-10 font-['Open_Sans']">
            Sign up with your email address to receive monthly reflections,
            wellness tips, and studio updates.
          </p>

          <div className="relative group max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-pink-200/50 font-['Roboto'] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-pink-500 hover:bg-pink-400 text-white font-['Raleway'] font-bold px-6 rounded-full transition-all text-sm">
              SIGN UP
            </button>
          </div>

          <p className="mt-6 text-xs text-pink-200/50 uppercase tracking-widest font-['Raleway'] font-medium">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
