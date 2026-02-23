import PageBreak from "../components/pageBreaker";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-tangerine',
  })
export default function AnotherHome(){

    return <div className="bg-red-100 flex flex-col gap-y-5 items-center justify-center ">
        <PageBreak />
        <h1 className={`underline decoration-red-400 text-7xl font-bold text-gray-800 ${tangerine.className}`}>Another Home</h1>
        <h2 className="text-2xl font-semibold text-gray-700 ">Public Relation Team Leader</h2>
        <ul className="list-disc lg:w-2/5 leading-8 w-[85%] mx-auto">
            <li>Led a 40-member PR team across three speaking clubs, managing tasks and meetings to ensure smooth operations.</li>
            <li>Organized and hosted online webinars with guest speakers, engaging over 200 participants.</li>
            <li>Coordinated with partner organizations to invite speakers and strengthen community networking.</li>
        </ul>
        
    </div>
}