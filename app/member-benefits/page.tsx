import Navbar from "@/components/Navbar";

export default function MemberBenefits() {

    return (
        <div>
            <Navbar/>

            <div className="flex w-11/12 mx-auto my-5">

                <div className="transition ease-in-out duration-200 block border-indigo-600 bg-slate-900 border-2 lg:rounded-lg md:rounded-md p-10 shadow-lg shadow-indigo-600 text-slate-900 w-full">
                    <div className="flex gap-5 mb-10">
                        <img src={'/images/logo2.svg'} className="-translate-y-3" height={50} width={50} alt="React Logo" />
                        <h1 id='logo-text' className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">Sign Up</span></h1>
                    </div>


                    <div className="text-2xl text-slate-900">
                        <div className="my-10"><span className="rounded-lg border-2 border-slate-100 px-2 bg-slate-900 text-slate-100">1.</span> Access to new, <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">exclusive</span> features!</div>
                        <div className="my-10"><span className="rounded-lg border-2 border-slate-100 px-2 bg-slate-900 text-slate-100">2.</span> Be up to date on the <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">latest</span> project changes!</div>
                        <div className="my-10 text-white"><span className="text-slate-100">3.</span> Get <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">personalized notifications</span> about the services you care about!</div>
                    </div>

                    <span className="animate-text text-2xl text-white bg-gradient-to-r to-purple-600 from-indigo-600 px-5 py-2 rounded-lg">And so much more!</span>
                </div>
            </div>           
        </div>
    )
  }