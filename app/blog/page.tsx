"use client";

import { useRouter } from 'next/navigation'


function blogPage(){
    const router = useRouter();

    return (
        <>
        <header>
            Lilac template
        </header>
        <div>
            <figure className="flex">
                <img
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/03adb210-386b-4cac-93ce-796727896c60/pexels-alp-y%C4%B1ld%C4%B1zlar-15127478.jpg?format=1000w"
                 alt="main pic"
                 className="w-80 rounded-t-full m-3" />
                 <div>
                    <h1>The lilac Blog</h1>
                    <p>
                        My tiny corner of the internet where I talk about all things and headling, heart, and wholeness.
                    </p>
                    <b>Glad you&os;re here.</b>
                 </div>
            </figure>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <figure className="m-3">
                <img
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w" 
                 className="w-170 h-70 object-cover overflow-hidden" />
                 <div>
                    <p>
                        10/02/2026
                    </p>
                    <h3>Blog Post One</h3>
                    <button
                     onClick={()=> router.push('/blog/blogpostone')}
                     className="hover:cursor-pointer underline">
                        Read More
                    </button>
                 </div>

            </figure>
            <figure>
                <img
                 className="w-170 h-70 object-cover overflow-hidden" 
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1500w" 
                />
                <div>
                    <p>
                        10/02/2026
                    </p>
                    <h3>Blog Post Two</h3>
                    <button
                     className="hover:cursor-pointer underline"
                     onClick={()=> router.push('/blog/blogposttwo')} >
                        Read More
                    </button>
                 </div>
            </figure>
            <figure>
                <img 
                className="w-170 h-70 object-cover overflow-hidden"
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=1500w"
                />
                <div>
                    <p>
                        10/02/2026
                    </p>
                    <h3>Blog Post Three</h3>
                    <button
                     className="hover:cursor-pointer underline"
                     onClick={()=> router.push('/blog/blogpostthree')} >
                        Read More
                    </button>
                 </div>
            </figure>
            <figure>
                <img 
                 className="w-170 h-70 object-cover overflow-hidden"
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=1500w" 
                />
                <div>
                    <p>
                        10/02/2026
                    </p>
                    <h3>Blog Post Four</h3>
                    <button 
                    className="hover:cursor-pointer underline"
                    onClick={()=> router.push('/blog/blogpostfour')} >
                        Read More
                    </button>
                 </div>
            </figure>
        </div>

        </>
    )
}

export default blogPage;