import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      function changeHandler(event) {
        setFormData(
            (prev) =>(
                {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
        ) );
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Password Are Not MAtching");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created")
        navigate("/dashboard")

    }

      
  return (
    <div>
    {/* creating two buttons student and instructor  */}
           <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-slate-600 text-white"
              : "bg-transparent text-slate-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-slate-600 text-white"
              : "bg-transparent text-slate-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

    <form onSubmit={submitHandler} 
    className="flex flex-col w-full gap-y-4 mt-6"
    >

    {/* sup is superscript ...  , below create input files of name */}
    <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p 
            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
            >
              First Name 
              <sup className="text-slate-100 font-bold">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "

            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name  
              <sup className="text-slate-100 font-bold">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "


            />
          </label>
        </div>

{/* email address */}
        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-slate-100 font-bold">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "
            name="email"
          />
        </label>

        {/* create password and confirm pasword , also using show password */}
        <div className="flex gap-x-4">
        {/* create password */}
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-slate-100 font-bold">*</sup>
            </p>

            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "

            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              { showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

                {/* confirm password */}
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-slate-100 font-bold">*</sup>
            </p>

            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "

            />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
            {/* depending on show password , we select which eye to show... */}
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-900">
          Create Account
        </button>


    </form>

    </div>
  )
}

export default SignupForm
