import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export function Footer(){
    return(
        <div className="bg-[#F6F6F7] pt-20">
            <div className="py-16 md:flex md:justify-between text-center  mx-auto">
                <div className="w-[289px] hidden md:block text-left">
                    <h1 className="text-[#181A2A] text-lg font-semibold">About</h1>
                    <p className="text-[#696A75] text-base font-normal pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                    <p className="text-[#3B3C4A] text-base font-normal pt-6">Email : info@jstemplate.net</p>
                    <p className="text-[#3B3C4A] text-base font-normal">Phone : 880 123 456 789</p>
                </div>
                <div  >
                    <p className="text-[#696A75] text-base font-normal">Home </p>
                    <p className="text-[#696A75] text-base font-normal pt-2">Blog</p>
                    <p className="text-[#696A75] text-base font-normal pt-2">Contact </p>
                </div>
                <div className="flex gap-[26px] justify-center pt-[30px]">
                    <FaFacebook color="#6D6E76"/>
                    <FaTwitter color="#6D6E76" />
                    <FaInstagram color="#6D6E76"/>
                    <FaLinkedin color="#6D6E76"/>
                    
                </div>
              
            </div>
            <div className="border-t-[1px] border-[#DCDDDF] flex py-5 justify-center ">

                        <div className="md:flex-1">
                            <Image src={"/Copyright.png"} width={223} height={54} className="w-[223px] h-[54px]"  ></Image>
                        </div>
                    <div className="md:flex md:flex-1 hidden">
                        <div className="border-r-2 border-[#E8E8EA] text-[#3B3C4A] pr-4 h-6 pl-14" >Terms of Use</div>
                        <div className="border-r-2 border-[#E8E8EA] text-[#3B3C4A] px-4 h-6" >Privacy Policy</div>
                        <div className=" text-[#3B3C4A] px-4 h-6" >Cookie Policy</div>
                        <div className=" text-[#3B3C4A] px-4 h-6" >Cookie Policy</div>
                        
                    </div>
                    
                   <div>
                  
                   </div>


              
                
                
            </div>
            
        </div>
    )
}