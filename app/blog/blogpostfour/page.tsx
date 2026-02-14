"use client";
import { useRouter } from 'next/navigation';
import Header from '../../Header';
import Footer from '../../Footer';
import { ArrowLeft, Calendar, Quote, Sparkles, ChevronLeft } from 'lucide-react';

function BlogPostFour() {
    const router = useRouter();

    // Theme Constants
    const sectionBase = "min-h-[60vh] w-full flex flex-col items-center py-20 px-6 bg-white";
    const bodyText = "text-gray-600 font-sans text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-400 first-letter:mr-3 first-letter:float-left";

    return (
        <div className="bg-white selection:bg-purple-100">
            <Header blog={true} contact={false} />

            {/* --- POST HEADER: Airy & Centered --- */}
            <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6 bg-purple-50/30 border-b border-purple-100">
                <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest text-xs uppercase mb-6">
                    <Calendar size={14} /> MARCH 11, 2026
                </div>
                <h1 className="font-sans font-bold text-4xl md:text-6xl tracking-tighter text-gray-900 max-w-4xl leading-tight">
                    Your Story is the <span className="text-purple-500 italic font-light">Difference Maker</span>
                </h1>
                <div className="mt-8 flex items-center gap-3">
                    <div className="h-[1px] w-12 bg-purple-200"></div>
                    <p className="text-purple-400 font-serif italic">By Lilac Studio</p>
                    <div className="h-[1px] w-12 bg-purple-200"></div>
                </div>
            </section>

            {/* --- MAIN CONTENT: 60vh Minimum, Center Aligned --- */}
            <main className={sectionBase}>
                <article className="max-w-3xl w-full">
                    <div className="mb-12">
                        <p className={bodyText}>
                            It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
                        </p>
                        
                        <div className="my-12 p-8 bg-purple-50 rounded-3xl border-l-4 border-emerald-500 relative">
                            <Quote className="absolute -top-4 -left-2 text-emerald-200" size={40} />
                            <p className="text-xl font-sans font-medium text-purple-900 italic leading-relaxed">
                                "If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do."
                            </p>
                        </div>

                        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
                            Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest.
                        </p>

                        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
                            Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.
                        </p>
                    </div>

                    {/* --- NAVIGATION: Updated with Previous Blog Button --- */}
                    <div className="pt-10 border-t border-purple-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col gap-4 w-full sm:w-auto">
                            {/* Browser Back Button */}
                            <button 
                                onClick={() => router.back()}
                                className="group flex items-center gap-2 text-gray-400 font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:text-purple-600"
                            >
                                <ArrowLeft size={14} /> Back
                            </button>

                            {/* Specific Previous Blog Link */}
                            <button 
                                onClick={() => router.push('/blog/blogpostthree')}
                                className="group flex items-center gap-3 text-emerald-600 font-sans font-bold text-sm tracking-widest uppercase transition-all hover:text-emerald-700 bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100"
                            >
                                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                                Previous Blog
                            </button>
                        </div>
                        
                        <div className="hidden sm:flex gap-2">
                             <Sparkles size={18} className="text-purple-200 animate-pulse" />
                        </div>
                    </div>
                </article>
            </main>
            {/* --- MINI CTA --- */}
            <section className="py-20 bg-purple-50 flex flex-col items-center text-center px-6">
                <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">Enjoyed this read?</h3>
                <p className="text-gray-500 mb-8 max-w-md">Join my newsletter for weekly insights on wellness and creativity.</p>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md">
                    Subscribe Now
                </button>
            </section>

            <Footer />
        </div>
    );
}

export default BlogPostFour;
