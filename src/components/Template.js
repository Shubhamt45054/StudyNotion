import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

// we taking title, descrpiton 1 and 2 , and put image AT RIGHT , then check which type of form .... then check if logged in
const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex w-9/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-0 text-white">
        <h1 className=" font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-white">{desc1}</span>
          <br/>
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

{/* we checking which form to render ... */}
        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}


      {/* Everthing left after login / SIgn up forms present here.. */}
        <div className="flex w-full items-center my-4 gap-x-2">
        {/* just a line */}
          <div className="h-[1px] w-full bg-slate-300"></div>
          {/* OR */}
          <p className="text-white font-medium leading-[1.375rem]">OR</p>
            {/* then again line */}
          <div className="h-[1px] w-full  bg-slate-300"></div>
        </div>

{/* button with google icon from react icons... */}
        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-slate-100 border-slate-400 border px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

{/* placing the image and its background  */}
      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
        // dpending on he image which we get ...
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
