import Activities from "./activities";
import { Tangerine } from "next/font/google";
import PageBreak from "../components/pageBreaker";
import Carousel from "../components/carousel";

const tangerine = Tangerine({
    variable: "--font-tangerine",
    subsets: ["latin"],
    weight: "400"
})

export default function StudentCouncil() {
    return (
      <div className="bg-red-100 py-4">
              <PageBreak />
              <h2 className={`underline decoration-red-400 lg:text-7xl text-5xl text-gray-800 font-bold text-center py-6 ${tangerine.className}`}>Student Council Cabinet Member</h2>
          
              <section className="w-2/3 grid md:grid-cols-2 mx-auto gap-3 py-6">
              <ul className="list-disc leading-8 flex flex-col justify-center items-center">
                  <li>Supported school-wide activities through task delegation and teamwork to ensure smooth event flow and strong student participation.</li>
                  <li>Served as Master of Ceremony, managing transitions and maintaining audience engagement throughout programs.</li>
                  <li>Managed daily student attendance records accurately, supporting administrative coordination and discipline management.</li>
              </ul>
              <div className="flex justify-center items-center">
                  <Carousel images={["/marketingTeamSupervisor1.jpg", "/marketingTeamSupervisor2.jpg"]}  />
              </div>
              </section>
              <Activities />
              <footer className="bg-white rounded-xl w-[80%] mx-auto text-center md:px-10 px-5 py-4 shadow-md">
            <h2 className="lg:text-lg text-md font-bold">Key Achievement:</h2>
            <p className="lg:text-md text-sm font-bold">Contributed to the smooth execution of school events through effective coordination while strengthening public speaking and on-stage communication as a Master of Ceremony.</p>
        </footer>
            </div>
    );
  }