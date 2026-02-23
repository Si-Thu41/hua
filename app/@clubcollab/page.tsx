
export default function ClubCollab() {
  return (
    <div className="bg-red-100">
        
        <header className="pt-4 bg-red-100 text-center py-5 px-4">
                <h2 className={"md:text-4xl text-3xl font-bold text-gray-800 text-center py-1"}>International Collaboration Workshop</h2>
                 <p className="md:text-xl text-lg"> RIC Music Club × Bangkok University </p>
            </header>
        <section className="md:w-[70%] mx-auto grid md:grid-cols-2 py-8 border-b-2 border-red-400 gap-10">
            <div className="w-2/3 mx-auto">
                <img src='/photoshootEC.jpg' alt='photoshoot' className="w-full h-full object-cover rounded-xl"/>
            </div>

            <div className="w-2/3 mx-auto">
                <img src='/photoshootEC.jpg' alt='photoshoot' className="w-full h-full object-cover rounded-xl"/>
            </div>

        </section>
    </div>
  );
}