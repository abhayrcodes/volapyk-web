import { prisma } from '../../prisma/client.ts';
import AllCasesPrefs from "@/components/PrefComps.tsx"

async function getCases() {
    const cases = await prisma.cases.findMany();
    return cases
}

export default async function SignUp() {

    const cases = await getCases();

    return (
        <div>
            <div className='fixed flex items-center min-h-screen'>
                <h1 id='logo-text' className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">| C0MING S00N</h1>
            </div>

            {/* <AllCasesPrefs
                cases={cases}
            />
            
            <div className="grid fixed grid-cols-3 bottom-0 w-full">
                <button type="submit" className="transition ease-in-out duration-300 labil font-semibold p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">SAVE CHANGES</button>
                <button type="submit" className="transition ease-in-out duration-300 labil font-semibold p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">REVERT TO ORIGINAL</button>
                <button type="submit" className="transition ease-in-out duration-300 labil font-semibold p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">CANCEL CHANGES</button>
            </div> */}
        </div>
    )
}