import Image from 'next/image';
import CasesList from '@/components/CasesList';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { headers } from 'next/dist/client/components/headers';

const fetchCasesAndLinks = async (url: string) => {
  const res = await fetch(url);
  return res.json();
}

export default async function ServicePage({ params }: { params: { slug: string } }) {

  const host = headers().get("host") || "";

  const query = params.slug;
  const serviceData = fetchCasesAndLinks("http://"+host+"/api/service-query?q="+query);
  const [data] = await Promise.all([serviceData]);

  return (
    <html>
      <body className='bg-slate-900'>
        <Navbar />
        <div><Link href = "/">Services</Link></div>

        <div className="flex items-center justify-between w-2/3 mx-auto my-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">{data.name}</h1>

          <div className='grid grid-flow-col auto-cols-max'>
            <div className="text-lg mr-2 p-4 border border-green-400 rounded-lg items-center justify-center text-green-400">
              Character Grade <br></br> {data.char_score}
            </div>
            <div className="text-lg ml-2 p-4 border border-green-400 rounded-lg items-center justify-center text-green-400">
              Numerical Grade <br></br> {data.num_score}
            </div>
          </div>
        </div>

        <div className='w-3/4 mx-auto my-5 border-2 rounded-lg border-indigo-600 shadow-lg shadow-indigo-600'>
          <CasesList
            case_titles = {data.case_titles}
          />
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-sm text-red-900 w-3/4 mx-auto my-12">* CASES ABOVE ARE ONLY TOP 20, AND DO NOT REPRESENT FULL DATA USED TO COMPUTE SCORES</h1>
        
      </body>
    </html>
    
  )
}
