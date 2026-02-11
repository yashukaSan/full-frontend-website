"use client";
import { useRouter } from 'next/navigation';

interface HeaderProps{
  blog?: boolean;
  contact?: boolean
}

function HEADER({ blog, contact }: HeaderProps){
  const router = useRouter();
    return (
        <header className="flex justify-between p-4 border">
        Lilac Template
        <div className="flex justify-around border w-40">
            <p 
             onClick={()=>router.push('/blog')}
             className={blog? 'underline': 'hover:cursor-pointer'}>
              Blog
            </p>
            <p
             className={contact? 'underline': 'hover:cursor-pointer'}
             onClick={()=>router.push('/contacts')}>
              Contact
            </p>
          
        </div>
      </header>
    );
}

export default HEADER;