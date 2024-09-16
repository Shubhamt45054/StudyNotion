import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const [formData,setFormData]=useState({email:"",password:""});
    const [showPassword,setShowPassword] = useState(false);
    
    const navigate = useNavigate();

    // we change the data wrt to name ..
    function changeHandler(event) {
        setFormData(
            (prev) =>(
                {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
        ) );
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }


  return (
    <form
      onSubmit={submitHandler}
     className="flex flex-col w-full gap-y-4 mt-6"
    >
    {/* using label as htmlfor and now writing input in label tag , it ge automatically linked */}
              <label className="w-full">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                    Email Address
                    {/* using sup we get text in supscript */}
                    <sup className="text-slate-100 font-bold">*</sup>
                </p>
{/* if we put required in  input */}
                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password
                    <sup className="text-slate-100 font-bold">*</sup>
                </p>

                <input
                // switching input filed depending on showpassword = value
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                    className="text-black font-md font-semibold rounded-[0.75rem] w-full p-[12px] "
                />

                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-sky-400 max-w-max ml-auto">Forgot Password ?</p>
                </Link>
            </label>

            <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-900">Sign in</button>
    </form>
  )
}

export default LoginForm

