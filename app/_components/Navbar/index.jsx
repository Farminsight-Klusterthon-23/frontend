import Image from "next/image";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] justify-between items-center inline-flex pr-[16px] pl-[16px]">
      <div className="justify-start items-center gap-1.5 flex">
        <div className="w-8 h-8 relative">
          <Image src="/logo.svg" layout="fill" alt="farm insight logo" />
        </div>
        <div className="text-white text-lg font-normal font-['Sora']">
          Farminsight
        </div>
      </div>
      <div className="justify-start items-start gap-[148px] flex items-center">
        <div className="justify-start items-start gap-[18px] flex cursor-pointer">
          <div className="p-2 justify-center items-center gap-2 flex">
            <div className="text-white text-base font-light font-['Sora'] leading-normal">
              Explore AI Guidance
            </div>
          </div>
          <div className="p-2 justify-center items-center gap-2 flex">
            <div className="text-white text-base font-light font-['Sora'] leading-normal">
              Read Knowledge Updates
            </div>
          </div>
          <div className="p-2 justify-center items-center gap-2 flex">
            <div className="text-white text-base font-light font-['Sora'] leading-normal">
              Join Community
            </div>
          </div>
        </div>
        <div className="p-2 justify-center items-center gap-2 flex">
          <Button text="Login to start" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
