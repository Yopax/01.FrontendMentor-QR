import Description from "@/components/Description";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#D5E1EF] shadow-sm ">
        <div className="w-80 mx-auto h-[497px] rounded-[20px] bg-white p-4" >
          <Image
            className="rounded-[10px]"
            width={288}
            height={288}
            src="/qr.png"
            alt="qrlogo"
            priority />
          <Description />
        </div>
      </div >
      
    </>
  );
}
