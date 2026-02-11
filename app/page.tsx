import Image from "next/image";
import i1 from '../public/i1.webp';
import i2 from '../public/i2.webp';
import i3 from '../public/i3.webp';
import i4 from '../public/i4.webp';
import i5 from '../public/i5.webp';
import i6 from '../public/i6.webp';
import i7 from '../public/i7.webp';
import i8 from '../public/i8.webp';
import i9 from '../public/i9.webp';
import FOOTER from "./Footer"
import HEADER from './Header'

export default function Home() {
  return (
    <>
    <HEADER />      

      <div className="flex justify-between" >
        <figure>
          <Image
           width={200}
           height={300}
           className="object-cover"
           src={i1} 
           alt="flower Pic" />
        </figure>
        <div className="grid">
          <h2>
            Live your life in full bloom
          </h2>
          <p>
            therapy for Adults in Minneapollis, MN.
          </p>
          <button className="border p-3">
            Connect With Me &rarr;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <div>
          <h3>
            live a fulfilling life.
          </h3>
          <p>
            Life can be challenging&mdash;especially when you&apos;re trying to balance your personal and professional life.
          </p>
          <p>
            It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I want you to know that I&apos;m here to help
          </p>
          </div>
          <button>
            GET IN TOUCH&rarr;
          </button>
        </div>
        <figure>
          <Image alt="flower"
          height={400} width={400}
           className="object-cover"
           src={i2} />
        </figure>
      </div>

{/* Specialirities */}
      <div className="my-4">
        <h2 className="text-center my-3">
          My Specialities
        </h2>
        {/* Speciliarity Section */}
        <div className="flex">
          <div>
            <h3>
              Self-esteem
            </h3>
            <p>
              Building a strong sense of self-worth is key to living a fulfilled life. Let&apos;s work together to boister your self-esteem
            </p>
            <Image alt="flower"
          height={400} width={400}
             className="rounded-full object-cover" 
             src={i3} />
          </div>

          <div>
            <h3>
              relationships
            </h3>
            <p>
              Navigate relationships can be complex. I&apos;m here to guide you through these complexities to help you from healthier connections.
            </p>
            <Image alt="flower"
          height={400} width={110}
             className="rounded-full object-cover"
             src={i4} />
          </div>

          <div>
            <h3>
              burnout
            </h3>
            <p>
              Feeling overwhelmed by your career is more common than you think. Together, we&apos;ll identify strategies to manage and prevent burnout.
            </p>
            <Image alt="flower"
          height={400} width={400}
             className="rounded-full object-cover h-40 w-40"
             src={i5} />
          </div>
        </div>
      </div>

      <div className="flex">
        <figure>
          <Image alt="flower"
          height={400} width={400}
           src={i6}
           className="w-50"
           />
        </figure>
        <div>
          <h2>
            You don&apos;t have to do this all <i>alone</i>
          </h2>
          <p>
            If you are facing any of these, there&apos;s hope:
          </p>
          <ul>
            <li>
              Persistent feelings of sadness or hopelessness
            </li>
            <li>
              Trouble focusing or making decisions
            </li>
            <li>
              Difficulty maintaining relationships
            </li>
            <li>
              Feeling constantly exhausted or unmotivated
            </li>
            <li>
              A pervasive sense of being overwhelmed
            </li>
          </ul>
          <p>
            With empathy and guidance. we&apos;ll work together to navigate the challenges life throws your way.
          </p>
          <button>
            WORK WITH ME &rarr;

          </button>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <h2>
            Hi, I&apos;m Lilac.
          </h2>
          <p>
            I&apos;m commited to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws you way.
          </p>
          <button>
            LET&apos;S CHAT &rarr;
          </button>
        </div>
        <figure>
          <Image alt="flower"
          height={400} width={400}
           src={i7}
           className="rounded-t-full w-50 object-cover z-0" />
          <Image
          height={400} width={400}
           alt="flower"
           src={i8}
           className="rounded-full relative z-1 h-30 w-30 object-cover -top-20 left-30" />
        </figure>
      </div>

      {/* FAQ Section */}
      <div className="flex justify-around">
        <figure>
          <Image
           alt="flower"
           height={400} width={400}
           src={i9}
           className="rounded-t-full w-40" />
        </figure>
        <div>
          <h2>
            FAQs
          </h2>
          <hr />
          <div>
            <h3>Do you take insurance?</h3>
            <p>Answer goes here.</p>
          </div>
          <hr />
          <div>
            <h3>What are your rates?</h3>
            <p>Answer goes here.</p>
          </div>
          <hr />
          <div>
            <h3>do you have any openings?</h3>
            <p>Answer goes here.</p>
          </div>
        </div>
      </div>
      {/* About My Bsckground */}
      <div>
        <h2>
          My Professional Background
        </h2>
        <hr />
        <div>
          <h3>Education</h3>
          <p>
          Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.
          </p>
        </div>
        <hr />
        <div>
          <h3>Licensure</h3>
          <p>Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.</p>
        </div>
        <hr />
        <div>
          <h3>Certifications</h3>
          <p>Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.</p>
        </div>
        <hr />
      </div>

      <div>
        <h3>Get started today.</h3>
        <p>Ready to take the first step towards a happier, healthier you? </p>
        <p>Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p>
        <button>
          GET IN TOUCH &rarr;
        </button>
      </div>

      <FOOTER />
    </>
  );
}
