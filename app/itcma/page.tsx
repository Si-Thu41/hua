import PageBreak from "../components/pageBreaker";
import CarouselWithCaptions from "../components/carouselWithCaptions";
export default function ITCMA(){
    return <div className="bg-red-100">
        <PageBreak/>
        <div>
            <header className="text-4xl font-bold text-center py-5 underline decoration-red-400">IT&CMA</header>
        </div>
        <section className="grid lg:grid-cols-2 gap-7 w-[80%] lg:w-[70%] mx-auto pb-10">
            <div className="row-span-2 w-[95%] flex justify-center items-center mx-auto ">
                <img src="/itcma1.jpg" alt="ITCMA" className="w-full h-auto object-cover rounded-xl"/>
            </div>
            <div>
                <h2 className="text-2xl font-bold py-5 ">Marketing Team Member</h2>
                <ul className="list-disc leading-7">
                    <li>Supported daily event briefings to ensure smooth cross-team communication.</li>
                    <li>Assisted 300+ international exhibitors with on-site coordination and inquiries.</li>
                    <li>Acted as a bridge between exhibitors and organizers for smooth event operations.</li>
                </ul>
            </div>
            <div className="w-2/3 mx-auto rounded-xl overflow-hidden">
                <img src="/itcma2.jpg" alt="ITCMA" className="w-full object-cover"/>
            </div>
        </section>
        <div className="lg:w-[85%] w-[90%] grid lg:grid-cols-3  mx-auto ">
            
            <CarouselWithCaptions images={['/comp/itcmaGroupPhoto1_comp.jpg','/itcmaGroupPhoto2.jpg']} captions="Group Photos"/>
            <CarouselWithCaptions images={['/marketingTeamSupervisor1.jpg','/comp/marketingTeamSupervisor2_comp.jpg']} captions="Marketing Team With Supervisor"/>
            <CarouselWithCaptions images={['/comp/itcmaEventHighlight1_comp.jpg','/comp/itcmaEventHightlight2_comp.jpg']} captions="Event Highlights"/>
        </div>
        
        <br></br>
        <footer className="bg-white rounded-xl w-[80%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Contributed to a smooth event experience for regional delegates by supporting exhibitor services and cross-team communication at a large-scale international trade exhibition.</p>
        </footer>
    </div>
}