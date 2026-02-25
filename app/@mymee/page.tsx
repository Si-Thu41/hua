import PageBreak from "../components/pageBreaker";
import { Tangerine } from "next/font/google";
import Image from "next/image";
import OfflineCampaign from "./offlineCampaign";
import OnlineCampaign from "./onlineCampaign";

const tangerine = Tangerine({
    variable: "--font-tangerine",
    subsets: ["latin"],
    weight: "400"
})

export default function Default() {

    return <div className="bg-red-100 pb-4">
        <PageBreak />
        <h2 className={`underline decoration-red-400 lg:text-7xl text-6xl text-gray-800 font-bold text-center py-3 ${tangerine.className}`}>Mymee</h2>
        <p className="lg:text-3xl text-2xl text-gray-700 font-bold text-center py-2">PR Campaign</p>
        <section className="w-2/3 grid md:grid-cols-2 mx-auto gap-3 py-4">
        <ul className="list-disc leading-8 flex flex-col justify-center items-center">
            <li>Executed a 2-hour on-site PR campaign, attracting 42 participants and exceeding the target by 40%.</li>
            <li>Converted offline participants into online followers through QR engagement, growing TikTok to 80 followers within 9 days.</li>
            <li>Produced six short-form videos for a new account, generating 4,864 views and a 5.7% engagement rate.</li>
        </ul>
        <div className="flex justify-center items-center">
            <Image src="/comp/marketingTeamSupervisor2_comp.jpg" alt="mymee1" width={300} height={100} className="rounded-lg" />
        </div>
        </section>
        <OfflineCampaign />
        <OnlineCampaign />
        <footer className="bg-white rounded-xl w-[80%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Successfully boosted offline participation and established early online engagement through strategic short-form video content.</p>
        </footer>
    </div>
    }