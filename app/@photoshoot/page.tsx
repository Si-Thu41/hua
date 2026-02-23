import Link from "next/link";
import MemberPhotoshoot from "../components/memberPhotoshoot";
import PageBreak from "../components/pageBreaker";
export default function Photoshoot() {

    return <div className="bg-red-100 py-7">
        <header className=" bg-red-100">
            <h2 className={`md:text-4xl text-3xl font-bold text-gray-800 text-center py-5`}>Member Photoshoot</h2>       
        </header>
            <section className="w-[70%] mx-auto grid md:grid-cols-2 gap-x-10 gap-y-13">
                 <MemberPhotoshoot imageUrl="/photoshootGroup.jpg" caption="Group Photos" instagramUrl="https://www.instagram.com/p/DOVw9w8ki6e/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="/>

                 <MemberPhotoshoot imageUrl="/photoshootSoprano.jpg" caption="Sopranos" instagramUrl="https://www.instagram.com/p/DObGEv-Emoe/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="/>
                
                <MemberPhotoshoot imageUrl="/photoshootEC.jpg" caption="Executive Members" instagramUrl="https://www.instagram.com/p/DOlgt2nEi2e/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="/>

                <div className="max-w-3/4 flex flex-col justify-center items-center mx-auto">
                    <video src="/bts.mp4" controls className="rounded-lg border-2 border-red-300 shadow-lg" ></video>
                    <p className="text-center py-1 text-lg">Behind the Scenes</p>
                    <Link href="https://www.instagram.com/reel/DOVxiuJEVkT" target="_blank" className="block active:bg-red-300 bg-red-400 px-3 py-2 max-w-max rounded-md mt-2 mx-auto text-white">View on Instagram</Link>

                </div>
            </section>
        <footer className="bg-white rounded-xl w-[80%] mx-auto my-5 text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="text-lg font-bold">Key Achievement:</h2>
            <p className="text-md font-bold">Contributed to the successful delivery of multiple RIC Music Club events by coordinating teams and supporting on-site operations, resulting in smooth execution and high student participation.</p>
        </footer>
    </div>
}