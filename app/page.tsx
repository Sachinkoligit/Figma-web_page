import Image from "next/image";

export default function Home() {
  return (
    <div className="sm:w-full h-screen text-white bg-[rgb(36,44,59,1)] relative">
      <div className="flex flex-row items-center w-[375px] h-[44px] absolute left-[8px]">
        <div className="absolute top-[7.33px] left-[21px]">
          <div className="w-[54px] h-[18px] top-[7px] font-semibold text-[15px] text-center">
            9:41
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/Cellular Connection.png"
            width={17}
            height={10.67}
            className="absolute top-[17.67px] left-[294px]"
            alt="Cellular Connection icon"
          />
          <Image
            src="/Wifi.png"
            width={15.33}
            height={11}
            className="absolute top-[17.33px] left-[316px]"
            alt="Wifi icon"
          />
          <Image
            src="/Battery.png"
            width={24.33}
            height={11.33}
            className="absolute top-[17.33px] left-[336.33px]"
            alt="Battery icon"
          />
        </div>
      </div>
      <div className="absolute top-[60px] left-[20px] flex flex-row gap-[127px] items-center w-[350px] h-[44px]">
        <div className="w-[179px] h-[30px] font-bold text-[20px]">
          Choose Your Bike
        </div>
        <div className="flex justify-center items-center bg-linear-to-b from-[rgba(52,200,232,1)] to-[rgba(78,74,242,1)] h-[44px] w-[44px] rounded-[10px] border p-2">
          <Image
            src="/Vector.png"
            width={20.01}
            height={20}
            className="text-[rgba(250,254,255,1)]"
            alt="Vector icon"
          />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[413.5px] h-[720.5px] bg-[url('/BG.png')] bg-no-repeat top-[149px] translate-x-[20px]"></div>
      </div>

      {/* <div
        className="absolute top-[136px] left-[20px] p-[2px] rounded-[22px]
bg-linear-to-br from-[rgba(255,255,255,1)] to-[rgba(0,0,0,1)]"
      >
        <div
          className="w-[350px] h-[240px] rounded-[20px]
  bg-linear-to-br from-[rgba(34,40,52,1)] to-[rgba(53,63,84,1)]"
        ></div>
      </div> */}

      <div
        className="absolute top-[136px] left-[20px] w-[350px] h-[240px] rounded-[22px]
  bg-[url('/back1.png')] bg-cover bg-center"
      ></div>

      <Image
        src="/Electric.png"
        width={316.82}
        height={153}
        alt="cycle img"
        className="absolute top-[166px] left-[37px]"
      />
      <div className="h-[39px] w-[101px] absolute top-[313px] left-[36px] text-[26px] text-[rgba(255,255,255,0.6)] font-bold">
        30% Off
      </div>

      <div className="w-[330px] h-[90px] top-[368px] left-[30px] rounded-[10px] relative"></div>
      <div
        className="absolute top-[408px] left-[30px] w-[50px] h-[50px] p-[1px] rounded-[10px]
  bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(0,0,0,1)]"
      >
        <div
          className="w-full h-full rounded-[10px]
    bg-gradient-to-b from-[rgba(52,200,232,1)] to-[rgba(78,74,242,1)]"
        >
          <div className="text-[13px] h-full flex justify-center items-center font-medium text-[rgba(255,255,255,1)]">
            All
          </div>
        </div>
      </div>
      <div
        className="absolute top-[398px] left-[100px] w-[50px] h-[50px] p-[1px] rounded-[10px]
  bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(0,0,0,1)]"
      >
        <div
          className="w-full h-full rounded-[10px]
    bg-gradient-to-br from-[rgba(53,63,84,1)] to-[rgba(34,40,52,1)]"
        >
          <div className="h-[24px] w-[36px] absolute top-[13px] left-[7px] flex bg-[url('/Subtract.png')] bg-cover bg-center justify-center items-center "></div>
        </div>
      </div>

      {/* <div className="bg-[url('/Road.png')] bg-no-repeat bg-cover bg-center w-[50px] h-[50px] rounded-[10px] absolute top-[388px] left-[170px]"></div> */}

      <div
        className="absolute top-[388px] left-[170px] w-[50px] h-[50px] p-[1px] rounded-[10px]
  bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(0,0,0,1)]"
      >
        <div
          className="w-full h-full rounded-[10px]
    bg-gradient-to-br from-[rgba(53,63,84,1)] to-[rgba(34,40,52,1)]"
        >
          <div className="h-[30px] w-[30px] absolute top-[10px] left-[10px] flex bg-[url('/Road1.png')] bg-cover bg-center justify-center items-center "></div>
        </div>
      </div>

      <div
        className="absolute top-[378px] left-[240px] w-[50px] h-[50px] p-[1px] rounded-[10px]
  bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(0,0,0,1)]"
      >
        <div
          className="w-full h-full rounded-[10px]
    bg-gradient-to-br from-[rgba(53,63,84,1)] to-[rgba(34,40,52,1)]"
        >
          <div className="h-[30px] w-[30px] absolute top-[10px] left-[10px] flex bg-[url('/Union.png')] bg-cover bg-center justify-center items-center "></div>
        </div>
      </div>

      <div
        className="absolute top-[368px] left-[310px] w-[50px] h-[50px] p-[1px] rounded-[10px]
  bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(0,0,0,1)]"
      >
        <div
          className="w-full h-full rounded-[10px]
    bg-gradient-to-br from-[rgba(53,63,84,1)] to-[rgba(34,40,52,1)]"
        >
          <div className="h-[27px] w-[27px] absolute top-[11px] left-[11px] flex bg-[url('/union1.png')] bg-cover bg-center justify-center items-center "></div>
        </div>
      </div>

      {/* <div className="w-[350px] h-[734px] absolute top-[442px] left-[20px] border">
        <div className="bg-[url('/rect166.png')] bg-cover bg-center w-[165px] absolute rounded-[20px] top-[-6px] h-[240px]"></div>
        <Image
          src="/robert.png"
          alt="Cycle img"
          width={121}
          height={88.57}
          className="absolute top-[32px] left-[22px]"
        />
      </div> */}

      <div className="w-[350px] absolute top-[442px] left-[20px]">
        <div className="absolute w-[165px] h-[235px] top-[31px] rounded-[20px] bg-[url('/rect166.png')] bg-cover bg-center ">
          <Image
            src="/robert.png"
            alt="Cycle img"
            width={121}
            height={88.57}
            className="absolute top-[32px] left-[22px]"
          />
          <Image
            src="/heart.png"
            alt="like img"
            width={19.99}
            height={17.74}
            className="absolute top-[16px] left-[125px]"
          />
          <div className="w-[112px] h-[63px] absolute top-[138px] left-[18px]">
            <div className="w-[62px] h-[20px] text-[13px] font-medium text-[rgba(255,255,255,0.6)]">
              Road Bike
            </div>
            <div className="w-[112px] h-[23px] text-[14px] font-bold text-[rgba(255,255,255,1)]  tracking-[-0.3px]">
              PEUGEOT - LR01
            </div>
            <div className="w-[62px] h-[20px] text-[13px] font-medium text-[rgba(255,255,255,0.6)]">
              $ 1,999.99
            </div>
          </div>
        </div>

        <div className="absolute  w-[165px] h-[219px] left-[185px] rounded-[20px] bg-[url('/rect167.png')] bg-cover bg-center relative">
          <Image
            src="/helmet.png"
            alt="helmet img"
            width={134.64}
            height={104}
            className="absolute top-[22px] left-[15px] rounded-[9.29px]"
          />
          <Image
            src="/Outline.png"
            alt="like img"
            width={24}
            height={24}
            className="absolute top-[16px] right-[16px]"
          />
          <div className="w-[112px] h-[63px] absolute top-[138px] left-[18px]">
            <div className="w-[62px] h-[20px] text-[13px] font-medium text-[rgba(255,255,255,0.6)]">
              Road Bike
            </div>
            <div className="w-[112px] h-[23px] text-[14px] font-bold text-[rgba(255,255,255,1)]  tracking-[-0.3px]">
              PEUGEOT - LR01
            </div>
            <div className="w-[62px] h-[20px] text-[13px] font-medium text-[rgba(255,255,255,0.6)]">
              $ 1,999.99
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[103.5px] absolute top-[785px]">
        <div className="bg-[url('/rect24.png')] bg-no-repeat bg-cover bg-center h-[103.5px] w-full">
          <div className="w-[60px] h-[60px] bg-[url('/rect481.png')] bg-no-repeat bg-cover bg-center absolute left-[17px] flex justify-center items-center">
            <Image
              src="/bicycle.png"
              alt="cycle"
              height={17.83}
              width={27.39}
            />
          </div>
          <div className="w-[75px] h-[49px] absolute left-[79px] top-[20px]">
            <Image
              src="/map.png"
              alt="map"
              height={17.38}
              width={18.53}
              className="absolute top-[10.02px] left-[27.74px]"
            />
          </div>

          <div className="w-[75px] h-[49px] absolute left-[157px] top-[20px]">
            <Image
              src="/cart.png"
              alt="map"
              height={17.53}
              width={20.43}
              className="absolute top-[9.54px] left-[27.56px]"
            />
          </div>

          <div className="w-[75px] h-[49px] absolute left-[235px] top-[20px]">
            <Image
              src="/person.png"
              alt="person"
              height={15.89}
              width={14.85}
              className="absolute top-[10.86px] left-[30.87px]"
            />
          </div>

          <div className="w-[75px] h-[49px] absolute left-[313px] top-[20px]">
            <Image
              src="/doc.png"
              alt="doc"
              height={28}
              width={28}
              className="absolute top-[5px] left-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
