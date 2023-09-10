'use client'

import Navbar from "@/components/Navbar";
import RegularInput from "@/components/RegInput";
import Link from "next/link";
import { useState } from 'react';

export default function SignUp() {

    const [slide, setSlide] = useState(0);

    function handleForward(e: any) { 
        e.preventDefault();
        setSlide(slide+1);
    }

    function handleBack(e: any) {
        e.preventDefault();
        setSlide(slide-1)
    }

    return (
      <html>
          <body className="static bg-slate-900">
              <Navbar/>

              <form className="flex h-full">
                <div className={`h-full border-2 border-indigo-600 shadow-lg shadow-indigo-600 p-10 ${slide==0 ? "w-[91%]" : "w-[3%]"}`}>
                    <div className={`${slide==0 ? "" : "hidden"} h-full`}>
                        <SignUpTab count={slide} onClick={handleForward}/>
                    </div>
                </div>

                <div className={`border-2 border-indigo-600 shadow-lg shadow-indigo-600 p-10 ${slide==1 ? "w-[91%]" : "w-[3%]"}`}>
                    <div className={`${slide==1 ? "" : "hidden"}`}>
                        <SignUpTab count={slide} onClick={handleForward}/>
                        <button className=" hidden lg:block text-center p-[15px] w-[60px] hover:-translate-x-1/4 font-bold border-2 border-slate-100 bg-slate-100 rounded-lg hover:text-slate-100 hover:bg-slate-900 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-600">
                            <span>←</span>
                        </button>
                    </div>
                </div>

                <div className={`border-2 border-indigo-600 shadow-lg shadow-indigo-600 p-10 ${slide==2 ? "w-[91%]" : "w-[3%]"}`}>
                    <div className={`${slide==2 ? "" : "hidden"}`}>
                        <SignUpTab count={slide} onClick={handleForward}/>
                    </div>
                </div>

                <div className={`border-2 border-indigo-600 shadow-lg shadow-indigo-600 p-10 ${slide==3 ? "w-[91%]" : "w-[3%]"}`}>
                    <div className={`${slide==3 ? "" : "hidden"}`}>
                        <SignUpTab count={slide} onClick={handleForward}/>
                    </div>
                </div>
              </form>
              
          </body>
      </html>
      
    )
  }
  
const SignUpTab = ({count, onClick} : any) => {
    return (
        <div className="h-full">
        <div className="row-span-1 mb-10">

        <div className=" content-center w-fit grid place-items-center mr-5 animate-bounce">
            <div className="transition duration-150 ease-in-out h-5 w-5 rounded-full bg-transparent border-2 border-slate-200 mb-1 shadow-lg shadow-indigo-600"></div>
            <div className="transition duration-150 ease-in-out h-5 w-10 bg-transparent border-2 border-slate-200 rounded-tl-full rounded-tr-full m-0 shadow-lg shadow-indigo-600"></div>
        </div>
        <h2 className="text-slate-100 lg:text-4xl" id="logo-text">Sign Up</h2>
        </div>

        <div>
        <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Username</h2>
        <RegularInput placeholder = "Username" background = "d" otheredits = "mb-5 mt-2"></RegularInput>
        <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Password</h2>
        <RegularInput placeholder = "Password" background = "d" otheredits="my-2"></RegularInput>
        <RegularInput placeholder = "Confirm Password" background = "d" otheredits="my-2"></RegularInput>
        <button onClick={onClick} className="lg:rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">BEGIN ACCOUNT SETUP</button>
        </div>

        <div>
        <h4 className="text-slate-100 text-center">Already have an account? <Link href="/?login=true" className="text-indigo-400">Log in</Link></h4>
        </div>
        </div>
    )
}
/*
<div className="transition ease-in duration-150 border-2 border-indigo-600 shadow-lg shadow-indigo-600 p-10 rounded-lg w-1/2 mx-auto my-5 bg-slate-900">
                <div className="flex row-span-1 mb-10">
                        <div className=" content-center w-fit grid place-items-center mr-5 animate-bounce">
                            <div className="transition duration-150 ease-in-out h-5 w-5 rounded-full bg-transparent border-2 border-slate-200 mb-1 shadow-lg shadow-indigo-600"></div>
                            <div className="transition duration-150 ease-in-out h-5 w-10 bg-transparent border-2 border-slate-200 rounded-tl-full rounded-tr-full m-0 shadow-lg shadow-indigo-600"></div>
                        </div>
                        <h2 className="text-slate-100 lg:text-4xl" id="logo-text">Sign Up</h2>
                </div>

                <div>
                    <form>
                        <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Username</h2>
                        <RegularInput placeholder = "Username" background = "d" otheredits = "mb-5 mt-2"></RegularInput>
                        <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Password</h2>
                        <RegularInput placeholder = "Password" background = "d" otheredits="my-2"></RegularInput>
                        <RegularInput placeholder = "Confirm Password" background = "d" ></RegularInput>
                        <button type="submit" className="lg:rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">CREATE ACCOUNT</button>
                    </form>
                </div>
              </div>
              */


/*
<form className="flex w-full">
                <div className="border-2 border-indigo-600 rounded-lg shadow-lg shadow-indigo-600 p-10">
                    <Link href="#">hi</Link>
                </div>
                <div className="border-2 border-indigo-600 rounded-lg shadow-lg shadow-indigo-600 p-10">
                    <Link href="#">hi</Link>
                </div>
                <div className="border-2 border-indigo-600 rounded-lg shadow-lg shadow-indigo-600 p-10">
                    <Link href="#">hi</Link>
                </div>
                <div className="border-2 border-indigo-600 rounded-lg shadow-lg shadow-indigo-600 p-10">
                    <Link href="#">hi</Link>
                </div>
              </form>
              */