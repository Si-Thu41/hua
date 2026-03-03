import Image from "next/image";
import PageBreak from "../components/pageBreaker";
export default function Rsunity(){
    return (
        <div className="bg-red-100 pb-4">
            <PageBreak/>
            <h1 className="text-3xl text-center font-bold mt-5">RSUnity Sales Project</h1>
            <section className="grid lg:grid-cols-2 gird-cols-1 lg:grid-rows-1 grid-rows-2 px-5 pb-5 lg:py-4 lg:w-8/10 mx-auto">
                <div className="flex justify-center items-center lg:w-full w-2/3 mx-auto ">
                    <ul className="list-disc text-lg">
                        <li>Sold 34 jerseys to students across RIC within 15 days through active promotion and order management.</li>
                        <li>Managed a production crisis caused by factory color errors by coordinating with suppliers and customers.</li>
                        <li>Generated revenue from the project and donated 20% of profits to charity.</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 w-4/5 mx-auto gap-x-3">
                    <Image src={'/photoshootEC.jpg'} alt="Rsunity Sales Project" width={250} height={250}/>
                    <Image src={'/photoshootEC.jpg'} alt="Rsunity Sales Project" width={250} height={250}/>
                </div>
            </section>
            <section className="grid lg:grid-cols-2 lg:grid-rows-2 lg:w-full w-3/4 mx-auto justify-center gap-4 lg:py-10 pb-3">
                <Image src={"/valentine2025.jpg"} alt="Rsunity Sales Project" width={350} height={350} className="mr-0 ml-auto"/>
                <Image src={"/valentine2025.jpg"} alt="Rsunity Sales Project" width={350} height={350} />
                <Image src={"/valentine2025.jpg"} alt="Rsunity Sales Project" width={350} height={350} className="mr-0 ml-auto"/>
                <Image src={"/valentine2025.jpg"} alt="Rsunity Sales Project" width={350} height={350}/>
               

            </section>
            <footer className="bg-white rounded-xl w-[80%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Delivered multiple successful webinars with high participant engagement while strengthening collaboration with partner organizations through PR coordination.</p>
        </footer>
        </div>
    );
}