import ReelsWithCaption from "../components/reelsWithCaption"

export default function NewGenCall(){
    return <div className="py-5">
        <h2 className="text-center lg:text-3xl text-2xl pt-7 font-bold">Promotional Contents For Concert</h2>
        <p className="text-center lg:text-2xl text-xl font-bold">Sample Works</p>
    <div className="lg:w-[70%] md:w-[80%] w-[90%] border-b-2 border-red-400 mx-auto lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-3">
    <ReelsWithCaption url="/newGenCallIntro.mp4" views="1.1K Views" link="https://www.instagram.com/p/DTcwQVkEpeb/" width="w-full"/>
    <ReelsWithCaption url="/newGenCallEp1.mp4" views="1.3K Views" link="https://www.instagram.com/p/DT_zepbEoV2/" width="w-full"/>
    <div className="lg:col-span-2 lg:w-1/2 mx-auto xl:col-span-1 xl:w-full">
         <ReelsWithCaption url="/newGenCallEp4.mp4" views="1.2K Views" link="https://www.instagram.com/p/DUHkVBhEuAo/" width="w-full"/>
    </div>

    {/* Because of the odd number of contents, this is design to hide or show the specific layout configured for each screen size */}
    <div className="xl:col-span-3 xl:flex flex-row justify-center items-center hidden w-2/3 mx-auto">
        <ReelsWithCaption url="/newGenCallSong1.mp4" views="2.1K Views" link="https://www.instagram.com/p/DTkp6zDEoPa/" />
        <ReelsWithCaption url="/newGenCallSlide.mp4" views="2.4K Views" link="https://www.instagram.com/p/DRCKZdCkoQC/" />
    </div>

    <div className="xl:hidden">
        <ReelsWithCaption url="/newGenCallSong1.mp4" views="2.1K Views" link="https://www.instagram.com/p/DTkp6zDEoPa/" />
    </div>

    <div className="xl:hidden">
        <ReelsWithCaption url="/newGenCallSlide.mp4" views="2.4K Views" link="https://www.instagram.com/p/DRCKZdCkoQC/" />
    </div>
   
    </div>
    </div>
}