"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div className="bg-[rgba(36,44,59,1)] max-w-sm h-auto mx-auto relative overflow-x-hidden">
      <div className="bg-[url('/rect475.png')] bg-no-repeat h-auto w-full w-[413.9px] top-[-90px] left-[-80px] overflow-hidden">
        <div className="h-[44px] w-full max-w-[360px] mx-auto">
          <div className="w-[54px] h-[21px] absolute pt-[7.33px] pl-[21px]">
            <div className="max-w-[54px] absolute pt-[7px] text-[15px] font-semibold text-[rgba(255,255,255,1)]">
              9:41
            </div>
          </div>
        </div>

        <div className=" max-w-[251px] w-full absolute top-[60px] left-[20px] flex justify-between items-center">
          <div onClick={()=>router.push("/")}>
            <Image
              src="/frame.png"
              alt="frame"
              width={44}
              height={44}
              className="rounded-[10px]"
            />
          </div>
          <div className="w-[151px] h-[30px] flex-1 flex justify-center items-center text-[12px] sm:text-[19px] font-bold text-[rgba(255,255,255,1)]">
            PEUGEOT-LR01
          </div>
        </div>

        <div className="mt-[90px] px-[51px]">
          <Image src="/cycle1.png" alt="Image" width={287.73} height={208.41} />
        </div>

        <div className="w-full mt-6 border-[2px] border-slate-600 h-auto rounded-t-[30px] bg-gradient-to-br from-[#353F54] to-[#222834]">
          <div className="max-w-[305px] h-[43px] mt-[32px] mx-auto flex justify-between p-[5px]">
            <button className="h-[43px] max-w-[133px] rounded-[10px] py-[10px] px-[20px] shadow-[-3px_-3px_6px_rgba(255,255,255,0.15),_3px_3px_6px_rgba(0,0,0,0.6)] bg-[#323B4F] text-[15px] font-bold bg-gradient-to-r from-[#3CA4EB] to-[#4286EE] bg-clip-text text-transparent">
              Description
            </button>
            <button className="h-[43px] max-w-[133px] rounded-[10px] py-[10px] px-[20px] shadow-[inset_-2px_-2px_4px_#202633,_inset_3px_3px_6px_#364055] text-[15px] font-normal text-[#FFFFFF99]">
              Specification
            </button>
          </div>

          <div className="h-[208px] w-[335px] mx-auto mt-[20px]">
            <h1 className="text-[17px] font-bold text-[#FFFFFF]">
              PEUGEOT - LR01
            </h1>
            <p className="text-[15px] font-normal text-[#FFFFFF99] pt-[5px]">
              The LR01 uses the same design as the most iconic bikes from
              PEUGEOT Cycles' 130-year history and combines it with agile,
              dynamic performance that's perfectly suited to navigating today's
              cities. As well as a lugged steel frame and iconic PEUGEOT
              black-and-white chequer design, this city bike also features a
              16-speed Shimano Claris drivetrain.
            </p>
          </div>

          <div className="max-w-[390px] h-auto mt-[25px] px-[2px]">
            <div className="h-[104px] max-w-[390px] border-[2px] flex justify-center items-center border-slate-700 rounded-t-[50px] bg-[#262E3D]">
              <div className=" h-[44px] w-full max-w-[320px] flex justify-between items-center">
                <h1 className="text-[24px] font-normal text-[#3D9CEA]">
                  $ 1,999.99
                </h1>
                <button
                  onClick={() => router.push("/cart")}
                  className="h-[44px] max-w-[160px] w-full rounded-[10px] border-[2px] border-slate-700 bg-gradient-to-br from-[#34C8E8] to-[#4E4AF2]"
                >
                  <span className="text-[15px] font-medium text-[#FFFFFF]">
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
