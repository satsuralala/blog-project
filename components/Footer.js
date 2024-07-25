import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export function Footer(){
    return(
        <div className="bg-[#E8E8EA] pt-20">
            <div className="py-16 flex justify-between mx-auto">
                <div className="w-[289px] ">
                    <h1 className="text-[#181A2A] text-lg font-semibold">About</h1>
                    <p className="text-[#696A75] text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                    <p className="text-[#3B3C4A] text-base font-normal">Email : info@jstemplate.net</p>
                    <p className="text-[#3B3C4A] text-base font-normal">Phone : 880 123 456 789</p>
                </div>
                <div  >
                    <p className="text-[#696A75] text-base font-normal">Home </p>
                    <p className="text-[#696A75] text-base font-normal pt-2">Blog</p>
                    <p className="text-[#696A75] text-base font-normal pt-2">Contact </p>
                </div>
                <div className="flex gap-[26px]">
                    <FaFacebook color="#6D6E76"/>
                    <FaTwitter color="#6D6E76" />
                    <FaInstagram color="#6D6E76"/>
                    <FaLinkedin color="#6D6E76"/>
                    
                </div>
              
            </div>
            
        </div>
    )
}