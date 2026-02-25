import PageBreak from "../components/pageBreaker";
import { Tangerine } from "next/font/google";
import CarouselWithCaptions from "../components/carouselWithCaptions";
import Promotion from "./promotion";
import NewGenCall from "./newgencall";
import ClubIntroduction from "./clubIntroduction";
import ReelsWithCaption from "../components/reelsWithCaption";

const tangerine = Tangerine({
    variable: "--font-tangerine",
    subsets: ["latin"],
    weight: "400"
})
const songbirdImages=['/songbird1.jpg','/songbird2.jpg','/comp/songbird3_comp.jpg','/comp/songbird4_comp.jpg','/comp/songbird5_comp.jpg','/songbird6.jpg']
export default function Concert(){
    return <div className="bg-red-100 pb-4 flex flex-col ">
        <PageBreak/>
        <header className="py-4 bg-red-100">
                <h2 className={`underline decoration-red-400 text-7xl font-bold text-gray-800 text-center py-5 ${tangerine.className}`}>The Songbirds' Paradise</h2>
                 <p className="underline decoration-red-400 text-center text-2xl font-bold">RIC Music Club Concert</p>
        </header>
        <section className="w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 py-5 gap-y-8 lg:gap-y-0">
                <div className="w-full flex flex-col justify-center items-center">
                    <img src='/comp/songbirdPoster_comp.png' alt='concert poster' className="w-2/3 rounded-xl border-3 border-red-300"/>
                </div>
                <div className="md:w-5/7 mx-auto">
                    <div className="py-7">
                        <h2 className="text-3xl  font-bold text-center">Concert Audience Rating:</h2>
                        <h2 className="text-3xl  font-bold text-center">9.11/10 (Based on Feedback Form)</h2>
                    </div>
                    
                    <ul className="list-disc leading-10">
                        <li>Collaborated with the PR team to create promotional content for a concert with 400+ attendees.</li>
                        <li>Led HR operations by preparing 70+ members for rehearsals and coordinating volunteers.</li>
                        <li>Supported stage management, lighting cues, and backstage logistics </li>
                    </ul>
                </div>
        </section>
        <div className="lg:w-1/2 w-full mx-auto mt-10">
        <h2 className="text-center font-bold text-2xl underline decoration-red-400">Event Highlights</h2>
            <CarouselWithCaptions images={songbirdImages} captions=""/>
        </div>

        <div className="lg:w-[80%] py-4 max-h-fit mx-auto border-b-2 border-red-400">
        <h2 className="w-full text-center lg:text-3xl text-2xl pt-7 font-bold">Featured Performance Videos (YouTube)</h2>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-1 ">
            
            <ReelsWithCaption url="/enchanted.mp4" views="Enchanted - Taylor Swift" link="https://youtu.be/-Pk0vXlUxxE?si=fQXmFltameFOcovk" youTube={true} width="w-full" height="h-full"/>
            
            <ReelsWithCaption url="/21Guns.mp4" views="21 Guns - Green Day" link="https://youtu.be/MWrwUebeohQ?si=E0NAE2n2T1e7-rnu" youTube={true} width="w-full" height="h-full"/>
            
            <ReelsWithCaption url="/Ta_Gar.mp4" views="Ta Gar - Dira More" link="https://youtu.be/dfKx01E_RvI?si=IPc7Cihc8RORSEQh" youTube={true} width="w-full" height="h-full" />

            <ReelsWithCaption url="/makingLove.mp4" views="Making Love Out Of Nothing At All - Air Supply" link="https://youtu.be/SaC816D4RW8?si=OTwzaJ8vbw9Xhx36" youTube={true} width="w-full" height="h-full"/> 
  
        </div>
        <footer className="bg-white rounded-xl w-[95%] mx-auto text-center md:px-10 px-5 mt-4 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Supported the planning and execution of a large-scale student concert through promotion, member coordination, and on-site operations, leading to a 9.11/10 audience satisfaction rating.</p>
        </footer>
        </div>

        <Promotion/>
        <NewGenCall/>
        <ClubIntroduction/>
        <footer className="bg-white rounded-xl w-[80%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Created and published promotional content that reached thousands of viewers across social media platforms, supporting event promotion and student engagement.</p>
        </footer>
    </div>
}