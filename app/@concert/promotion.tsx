import ReelsWithCaption from "../components/reelsWithCaption"

export default function Promotion(){
    return <div >
        <h2 className="text-center lg:text-3xl text-2xl pt-7 font-bold">Promotional Contents For Concert</h2>
        <p className="text-center lg:text-2xl text-xl font-bold">Sample Works</p>
        <div className="w-[70%] mx-auto flex flex-wrap justify-center items-center gap-x-10 gap-y-3 border-b-2 border-red-400">
    <ReelsWithCaption url="/promotion1.mp4" views="2.8K Views" link="https://www.instagram.com/p/DOXtPCLkrsB/"/>
    <ReelsWithCaption url="/promotion2.mp4" views="5.4K Views" link="https://www.instagram.com/p/DOlriA3EtvT/"/>
    <ReelsWithCaption url="/promotion3.mp4" views="2.7K Views" link="https://www.instagram.com/p/DOfk3wdEnxO/"/>
    <ReelsWithCaption url="/promotion4.mp4" views="3K Views" link="https://www.instagram.com/p/DOh28GIEuni/"/>
    <ReelsWithCaption url="/promotion5.mp4" views="4K Views" link="https://www.instagram.com/p/DOaLl6cEjFY/"/>
    </div>
    </div>
}