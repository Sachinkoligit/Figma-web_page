import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-[rgba(36,44,59,1)] max-w-sm h-[700px] mx-auto relative overflow-x-hidden">
      <div className="flex items-center h-[44px] justify-between px-[8px]">
        <div className="pt-[7.33px]  px-[21px]">
          <div className="max-w-sm h-[18px] pt-[7px] text-white font-semibold text-[10px] sm:text-[15px] text-center">
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

      <div className="h-[44px] w-[251px] absolute top-[60px] left-[20px] flex justify-between items-center">
        <Image
          src="/frame.png"
          alt="frame"
          width={44}
          height={44}
          className="rounded-[10px]"
        />
        <div className="max-w-[180px] h-[30px] text-end text-[19px] font-bold text-[rgba(255,255,255,1)]">
          My Shopping Cart
        </div>
      </div>

      <div className="h-[356px] max-w-[390px] mt-[100px] flex flex-col justify-between">
        <div className="h-[107.99px] px-[15px] max-w-[389.99px] pb-1 border-b-[1px] border-slate-700 flex justify-between items-center">
          <div className="p-[10px] max-w-[100px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#363E51] to-[#4C5770]">
            <Image src="/cycle11.png" alt="bike" width={80.6} height={59} />
          </div>
          <div className="w-[234px] flex flex-col justify-between">
            <div className=" max-w-[120px] text-[15px] font-bold text-[#FFFFFFDE]">
              PEUGEOT- LR01
            </div>
            <div className=" max-w-[234px] mt-[20px] flex items-center justify-between">
              <div className="max-w-[65px] text-[13px] font-normal text-[#3C9EEA]">
                $ 1,999.99
              </div>
              <div className=" max-w-[79px] rounded-[8px] flex items-center gap-[10px]">
                <div>
                  <Image
                    src="/plus1.png"
                    alt="plus"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                </div>
                <div className="text-[13px] font-semibold text-[#FFFFFF99]">
                  1
                </div>
                <div>
                  <Image
                    src="/minus.png"
                    alt="minus"
                    width={20}
                    height={20}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[107.99px] px-[15px] max-w-[389.99px]  pb-1 border-b-[1px] border-slate-700  flex justify-between items-center">
          <div className=" p-[10px] max-w-[100px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#363E51] to-[#4C5770]">
            <Image src="/cycle22.png" alt="bike" width={80.6} height={59} />
          </div>
          <div className="w-[234px] flex flex-col justify-between">
            <div className=" w-full text-[15px] font-bold text-[#FFFFFFDE]">
              PILOT - CHROMOLY 520
            </div>
            <div className="mt-[20px] max-w-[234px] flex items-center justify-between">
              <div className="max-w-[65px] h-[20px] text-[13px] font-normal text-[#3C9EEA]">
                $ 3,999.99
              </div>
              <div className="h-[30px] max-w-[79px] rounded-[8px] flex items-center gap-[10px]">
                <div>
                  <Image
                    src="/plus1.png"
                    alt="plus"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                </div>
                <div className="text-[13px] font-semibold text-[#FFFFFF99]">
                  1
                </div>
                <div>
                  <Image
                    src="/minus.png"
                    alt="minus"
                    width={20}
                    height={20}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[107.99px] px-[15px] max-w-[389.99px]  pb-1 border-b-[1px] border-slate-700  flex justify-between items-center">
          <div className="p-[10px] max-w-[100px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#363E51] to-[#4C5770]">
            <Image src="/helmet11.png" alt="bike" width={80.6} height={59} />
          </div>
          <div className="w-[234px] flex flex-col justify-between">
            <div className=" w-full text-[15px] font-bold text-[#FFFFFFDE]">
              SMITH - Trade
            </div>
            <div className=" max-w-[234px] mt-[20px] flex items-center justify-between">
              <div className="max-w-[65px] h-[20px] text-[13px] font-normal text-[#3C9EEA]">
                $ 120
              </div>
              <div className="max-w-[79px] rounded-[8px] flex items-center gap-[10px]">
                <div>
                  <Image
                    src="/plus1.png"
                    alt="plus"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                </div>
                <div className="text-[13px] font-semibold text-[#FFFFFF99]">
                  1
                </div>
                <div>
                  <Image
                    src="/minus.png"
                    alt="minus"
                    width={20}
                    height={20}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[251px] mx-auto mt-[20px] ">
        <span className="text-[15px] font-normal text-[#FFFFFF99]">
          Your cart qualifies for free shipping
        </span>
      </div>

      <div className="max-w-[350px] rounded-[8px] mx-auto mt-[20px] flex justify-between items-center shadow-[inset_0_2px_4px_#191E29,inset_0_-2px_4px_#191E29]">
        <div className="w-[42px] ml-[8px]  flex justify-center items-center">
          <span className="text-[#FFFFFF99] text-[13px] font-normal">
            Bike30
          </span>
        </div>
        <div>
          <button className="max-w-[114px] rounded-[10px] py-[10px] px-[20px] bg-gradient-to-br from-[#34C8E8] to-[#4E4AF2]">
            Apply
          </button>
        </div>
      </div>

      <div className="max-w-[348px] mt-[15px] mx-auto flex justify-between items-center">
        <div className="max-w-[91px]">
          <h1 className="text-[15px] font-medium text-[#FFFFFFDE]">
            Subtotal:
          </h1>
          <h1 className="text-[15px] font-medium text-[#FFFFFFDE]">
            Delivery Fee:
          </h1>
          <h1 className="text-[15px] font-medium text-[#FFFFFFDE]">
            Discount:
          </h1>
        </div>
        <div className="max-w-[58px]">
          <h1 className="text-[15px] font-normal text-[#FFFFFF99]">$6119.99</h1>
          <h1 className="text-[15px] font-normal text-[#FFFFFF99]">$0</h1>
          <h1 className="text-[15px] font-normal text-[#FFFFFF99]">30%</h1>
        </div>
      </div>

      <div className="max-w-[353px]  mx-auto mt-[20px] flex justify-between">
        <h1 className="text-[15px] font-medium text-[#FFFFFFDE]">Total:</h1>
        <h1 className="text-[17px] font-bold text-[#38B8EA]">$4,283.99</h1>
      </div>

      <div className="flex items-center max-w-[174px] my-[20px] shadow-[inset_0_2px_4px_#11161E,inset_0_-2px_4px_#2B3545] bg-[#242C3B] rounded-[10px] mx-auto">
        <div className="border rounded-[10px] max-w-[44px] px-[22px] py-[15px] bg-gradient-to-br from-[#34C8E8] to-[#4E4AF2] flex justify-center items-center">
          <Image
            src="/gt.png"
            alt="checkout"
            width={8.97}
            height={15.5}
            className="max-w-sm"
          />
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <h1 className="text-[15px] font-medium text-[#FFFFFF99]">Checkout</h1>
        </div>
      </div>
    </div>
  );
}
