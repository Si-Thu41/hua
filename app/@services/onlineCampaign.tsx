import TikTokReelsPage from "../components/tiktokReels"

export default function OnlineCampaignPage(){

    return (
    <div className="py-5">
        <h2 className="lg:text-4xl text-3xl text-gray-800 font-bold text-center">Online Campaign</h2>
        <div className="xl:w-[80%] w-full mx-auto  md:grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <TikTokReelsPage url="/onlineCampaign1.mp4"  view={'2.5K'} tiktokLink="https://www.tiktok.com/@twenty.bbq/video/7566278202566397205?is_from_webapp=1&sender_device=pc&web_id=7609397611892999696"/>
        <TikTokReelsPage url="/onlineCampaign2.mp4#t=3" view={'4.8K'} tiktokLink="https://www.tiktok.com/@twenty.bbq/video/7577053734623104263?is_from_webapp=1&sender_device=pc&web_id=7609397611892999696"/>
        <TikTokReelsPage url="/comp/onlineCampaign3_comp.mp4" view={'1.6K'} tiktokLink="https://www.tiktok.com/@twenty.bbq/video/7568505415106055432?is_from_webapp=1&sender_device=pc&web_id=7609397611892999696"/>
        <TikTokReelsPage url="/onlineCampaign4.mp4" view={'900K'} tiktokLink="https://www.tiktok.com/@twenty.bbq/video/7566650152044285191?is_from_webapp=1&sender_device=pc&web_id=7609397611892999696"/>
        <TikTokReelsPage url="/onlineCampaign5.mp4" view={'1.6K'} tiktokLink="https://www.tiktok.com/@twenty.bbq/video/7576289874605739282?is_from_webapp=1&sender_device=pc&web_id=7609397611892999696"/>
        <div className="col-span-3 w-full">
             <TikTokReelsPage url="/comp/onlineCampaign6_comp.mp4" view={'1.8K'} tiktokLink="https://www.tiktok.com/@twenty.bbq/video/7571854496666569991?is_from_webapp=1&sender_device=pc&web_id=7609397611892999696"/>
        </div>
    </div>
     <footer className="bg-white rounded-xl w-[90%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Improved brand visibility and audience engagement through strategic short-form video creation on social media platforms.</p>
        </footer>
    </div>)
}