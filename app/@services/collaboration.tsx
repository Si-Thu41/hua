import Image from "next/image";

export default function WebinarPage(){

    return <div className="py-5">
        <h2 className="lg:text-4xl text-3xl text-gray-800 font-bold text-center py-8">Collaboration and Media Partnerships</h2>
        <div className="lg:w-[60%] w-[70%] mx-auto  grid grid-cols-2  gap-x-4 gap-y-8">
            <Image src={'/collaboration1.jpg'} alt="Collaboration and Media Partnerships" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/collaboration2.jpg'} alt="Collaboration and Media Partnerships" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/collaboration3.jpg'} alt="Collaboration and Media Partnerships" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            <Image src={'/collaboration4.jpg'} alt="Collaboration and Media Partnerships" width={800} height={600} className="rounded-lg border-2 border-red-400"/>
            
        </div>
         
    </div>

}