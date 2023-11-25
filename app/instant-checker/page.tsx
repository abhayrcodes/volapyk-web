import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

export default async function InstantChecker() {
  const session = await getServerSession();
  if (!session) {
    redirect('/?login=true')
  }

  return (
    <div>
        <div className='fixed flex items-center min-h-screen'>
            <h1 id='logo-text' className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">| C0MING S00N</h1>
        </div>
    </div>    
  )
}
