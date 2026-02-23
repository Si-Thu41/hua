import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tangerine',
});
export default function Experience() {
    return (
        <div id='experience' className="bg-red-100">
            <div className="w-full h-10 bg-red-200"></div>
            <header className=" pt-6 bg-red-100">
                <h2 className={`text-7xl font-bold text-gray-800 text-center ${tangerine.className}`}>Experience</h2>
            </header>
        <section className="grid lg:grid-cols-2 items-center gap-y-10 lg:gap-y-0 py-10" >
            <div className="mr-0 flex flex-col justify-center items-start lg:pl-20 px-9">
                <p className="text-xl font-bold text-center mb-5 ">RIC Music Club HR Manager </p>

            <ul className="list-disc">
                <li>Managed attendance, performance tracking, and internal communication, helping reduce last-minute rehearsal issues.
                </li>

                <li>Organized team bonding activities and internal meetings to strengthen collaboration and team morale.</li>

                <li>Generated ideas for events and inter-university collaborations with other student clubs.</li>
            </ul>
            </div>
            <div className="w-full mr-0 flex flex-col justify-center items-center">
                <div className="max-w-1/2 rounded-lg border-2 border-red-300 overflow-hidden">
                <img src="/mcCertificate.jpg" alt="Picture of the author" className="w-full rounded-lg" id='mcCertificate'/>
                </div>
                <label htmlFor="mcCertificate" className="text-md font-bold py-2">Certificate of Appreciation (Rangsit University)</label>
            </div>
        </section></div>
    )
}