'use client'

import Link from "next/link";
import { signIn } from "next-auth/react"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpModal(props:any) {
    const hidden = props.hidden || "";
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
      
    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const result = (await signIn('Credentials-Sign-Up', {
            redirect: false,
            email: email,
            password: password,
        })) ?? { error: null };

        if (result.error === 'CredentialsSignin') {
            setError(true);
        } else {
            router.push('/')
        }
    };

    return (
        <div className={`${hidden ? "hidden" : ""} w-full h-full bg-slate-900/80 fixed inset-0`}>

          <div className="flex flex-col lg:h-fit lg:w-1/2 lg:m-auto m-5 fixed inset-0 transition ease-in duration-150 border-2 border-indigo-600 hover:shadow-lg hover:shadow-indigo-600 p-10 rounded-lg bg-slate-900">
            <Link className="hidden lg:block text-center p-[15px] w-[60px] hover:tra hover:-translate-x-1/4 font-bold border-2 border-slate-100 bg-slate-100 rounded-lg hover:text-slate-100 hover:bg-slate-900 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-600" href="/">
                <span>←</span>
            </Link>
        
            <div className="flex row-span-1 mb-10  justify-center">

                    <div className=" content-center w-fit grid place-items-center mr-5 animate-bounce">
                        <div className="transition duration-150 ease-in-out h-5 w-5 rounded-full bg-transparent border-2 border-slate-200 mb-1 shadow-lg shadow-indigo-600"></div>
                        <div className="transition duration-150 ease-in-out h-5 w-10 bg-transparent border-2 border-slate-200 rounded-tl-full rounded-tr-full m-0 shadow-lg shadow-indigo-600"></div>
                    </div>
                    <h2 className="text-slate-100 lg:text-4xl" id="logo-text">Sign Up</h2>
            </div>

            {error && (
                <div className="bg-red-500 text-white text-center p-2 rounded-md my-2">
                    Login failed. Check the details you provided are correct.
                </div>
            )}

            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Email</h2>
                    <input name='email' autoComplete='email' placeholder = "Email" value={email} onChange={(e) => setEmail(e.target.value)} className="transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-5 text-sm border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 border-gray-600 placeholder-gray-400 text-white mb-5 mt-2"></input>
                    <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Password</h2>
                    <input name='password' autoComplete='current-password' placeholder = "Password" value={password} onChange={(e) => setPassword(e.target.value)} className="transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-5 text-sm border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 border-gray-600 placeholder-gray-400 text-white mb-5 mt-2"></input>
                    <button type="submit" className="rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">CREATE ACCOUNT</button>
                </form>
            </div>

            <div>
                <h4 className="text-slate-100 text-center">Already have an account? <Link href="/?login=true" className="text-indigo-400">Login</Link></h4>
            </div>

            <div className="relative h-full">
                <Link className="absolute lg:hidden block text-center bottom-0 w-full p-[16px] hover:tra font-bold border-2 border-slate-100 bg-slate-100 rounded-lg hover:text-slate-100 hover:bg-slate-900 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-600" href="/">
                    <span>←</span>
                </Link>
            </div>
          </div>
        </div>
    )
}