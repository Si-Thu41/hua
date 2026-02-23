import Image from "next/image"

export default function Activities() {

    return <div className="py-5 ">
         <p className="lg:text-3xl text-2xl text-gray-700 font-bold text-center pt-2 ">Activities Highlight</p>
        <section className="w-[90%] lg:w-[80%]  xl:w-2/3 grid md:grid-cols-4 mx-auto gap-3 border-b-2 border-red-400 py-4 justify-center items-center">
        <Image src="/marketingTeamSupervisor2.jpg" alt="mymee1" width={300} height={100} className="rounded-lg" />
        <Image src="/marketingTeamSupervisor2.jpg" alt="mymee1" width={300} height={100} className="rounded-lg" />
        <Image src="/marketingTeamSupervisor2.jpg" alt="mymee1" width={300} height={100} className="rounded-lg" />
        <Image src="/marketingTeamSupervisor2.jpg" alt="mymee1" width={300} height={100} className="rounded-lg" />
    </section>
    </div>
    
}