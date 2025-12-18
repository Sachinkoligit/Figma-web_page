"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div className="max-w-sm mx-auto max-h-[840px] text-white bg-[rgb(36,44,59,1)] overflow-x-hidden relative">
      <div className="flex items-center h-[44px] justify-between px-[8px]">
        <div className="pt-[7.33px]  px-[21px]">
          <div className="max-w-sm h-[18px] pt-[7px] font-semibold text-[15px] text-center">
            9:41
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/Cellular Connection.png"
            width={17}
            height={10.67}
            className="pt-[17.67px] px-[2px]"
            alt="Cellular Connection icon"
          />
          <Image
            src="/Wifi.png"
            width={15.33}
            height={11}
            className="pt-[17.33px] px-[2px]"
            alt="Wifi icon"
          />
          <Image
            src="/Battery.png"
            width={24.33}
            height={11.33}
            className="pt-[17.33px] px-[2px]"
            alt="Battery icon"
          />
        </div>
      </div>
      <div className="pt-[30px] px-[20px] flex justify-between items-center max-w-sm h-[44px]">
        <div className="w-[179px] h-[30px] font-bold text-[20px]">
          Choose Your Bike
        </div>
        <div className="flex justify-center items-center bg-linear-to-b from-[rgba(52,200,232,1)] to-[rgba(78,74,242,1)] h-[44px] max-w-[44px] rounded-[10px] border p-2 px-[15px]">
          <Image
            src="/Vector.png"
            width={20.01}
            height={20}
            className="text-[rgba(250,254,255,1)]"
            alt="Vector icon"
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="max-w-[413.5px] h-[720.5px] bg-[url('/BG.png')] bg-no-repeat mt-[49px] px-[20px]"></div>
      </div>

      <div className="px-4">
        <div
          className="absolute top-[136px] inset-x-0 max-w-[310px] h-[240px] mx-auto rounded-[22px]
  bg-[url('/back1.png')] bg-cover bg-center flex flex-col"
        >
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/Electric.png"
              width={316.82}
              height={153}
              alt="cycle img"
              className=""
            />
          </div>
          <div className="mb-[10px] ml-[10px] max-w-[101px] text-[26px] text-[rgba(255,255,255,0.6)] font-bold">
            30% Off
          </div>
        </div>
      </div>

      <div className="absolute top-[398px] left-1/2 -translate-x-1/2 w-full max-w-[330px] px-2">
        <div className="flex flex-row sm:items-end justify-between gap-0.5 sm:gap-2">
          {/* All */}
          <div className="flex sm:translate-y-[10px]">
            <div
              className="w-[50px] h-[50px] p-[1px] rounded-[10px]
        bg-gradient-to-br from-white to-black"
            >
              <div
                className="w-full h-full rounded-[10px]
          bg-gradient-to-b from-[#34C8E8] to-[#4E4AF2]
          flex justify-center items-center"
              >
                <span className="text-[13px] font-medium text-white">All</span>
              </div>
            </div>
          </div>

          {/* Subtract */}
          <div className="flex sm:translate-y-[4px]">
            <div
              className="w-[50px] h-[50px] p-[1px] rounded-[10px]
        bg-gradient-to-br from-white to-black"
            >
              <div
                className="w-full h-full rounded-[10px]
          bg-gradient-to-br from-[#353F54] to-[#222834]
          flex justify-center items-center"
              >
                <Image
                  src="/Subtract.png"
                  alt="Subtract"
                  width={30}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Road */}
          <div className="flex sm:-translate-y-[4px]">
            <div
              className="w-[50px] h-[50px] p-[1px] rounded-[10px]
        bg-gradient-to-br from-white to-black"
            >
              <div
                className="w-full h-full rounded-[10px]
          bg-gradient-to-br from-[#353F54] to-[#222834]
          flex justify-center items-center"
              >
                <Image src="/Road1.png" alt="Road" width={30} height={30} />
              </div>
            </div>
          </div>

          {/* Union */}
          <div className="flex sm:-translate-y-[10px]">
            <div
              className="w-[50px] h-[50px] p-[1px] rounded-[10px]
        bg-gradient-to-br from-white to-black"
            >
              <div
                className="w-full h-full rounded-[10px]
          bg-gradient-to-br from-[#353F54] to-[#222834]
          flex justify-center items-center"
              >
                <Image src="/Union.png" alt="Union" width={30} height={30} />
              </div>
            </div>
          </div>

          {/* Union 1 */}
          <div className="flex sm:-translate-y-[16px]">
            <div
              className="w-[50px] h-[50px] p-[1px] rounded-[10px]
        bg-gradient-to-br from-white to-black"
            >
              <div
                className="w-full h-full rounded-[10px]
          bg-gradient-to-br from-[#353F54] to-[#222834]
          flex justify-center items-center"
              >
                <Image src="/union1.png" alt="Union 1" width={26} height={26} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-[360px] w-full absolute top-[442px] px-[10px]
  flex justify-between"
      >
        {/* CARD 1 */}
        <div
          onClick={() => router.push("/description")}
          className="w-[130px] sm:w-[165px] h-[235px] top-[31px] rounded-[20px]
    bg-[url('/rect166.png')] bg-cover bg-center relative"
        >
          <Image
            src="/robert.png"
            alt="Cycle img"
            width={121}
            height={88.57}
            className="absolute top-[32px] left-[8px] sm:left-[22px]"
          />

          <Image
            src="/heart.png"
            alt="like img"
            width={19.99}
            height={17.74}
            className="absolute top-[16px] right-[16px]"
          />

          <div className="absolute top-[138px] left-[18px]">
            <div className="text-[13px] text-white/60">Road Bike</div>
            <div className="text-[14px] font-bold">PEUGEOT - LR01</div>
            <div className="text-[13px] text-white/60">$ 1,999.99</div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          onClick={() => router.push("/description")}
          className="w-[130px] sm:w-[165px] h-[219px] rounded-[20px]
    bg-[url('/rect167.png')] bg-cover bg-center relative"
        >
          <Image
            src="/helmet.png"
            alt="helmet img"
            width={134.64}
            height={104}
            className="absolute top-[22px] left-[10px] sm:left-[15px]"
          />

          <Image
            src="/Outline.png"
            alt="like img"
            width={24}
            height={24}
            className="absolute top-[16px] right-[16px]"
          />

          <div className="absolute top-[138px] left-[18px]">
            <div className="text-[13px] text-white/60">Road Bike</div>
            <div className="text-[14px] font-bold">PEUGEOT - LR01</div>
            <div className="text-[13px] text-white/60">$ 1,999.99</div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[390px] h-[103.5px] absolute top-[785px] left-1/2 -translate-x-1/2">
        <div
          className="h-full w-full bg-[url('/rect24.png')] bg-cover bg-center
    flex items-center justify-around relative"
        >
          <div className="w-[60px] h-[60px] bg-[url('/rect481.png')] bg-cover bg-center absolute left-[17px] flex justify-center items-center">
            <div className="w-[75px] h-[49px] flex justify-center items-center z-10">
              <Image src="/bicycle.png" alt="cycle" width={28} height={28} />
            </div>
          </div>

          {/* Map */}
          <div className="w-[75px] h-[49px] flex justify-center items-center">
            <Image src="/map.png" alt="map" width={18.53} height={17.38} />
          </div>

          {/* Cart */}
          <div className="w-[75px] h-[49px] flex justify-center items-center">
            <Image src="/cart.png" alt="cart" width={20.43} height={17.53} />
          </div>

          {/* Person */}
          <div className="w-[75px] h-[49px] flex justify-center items-center">
            <Image
              src="/person.png"
              alt="person"
              width={14.85}
              height={15.89}
            />
          </div>

          {/* Doc */}
          <div className="w-[75px] h-[49px] flex justify-center items-center">
            <Image src="/doc.png" alt="doc" width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
