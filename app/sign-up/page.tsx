'use client'

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from 'react';

export default function SignUp() {

    return (
        <div>
            <Navbar/>

            <div className="flex w-11/12 mx-auto my-5">

                <div className="transition ease-in-out duration-200 block border-indigo-600 border-2 bg-slate-100/80 lg:rounded-lg md:rounded-md p-10 shadow-lg shadow-indigo-600 text-slate-900 w-7/12">
                    <div className="flex gap-5 mb-10">
                        <img src={'/images/logo2.svg'} className="-translate-y-3" height={50} width={50} alt="React Logo" />
                        <h1 id='logo-text' className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">volapyk</span></h1>
                    </div>


                    <div className="text-2xl text-slate-900">
                        <div className="my-10"><span className="rounded-lg border-2 border-slate-900 px-2 bg-slate-900 text-slate-100">1.</span> Access to new, <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">exclusive</span> features!</div>
                        <div className="my-10"><span className="rounded-lg border-2 border-slate-900 px-2 bg-slate-900 text-slate-100">2.</span> Be up to date on the <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">latest</span> project changes!</div>
                        <div className="my-10"><span className="rounded-lg border-2 border-slate-900 px-2 bg-slate-900 text-slate-100">3.</span> Get <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">personalized notifications</span> about the services you care about!</div>
                    </div>

                    <span className="animate-text text-2xl text-white bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">And so much more!</span>
                </div>

                <div className="ml-10 w-6/12">
                    <div className="flex row-span-1 mb-10">

                            
                            <h2 className="text-slate-100 lg:text-4xl text-bold">Create a <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">volapyk</span>account today!</h2>
                    </div>

                    <div>
                        <form>
                            <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Email</h2>
                            <input placeholder = "Email" className="transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-5 text-sm border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 border-gray-600 placeholder-gray-400 text-white mb-5 mt-2"></input>
                            <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Password</h2>
                            <input placeholder = "Password" className="transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-5 text-sm border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 border-gray-600 placeholder-gray-400 text-white mb-5 mt-2"></input>
                            <input placeholder = "Confirm password" className="transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-5 text-sm border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 border-gray-600 placeholder-gray-400 text-white mb-5 mt-2"></input>
                            <button type="submit" className="lg:rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">CREATE YOUR ACCOUNT</button>
                        </form>
                    </div>

                    <div>
                        <h4 className="text-slate-100 text-center">Already have an account? <Link href="/?login=true" className="text-indigo-400">Log in</Link></h4>
                    </div>
                </div>

            </div>
            
        </div>
    )
  }