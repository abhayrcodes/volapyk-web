import RegularInput from "./RegInput"
import Link from "next/link";

export default function LoginModal(props:any) {
    const hidden = props.hidden || "";
    return (
        <div className={`${hidden ? "hidden" : ""} w-full h-full bg-slate-900/80 fixed inset-0`}>

          <div className=" h-fit my-auto fixed inset-0 transition ease-in duration-150 border-2 border-indigo-600 hover:shadow-lg hover:shadow-indigo-600 p-10 rounded-lg w-1/2 mx-auto bg-slate-900">
            <Link className=" hidden lg:block text-right p-[15px] w-[150px] -translate-x-2/3 hover:-translate-x-1/3 font-bold border-2 border-slate-100 bg-slate-100 rounded-lg hover:text-slate-100 hover:bg-slate-900 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-600 hover:after:content-['Back']" href="/">
                <span>←  </span>
            </Link>
        
            <div className="flex row-span-1 mb-10 left-1/2  transform translate-x-1/4">

                    <div className=" content-center w-fit grid place-items-center mr-5 animate-bounce">
                        <div className="transition duration-150 ease-in-out h-5 w-5 rounded-full bg-transparent border-2 border-slate-200 mb-1 shadow-lg shadow-indigo-600"></div>
                        <div className="transition duration-150 ease-in-out h-5 w-10 bg-transparent border-2 border-slate-200 rounded-tl-full rounded-tr-full m-0 shadow-lg shadow-indigo-600"></div>
                    </div>
                    <h2 className="text-slate-100 lg:text-4xl" id="logo-text">Login</h2>
            </div>

            <div>
                <form>
                    <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Username</h2>
                    <RegularInput placeholder = "Username" background = "d" otheredits = "mb-5 mt-2"></RegularInput>
                    <h2 className="labil text-slate-100 lg:text-2xl font-semibold">Password</h2>
                    <RegularInput placeholder = "Password" background = "d" otheredits="my-2"></RegularInput>
                    <button type="submit" className="lg:rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">LOGIN</button>
                </form>
            </div>

            <div>
                <h4 className="text-slate-100 text-center">Don't have an account? <Link href="/sign-up" className="text-indigo-400">Sign in</Link></h4>
            </div>
          </div>
        </div>
    )
}