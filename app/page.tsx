import {Tangerine} from 'next/font/google';
import Link from 'next/link';

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tangerine',
});

export default function Home() {
  return (
    <main className="mt-1 xl:px-20 mx-2 mb-5 grid xl:grid-cols-2 justify-center items-center">

      <div className="xl:w-1/2 xl:h-auto xl:rounded-lg rounded-full h-50 w-50 mx-auto overflow-hidden xl:flex xl:items-start xl:justify-start">
        <img src="/huaMain.png" alt="Picture of the author"  />
      </div>
      
      <div className=" mx-auto w-full flex flex-col items-center justify-items-start ">
        <p className="text-md lg:text-2xl text-center underline decoration-red-300 ">Communication Arts Student </p>
        <p className="text-md lg:text-2xl text-center">Event, Marketing & PR</p>
        <p className={`${tangerine.className} text-5xl  lg:text-7xl text-center lg:py-7 px-4`}>Aye Thinzar Aung</p>
        <p className="text-sm lg:text-md xl:text-lg ">Turning ideas into real experiences through events and content</p>
        <Link href="#projects" className="block active:bg-red-300 bg-red-400 px-3 py-2 max-w-max rounded-md mt-2 mx-auto text-white">See My Work</Link>  
        </div>
    </main>
  );
}
