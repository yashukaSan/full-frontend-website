"use client";
import { useRouter } from "next/navigation";

function Footer(){
    const footerList = ['Privacy & Cookies Policy', 'Good Faith Estimate', 'Website Terms & Conditions', 'Disclaimer'];

    const router = useRouter();

    return (
        <footer className="">
        <div className="taos:animate-fadeUp taos:!delay-[0ms]">
          <h3>Lilac Template</h3>
          <p>123 Example Road Minneapolis, MN</p>
          <a href="https://www.squarespace.com/" target="_blank">
            <p>email@example.com</p>
          </a>
          <a href="https://www.squarespace.com/" target="_blank">
            <p>(555)555-5555</p>
          </a>
        </div>
        <div className="taos:animate-fadeUp taos:!delay-[100ms]">
          <h2>Hours</h2>
          <p>Monday - Friday</p>
          <p>10am - 6pm</p>
        </div>
        <div className="taos:animate-fadeUp taos:!delay-[200ms]">
          <h2>Find</h2>
          <ul className="border grid justify-center p-1">
            <li
             onClick={()=>router.push('/home')}
             className="hover:cursor-pointer m-auto taos:animate-fadeUp taos:!delay-[250ms]">
              Home
            </li>
            <li
             onClick={()=>router.push('/contact')}
             className="hover:cursor-pointer m-auto taos:animate-fadeUp taos:!delay-[300ms]">
              Contact
            </li>
            <li
             onClick={()=>router.push('/blog')}
             className="hover:cursor-pointer border m-auto flex taos:animate-fadeUp taos:!delay-[350ms]">
              Blog
            </li>
          </ul>
        </div>
        <div>
        <ul className="flex justify-between taos:animate-fadeUp taos:!delay-[400ms]" >
          {footerList.map((item, index)=> (
            <li key={index} className="underline">
              {item}
            </li>
          ))}
        </ul>
        </div>
      </footer>
    );
}

export default Footer;