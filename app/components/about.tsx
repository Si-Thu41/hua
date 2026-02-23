import Link from "next/link";
import { Tangerine } from "next/font/google";
const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tangerine',
});
export default function About() {
  return (
    <section className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 justify-center items-center bg-gray-100 pt-18 py-3" id='about'>
        <div className="md:pl-20 px-10">
            <h2 className={`text-6xl font-bold ${tangerine.className} underline decoration-red-300`} >About Me</h2><br></br>
            <p className="text-md md:text-lg  ">A Communication Arts student specializing in event management, marketing, and public relations, with experience in university events, student clubs, and brand campaigns.</p> <br></br>
            <p className="text-xl font-bold ">Education</p>
            <p className="text-md md:text-lg ">Rangsit University - B.A. in Communication Arts (2024–Present)</p>
            <p className="text-md md:text-lg "> GPA: 3.96 / 4.0</p><br></br>
            <p className="text-xl font-bold ">Skills</p>
            <p className="text-md md:text-lg ">• Event Coordination • Public Relations • Team Leadership • Content Ideation  • Communication • Social Media • Basic Video Shooting • Presentation</p>
            <Link href="" className="block active:bg-red-300 bg-red-400 px-3 py-2 max-w-max rounded-md mt-2 mx-auto text-white">My Resume</Link>
        </div>
      <div className="w-full mr-0 flex justify-center items-start" >
        <img src="/huaAbout.png" alt="Picture of the author" className="max-w-1/2 rounded-lg" />
      </div>
    </section>);
}