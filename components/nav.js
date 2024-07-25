import Image from "next/image";
// import { IoMdSearch } from "react-icons/io";
export function Nav(){
    return(
        <div className="py-8 mx-4 flex justify-center items-center ">
            <div className="flex-1 ml-8">
                <Image src={"/Logo.png"} width={158} height={36} className="w-[158px] h-[36px]"></Image>
            </div>
            <div className=" hidden md:flex gap-10 flex-1">
                <a className="text-[#3B3C4A] text-base font-normal">Home</a>
                <a className="text-[#3B3C4A] text-base font-normal" >Blog</a>
                <a className="text-[#3B3C4A] text-base font-normal">Contact</a>
            </div>
            <div className="form-control pl-16 ">
                <input type="text" placeholder="Search" className="bg-[#F4F4F5] rounded-md py-2 px-4"/>
                {/* <IoMdSearch /> */}
            </div>
                

</div>
    )
}