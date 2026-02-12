"use client";
import { useRouter } from "next/navigation";
import Header from "../../Header";
import Footer from "../../Footer";
import { ArrowLeft, Calendar, Quote, Sparkles } from "lucide-react";

function BlogPostFour() {
  const router = useRouter();

  // Sakura Theme Constants
  const sectionBase =
    "min-h-[60vh] w-full flex flex-col items-center py-20 px-6 bg-white";
  // Body: Roboto/Open Sans | Dropcap: Sakura Pink
  const bodyText =
    "text-pink-900/80 font-['Roboto'] text-lg leading-relaxed mb-6 first-letter:text-6xl first-letter:font-bold first-letter:text-pink-400 first-letter:mr-3 first-letter:float-left first-letter:font-['Libre_Baskerville']";

  return (
    <div className="bg-white selection:bg-pink-100">
      <Header blog={true} contact={false} />

      {/* --- POST HEADER: Sakura Petal Background --- */}
      <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6 bg-[#fff5f7] border-b border-pink-100">
        <div className="flex items-center gap-2 text-pink-500 font-['Raleway'] font-bold tracking-widest text-xs uppercase mb-6">
          <Calendar size={14} /> MARCH 11, 2026
        </div>
        <h1 className="font-['Libre_Baskerville'] font-bold text-4xl md:text-6xl tracking-tight text-pink-950 max-w-4xl leading-tight">
          Your Story is the{" "}
          <span className="text-pink-400 italic font-['Lora'] font-light">
            Difference Maker
          </span>
        </h1>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px w-12 bg-pink-200"></div>
          <p className="text-pink-400 font-['Lora'] italic">By Lilac Studio</p>
          <div className="h-px w-12 bg-pink-200"></div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className={sectionBase}>
        <article className="max-w-3xl w-full">
          <div className="mb-12">
            <p className={bodyText}>
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>

            {/* Pull Quote: Lora Font + Pink Blossom Accent */}
            <div className="my-12 p-10 bg-[#fff5f7] rounded-3xl border-l-4 border-pink-400 relative">
              <Quote
                className="absolute -top-4 -left-2 text-pink-200"
                size={40}
              />
              <p className="text-2xl font-['Lora'] font-medium text-pink-900 italic leading-relaxed">
                &ldquo;If you read the words back and don&apos;t hear your own
                voice in your head, that&apos;s a good sign you still have more
                work to do.&rdquo;
              </p>
            </div>

            <p className="text-pink-900/80 font-['Open_Sans'] text-lg leading-relaxed mb-6">
              Don&apos;t worry about sounding professional. Sound like you.
              There are over 1.5 billion websites out there, but your story is
              what&apos;s going to separate this one from the rest.
            </p>

            <p className="text-pink-900/80 font-['Open_Sans'] text-lg leading-relaxed mb-6">
              Be clear, be confident and don&apos;t overthink it. The beauty of
              your story is that it&apos;s going to continue to evolve and your
              site can evolve with it. Your goal should be to make it feel right
              for right now. Later will take care of itself. It always does.
            </p>
          </div>

          {/* --- NAVIGATION: Raleway Bold --- */}
          <div className="pt-10 border-t border-pink-100 flex justify-between items-center">
            <button
              onClick={() => router.push('/blog/blogpostthree')}
              className="group flex items-center gap-2 text-pink-500 font-['Raleway'] font-bold text-sm tracking-widest uppercase transition-all hover:gap-4 hover:text-pink-700"
            >
              <ArrowLeft size={18} /> Previos Blog
            </button>

            <div className="flex gap-2">
              <Sparkles size={18} className="text-pink-200" />
            </div>
          </div>
        </article>
      </main>

      {/* --- MINI CTA: Footer Transition --- */}
      <section className="py-20 bg-[#fdf2f4] flex flex-col items-center text-center px-6">
        <h3 className="font-['Raleway'] font-bold text-2xl text-pink-950 mb-4">
          Enjoyed this read?
        </h3>
        <p className="text-pink-900/60 font-['Open_Sans'] mb-8 max-w-md">
          Join my newsletter for weekly insights on wellness and creativity.
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-['Raleway'] font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-200">
          Subscribe Now
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPostFour;
