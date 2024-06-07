import React from "react";

function Description() {
  return (
    <>
      <div className="mt-6">
        <p className="title text-center leading-6 text-[22px] text-[#1F314F] font-bold">
          Improve your front-end skills by building projects
        </p>
        <p className="title mx-2 text-[#7D889E] text-center text-[15px] mt-4 font-normal tracking-[0.19px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
        <div className="flex text-[8px] mt-3 w-full text-slate-700 justify-center text-center">
          Challenge by <a className=" font-semibold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by<a className="font-semibold" href="https://github.com/Yopax/01.FrontendMentor-QR"> Barreto Rodriguez Darli</a>.
        </div>
      </div>
    </>
  );
}

export default Description;
