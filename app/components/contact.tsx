"use-client"
import Image from "next/image";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PageBreak from "./pageBreaker";

export default function Contact(){

    return <div className="bg-red-200 pb-5">
        <PageBreak/>
        <h2 className="text-2xl font-semibold text-gray-700 text-center pt-5 ">Contact Me</h2>
        <h2 className="text-xl font-semibold text-gray-700 text-center pb-5">Internship Period: 4 May - 4 August</h2>
        <footer className="w-full grid  md:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex md:justify-end justify-center">
            <Image src={'/huaAbout.png'} alt="Contact Person Photo" width={200} height={200} className="rounded-full w-50 h-50"/>
        </div>
        <div className=" w-1/2 grid md:gap-y-3 gap-y-2 text-center mx-auto">
            <p className="py-1 md:text-md text-sm md:py-2 px-4 rounded-full border-2 hover:underline"><MailIcon/><a href="mailto:urbuddyella@gmail.com">urbuddyella@gmail.com</a></p>
            <p className="py-1 md:text-md text-sm md:py-2 px-4 rounded-full border-2 hover:underline"><LocalPhoneIcon/> <a href="tel:0645897563">0645897563</a></p>
            <p className="py-1 md:text-md text-sm md:py-2 px-4 rounded-full border-2 hover:underline"><LinkedInIcon/> <a href="https://www.linkedin.com/in/aye-thinzar-aung-971a90356/" target="_blank">Aye Thinzar Aung</a></p>
            <p className="py-1 md:text-md text-sm md:py-2 px-4 rounded-full border-2 hover:underline"><InstagramIcon/> <a href="https://www.instagram.com/ddreameily?igsh=a3UyMjg4MG1ja3V5&utm_source=qr" target="_blank">@ddreameily</a></p>
        </div>
    </footer>
    </div>
}