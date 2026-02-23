import PageBreak from "../components/pageBreaker"

export default function Coversongs() {
    return (
        <div className=" bg-red-100 ">
 
             <header className="pt-4 bg-red-100">
                <h2 className={`md:text-4xl text-3xl font-bold text-gray-800 text-center `}>Cover Songs</h2>
                 
            </header>
           
            <section className="w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 py-5 gap-y-15 lg:gap-8 border-b-2 border-red-400">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-[85%] lg:h-60 h-70 rounded-xl overflow-hidden border-3 border-red-300">
                       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IVgfrjnlTpQ?si=emv-R-WlKFtEnVnT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-[85%] lg:h-60 h-70 rounded-xl overflow-hidden border-3 border-red-300">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vEFHCaYH7EQ?si=03G1bC9O3vlbb81b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            
     
        </div>
    )
}