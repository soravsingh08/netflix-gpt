import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="fixed inset-0">
        <img
        className="w-full h-full object-cover object-center scale-110 md:scale-100"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_medium.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <form className="relative backdrop-blur-xs bg-black/60 flex flex-col 
w-[90%] sm:w-[70%] md:w-[40%] lg:w-[26%] 
p-8 sm:p-10 gap-4 rounded-md">
          <h1 className="text-3xl font-[450]">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>

          {!isSignInForm && (
            <input
              className="py-3 px-2  bg-[#2c2c2c] rounded-sm"
              type="text"
              placeholder="Email or phone number"
            />
          )}
          <input
            className="py-3 px-2  bg-[#2c2c2c] rounded-sm "
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="py-3 px-2 bg-[#272727] rounded-sm"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-700 rounded py-2.5 cursor-pointer">
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="text-sm text-gray-400 mt-3">
            {isSignInForm ? "New to Netflix ?" : "Already a User ?"}{" "}
            <span
              onClick={toggleSignInForm}
              className="text-white font-[450] cursor-pointer hover:underline"
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
