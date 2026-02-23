

export default function ClubIntroduction(){
    return <div className="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-center py-4">
        <h2 className="text-center text-xl lg:text-3xl font-bold">Club Introduction Video Content</h2>
        <video controls className="w-2/3 rounded-lg  mt-5 object-cover">
            <source src="/clubIntro_comp.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
}