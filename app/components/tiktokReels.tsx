 
 export default function TikTokReelsPage({url,view,tiktokLink}:{url:string,view?:string,tiktokLink:string}){
  return <div className="w-2/3 mx-auto py-10">
        <video controls className="w-full rounded-xl">
            <source src={url} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <h3 className="text-center text-xl font-bold">{view ? `${view} Views` : ""}</h3>
        <a href={tiktokLink} target="_blank" className="text-center block hover:underline active:bg-red-300 bg-red-400 px-3 py-2 max-w-max rounded-md mt-2 mx-auto text-white">View on TikTok</a>
    </div>
 }