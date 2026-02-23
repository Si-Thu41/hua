import TikTokReelsPage from "../components/tiktokReels";

export default function OnlineCampaign() {

    return <div className="">
        <p className="lg:text-3xl text-2xl text-gray-700 font-bold text-center ">Online Campaign</p>
        <section className="w-[80%] grid md:grid-cols-2 lg:grid-cols-4 mx-auto ">
        <TikTokReelsPage url="/mymeeOnlineCampaign1.mp4#t=2" view="" tiktokLink="https://www.tiktok.com/@mymee.fym/video/7533607609341971730"/>
        <TikTokReelsPage url="/mymeeOnlineCampaign2.mp4" view="" tiktokLink="https://www.tiktok.com/@mymee.fym/video/7532869110577794311"/>
        <TikTokReelsPage url="/mymeeOnlineCampaign3.mp4" view="" tiktokLink="https://www.tiktok.com/@mymee.fym/video/7534238271036001543"/>
        <TikTokReelsPage url="/mymeeOnlineCampaign4.mp4" view="" tiktokLink="https://www.tiktok.com/@mymee.fym/video/7534082591389961490"/>
        </section>
    </div>
}