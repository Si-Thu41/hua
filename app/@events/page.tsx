import CarouselWithCaptions from "../components/carouselWithCaptions";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tangerine',
});

export default function Experience() {
    return (
        <div className="bg-red-100">
        <div className="w-full h-10 bg-red-200"></div>
        
            <header className="pt-4 bg-red-100">
                <h2 className={`text-7xl font-bold text-gray-800 text-center ${tangerine.className}`}>Events</h2>
                 
            </header>
            <section className="w-full md:grid md:grid-cols-2 items-center bg-red-100 px-10 py-10 gap-4" id='experience' >
                <CarouselWithCaptions images={['/Orientation1.jpg','/mOrientation1.jpg']} captions={'Rangsit University International College Orientation'} interval={4000}/>
                <CarouselWithCaptions images={['/mOrientation1.jpg','/comp/mOrientation2_comp.jpg','/comp/mOrientation3_comp.jpg']} captions={'RIC Music Club Member Orientation'} interval={4000}/>
                <CarouselWithCaptions images={['/valentine2025.jpg']} captions={'RIC Valentine\'s Day Event 2025'} interval={4000}/>
                <CarouselWithCaptions images={['/valentine2025.jpg']} captions={'RIC Valentine\'s Day Event 2026'} interval={4000}/>

                {/*Please remove the #odd-one-out div if you have even numbers of events and use the CarouselWithCaptions directly*/}
                <div className="col-span-2 md:flex flex-row justify-center w-full hidden  " id='odd-one-out'>
                <div className="w-1/2">
                    <CarouselWithCaptions images={['/songbird1.jpg']} captions={'RIC Graduate Dinner Event'} interval={4000} />
                </div>
                </div>
                <div className="md:hidden">
                    <CarouselWithCaptions images={['/songbird1.jpg']} captions={'RIC Graduate Dinner Event'} interval={4000} />
                </div>
        </section>
        </div>
    )
}