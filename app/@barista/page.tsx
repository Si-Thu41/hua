import Image from "next/image"
import PageBreak from "../components/pageBreaker"
export default function Barista(){
    return(
        <div className="bg-red-100">
            <PageBreak/>
            <h1 className="text-3xl text-center pt-4">WTC Barista Internship</h1>
            <section className="grid md:grid-cols-2 md:gird-rows-2 lg:w-6/10 w-9/10 mx-auto py-7 gap-y-5">
                <div className="flex justify-center items-center w-7/10 mx-auto">
                    <ul className="list-disc">
                        <li>Prepared beverages efficiently during peak hours while maintaining consistent quality and customer satisfaction.</li>
                        <li>Supported daily café operations through customer service, cleaning, and inventory restocking to ensure smooth workflow.</li>
                    </ul>
                </div>

                <div className="flex justify-center">
                    <Image src={"/valentine2025.jpg"} alt="" width={320} height={180}/>
                </div>

                <div className="flex justify-center">
                    <Image src={"/valentine2025.jpg"} alt="" width={320} height={180}/>
                </div>

                <div className="flex justify-center">
                    <Image src={"/valentine2025.jpg"} alt="" width={320} height={180}/>
                </div>
            </section>

            <section className="grid lg:grid-cols-2 lg:grid-rows-2 lg:w-3/5 mx-auto gap-y-5 pb-4">
                <div className="md:row-span-2 flex justify-center">
                    <Image src={"/photoshootEC.jpg"} alt="" width={320} height={180} />
                </div>

                <div className="flex justify-center ">
                     <Image src={"/valentine2025.jpg"} alt="" width={320} height={180}/>
                </div>

                <div className="flex flex-col items-center ">
                    <div className="rounded-xl bg-red-200 px-6 py-3">
                    <h2 className="text-2xl font-semibold">Skills I improved:</h2>
                    <ul className="list-disc">
                        <li>Customer Service</li>
                        <li>Time Management</li>
                        <li>Multitasking under pressure</li>
                        <li>Teamwork</li>
                    </ul>
                    </div>
                </div>

            </section>
        </div>
    )
}