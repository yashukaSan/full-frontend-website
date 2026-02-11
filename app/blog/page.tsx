"use client";

import Image from 'next/image';
import Header from '../Header';
import Footer from '../Footer';
import { useRouter } from 'next/navigation';
import i1 from "../../public/i1.webp";

function BlogPage(){
    const router = useRouter();

    return (
      <>
        <Header blog={true} contact={false} />
        <div>
          <figure className="flex">
            <Image
              width={200}
              height={300}
              className="object-cover"
              src={i1}
              alt="flower Pic"
            />
            <div>
              <h1>The lilac Blog</h1>
              <p>
                My tiny corner of the internet where I talk about all things and
                headling, heart, and wholeness.
              </p>
              <b>Glad you&apos;re here.</b>
            </div>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <figure
            onClick={() => router.push("/blog/blogposttwo")}
            className="hover:cursor-pointer"
          >
            <Image
              width={200}
              height={300}
              className="object-cover"
              src={i1}
              alt="flower Pic"
            />
            <div>
              <p>10/02/2026</p>
              <h3>Blog Post One</h3>
              <p className="underline">Read More</p>
            </div>
          </figure>
          <figure
            onClick={() => router.push("/blog/blogposttwo")}
            className="hover:cursor-pointer"
          >
            <Image
              width={200}
              height={300}
              className="object-cover"
              src={i1}
              alt="flower Pic"
            />
            <div>
              <p>10/02/2026</p>
              <h3>Blog Post Two</h3>
              <p className="underline">Read More</p>
            </div>
          </figure>
          <figure
            onClick={() => router.push("/blog/blogposttwo")}
            className="hover:cursor-pointer"
          >
            <Image
              width={200}
              height={300}
              className="object-cover"
              src={i1}
              alt="flower Pic"
            />
            <div>
              <p>10/02/2026</p>
              <h3>Blog Post Three</h3>
              <p className="underline">Read More</p>
            </div>
          </figure>
          <figure
            onClick={() => router.push("/blog/blogposttwo")}
            className="hover:cursor-pointer"
          >
            <Image
              width={200}
              height={300}
              className="object-cover"
              src={i1}
              alt="flower Pic"
            />
            <div>
              <p>10/02/2026</p>
              <h3>Blog Post Four</h3>
              <p className="underline">Read More</p>
            </div>
          </figure>
        </div>
        {/* Subscribe Section */}
        <div>
          <div>
            <h3>Subscribe</h3>
            <p>Sign up with your email address to receive news and updates.</p>
            <label>
              <input type="text" placeholder="Email Address" />
              <button>SIGN UP</button>
            </label>
            <p>We respect your privacy</p>
          </div>
        </div>

        <Footer />
        
      </>
    );
}

export default BlogPage;