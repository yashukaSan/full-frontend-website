import Image from 'next/image';
import HEADER from '../Header'
import FOOTER from '../Footer'
import i8 from '../../public/i8.webp'
import i7 from '../../public/i7.webp'

function Contacts(){
    return (
      <>
        <HEADER blog={false} contact={true} />

        <div>
          <h1>Let&apos;s Connect</h1>
          <div>
            <div>
              <p>Strating therapy is courageous.</p>
              <p>
                Get in touch for questions, or to book a free 15-minute
                consultation.
              </p>
              <figure>
                <Image
                  alt="flower"
                  height={400}
                  width={400}
                  src={i7}
                  className="rounded-t-full w-50 object-cover z-0"
                />
                <Image
                  height={400}
                  width={400}
                  alt="flower"
                  src={i8}
                  className="rounded-full relative z-1 h-30 w-30 object-cover -top-20 left-30"
                />
              </figure>
            </div>
            <div>
              <p>
                <b>PLEASE NOTE:</b> If you opt to use a &quot;Form Block&quot;
                on your contact page this is not HIPAA-compliant.
                <br />
                Squarespace stores data that is input into forms in the
                Marketing tab under Profiles. Instead, you can embed a
                HIPPA-compliant form, a link to your client portal, or simply
                put your email address.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1>Book an appointment.</h1>
            <p>
              Add some text here if you like, and add your scheduling widget
              below (you can get one by signing up for a scheduling account
              through Squarespace, the top-tier plan is HIPAA compliant OR you
              can use your client portal).
            </p>
          </div>
        </div>
        <section>
          <div>
            <h2>My Office</h2>
            <p>123th Street 45 W, Santa Monica, CA 90401</p>
            <h3>Hours</h3>
            <p>
              Monday - Friday
              <br />
              10am - 6pm
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6614.361388403876!2d-118.498343500487!3d34.01357249268619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sin!4v1770838408453!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section>
          <h2>Find me on social.</h2>
          <figure className="flex justify-around">
            <Image
              alt="flower"
              height={400}
              width={400}
              src={i7}
              className="rounded-t-full w-50 object-cover z-0"
            />
            <Image
              alt="flower"
              height={400}
              width={400}
              src={i7}
              className="rounded-t-full w-50 object-cover z-0"
            />
            <Image
              alt="flower"
              height={400}
              width={400}
              src={i7}
              className="rounded-t-full w-50 object-cover z-0"
            />
            <Image
              alt="flower"
              height={400}
              width={400}
              src={i7}
              className="rounded-t-full w-50 object-cover z-0"
            />
          </figure>
        </section>

        <FOOTER />
      </>
    );
}

export default Contacts