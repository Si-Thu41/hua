export default function ReelsWithCaption({url, views, link, youTube,width,height}:{url:string, views:string, link:string, youTube?:boolean,width?:string,height?:string}){
    return <div className={` ${width?width: "w-65"} py-5 ${height? `${height}` : ''} mx-auto`}>
        <div className={`w-full h-2/3`}>
            <video controls className={`object-cover w-full mx-auto rounded-xl border-3 border-red-300 h-full`} >
                <source src={url} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
        </div>
        
        <p className="text-center mt-5 text-lg font-bold">{views}</p>
        <a href={link} target="_blank" className=" text-center block hover:underline active:bg-red-300 bg-red-400 px-3 py-2 max-w-max rounded-md mt-2 mx-auto text-white">View  {youTube ? "full video on YouTube" : "on Instagram"}</a>
    </div>
}