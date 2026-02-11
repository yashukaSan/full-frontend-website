"use client";
import { useRouter } from 'next/navigation';
import Footer from './Footer';

export default function Home() {
  
  const router = useRouter();
  return (
    <main>
      <header className="">
        <p>
          lilac Template
        </p>
        <div>
          <button>
            Blog
          </button>
          <button>
            Contact
          </button>
        </div>
      </header>
      <div></div>
      <Footer />
      
    </main>
  );
}
