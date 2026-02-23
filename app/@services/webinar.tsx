import Image from "next/image";

export default function WebinarPage(){

    return <div className="py-5">
        <h2 className="lg:text-4xl text-3xl text-gray-800 font-bold text-center py-8">Webinar</h2>
        <div className="lg:w-[80%] w-[90%] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            <Image src={'/webinar1.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar2.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar3.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar4.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar5.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar6.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar7.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/webinar8.jpg'} alt="Webinar" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
        </div>
         
    </div>

}