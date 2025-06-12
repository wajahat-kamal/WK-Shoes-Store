import React from "react";

function Footer() {
  return (
    <div className=" w-full p-6 mx-auto flex flex-col gap-3 md:flex-row justify-around items-center border-t-2 border-[#f8f05e]">
      <div className="flex flex-col">
        <div className=" md:mb-0 text-1xl md:text-2xl font-bold text-[#f8f05e] text-center">
          Wajahat Kamal Shoes
        </div>

        <div className="text-center text-gray-400 text-[12px] md:text-[15px]">
          &copy; {new Date().getFullYear()} Wajahat Kamal Shoes. All rights
          reserved.
        </div>
      </div>

      <div className=" text-center">
        <a
          className="text-gray-400 md:text-lg text-center text-[14px] t"
          target="_blank"
          href="https://wk-devportfolio.vercel.app"
        >
          Explore the <span className="text-blue-500">Portfolio</span>  of the website's creator.
        </a>
        <p className="ext-[13px] md:text-[16px] font-semibold">Created in June 2025</p>
      </div>

      <div className="text-gray-400 text-center">
        <a href="#" className="text-blue-500 text-1xl ">
        View the source code of the WK Shoes Store website.
        </a>
        <h1 className="text-[12px] md:text-[15px]">
          Build with React JS and TailwindCSS.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
