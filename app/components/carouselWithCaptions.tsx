import Carousel from "./carousel";

export default function CarouselWithCaptions({
    images,
    captions, interval=4000}: { images: string[]; captions: string ;interval?: number }) {

        return<div className="w-full flex flex-col justify-center items-center py-4 border-b-2 border-red-400">
                            <div className="w-3/4">
                            <Carousel
                                images={images}
                                interval={interval}
                                
                            /> </div>
                            <p className="text-md font-bold py-2">{captions}</p>
                        </div>
    }