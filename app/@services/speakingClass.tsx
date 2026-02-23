import CarouselWithCaptions from "../components/carouselWithCaptions"

export default function SpeakingClassPage(){

    return <div className="py-7">
        <h2 className="lg:text-3xl text-2xl text-gray-800 font-bold text-center">IELTS Speaking Club</h2>
        <section className="lg:w-[70%] w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
            <CarouselWithCaptions images={["/speakingKid1.jpg","/speakingKid2.jpg","speakingKid3.jpg"]} captions="Kids Speaking Club"/>
            <CarouselWithCaptions images={["/speakingAdult1.jpg","/speakingAdult2.jpg","speakingAdult3.jpg"]} captions="Adult Speaking Club"/>
        </section>
        </div>
}