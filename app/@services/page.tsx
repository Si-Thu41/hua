import PageBreak from "../components/pageBreaker"
import { Tangerine } from "next/font/google";
import Image from "next/image";
import OnlineCampaignPage from "./onlineCampaign";
import AnotherHome from "./anotherHome";
import WebinarPage from "./webinar";
import SpeakingClassPage from "./speakingClass";
import CollaborationPage from "./collaboration";
import Carousel from "../components/carousel";
const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-tangerine',
  })
export default function ServicesPage(){

    return <div className="bg-red-100 py-10">
        <PageBreak />
         <header className="pt-4 bg-red-100">
                <h2 className={`text-7xl font-bold text-gray-800 text-center underline decoration-red-400 ${tangerine.className}`}>Twenty BBQ</h2>
            </header>
            <section className="lg:w-[90%] pb-4 mx-auto grid grid-cols-1 lg:grid-cols-4 grid-rows-2 justify-center items-center bg-red-100 px-10 lg:gap-x-4 border-b-2 border-red-400" >
                <div className="row-span-2 lg:flex flex-col items-center justify-center hidden">
                    <Image src={'/twenty1.jpg'} alt="Twenty BBQ" width={800} height={600} className="rounded-lg"/>
                </div>

                <div className="col-span-2 flex flex-col items-start justify-center px-8">
                    <h2 className="text-4xl font-bold text-gray-800">Digital Marketing</h2>
                    <ul className="list-disc leading-8">
                        <li>Developed, filmed, and edited short-form promotional videos, achieving an 8.3% engagement rate within 30 days.</li>
                        <li>Supported TikTok boosting campaigns, driving 85–99% of views from non-followers.</li>
                        <li>Contributed to Facebook content strategy and performance tracking, increasing interactions by 141% and reaching 21.2K views.</li>
                    </ul>
                </div>
                <div className="row-span-2 lg:flex flex-col items-center justify-center hidden">
                    <Image src={'/twenty2.jpg'} alt="Twenty BBQ" width={800} height={600} className="rounded-lg"/>
                </div>
                <div className="lg:flex flex-col items-center justify-center hidden ">
                    <Image src={'/twenty3.jpg'} alt="Twenty BBQ" width={225} height={150} className="rounded-lg"/>
                </div>
                <div className=" lg:flex flex-col items-center justify-center hidden">
                    <Image src={'/twenty4.jpg'} alt="Twenty BBQ" width={250} height={150} className="rounded-lg"/>
                </div>
                <div className="lg:hidden w-2/3 mx-auto">
                <Carousel images={['/twenty1.jpg', '/twenty2.jpg','/twenty3.jpg', '/twenty4.jpg']} />
                </div>
            </section>
            <OnlineCampaignPage />
            <AnotherHome />
            <WebinarPage />
            <SpeakingClassPage />
            <CollaborationPage />
            <footer className="bg-white rounded-xl w-[80%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Delivered multiple successful webinars with high participant engagement while strengthening collaboration with partner organizations through PR coordination.</p>
        </footer>
    </div>
}