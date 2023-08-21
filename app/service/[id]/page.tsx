import CasesList from '@/components/CasesList';
import NormList from '@/components/NormList';
import Navbar from '@/components/Navbar';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function ServicePage({ params }: { params: { id: string } }) {
  const data = await prisma.service_scores.findMany({
    where: {
      service_id: Number(params.id),
    },
  });

  const links_promise = await prisma.scored_links.findMany({
    where: {
      service_id: Number(params.id),
    },
  })

  const links = links_promise.map((element) => {
    return element.link;
  });

  const case_titles = [
    {"title": data[0].case0_title, "class": data[0].case0_class},
    {"title": data[0].case1_title, "class": data[0].case1_class},
    {"title": data[0].case2_title, "class": data[0].case2_class},
    {"title": data[0].case3_title, "class": data[0].case3_class},
    {"title": data[0].case4_title, "class": data[0].case4_class},
    {"title": data[0].case5_title, "class": data[0].case5_class},
    {"title": data[0].case6_title, "class": data[0].case6_class},
    {"title": data[0].case7_title, "class": data[0].case7_class},
    {"title": data[0].case8_title, "class": data[0].case8_class},
    {"title": data[0].case9_title, "class": data[0].case9_class},
    {"title": data[0].case10_title, "class": data[0].case10_class},
    {"title": data[0].case11_title, "class": data[0].case11_class},
    {"title": data[0].case12_title, "class": data[0].case12_class},
    {"title": data[0].case13_title, "class": data[0].case13_class},
    {"title": data[0].case14_title, "class": data[0].case14_class},
    {"title": data[0].case15_title, "class": data[0].case15_class},
    {"title": data[0].case16_title, "class": data[0].case16_class},
    {"title": data[0].case17_title, "class": data[0].case17_class},
    {"title": data[0].case18_title, "class": data[0].case18_class},
    {"title": data[0].case19_title, "class": data[0].case19_class},
  ]

  return (
    <html>
      <body className='bg-slate-900'>
        <Navbar />

        <div className="flex items-center justify-between w-2/3 mx-auto my-12">
          <div className='flex items-center justify-between'>
            <Link className = "labil border-2 border-slate-100 transition ease-in-out duration-300 bg-slate-100 rounded-full px-10 py-5 mx-5 hover:bg-transparent hover:text-slate-100 hover:shadow-lg hover:shadow-indigo-600" href="/">← Back to Services</Link>
            <h2 className="labil text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-100">{data[0].service_name}</h2>
          </div>
          

          <div className='grid grid-flow-col auto-cols-max'>
            <div className="labil text-lg mr-2 p-4 border border-green-400 rounded-lg items-center justify-center text-green-400">
              Character Grade <br></br> {data[0].char_score}
            </div>
            <div className="labil text-lg ml-2 p-4 border border-green-400 rounded-lg items-center justify-center text-green-400">
              Numerical Grade <br></br> {data[0].num_score}
            </div>
          </div>
        </div>

        <div className='w-3/4 mx-auto border border-slate-800 rounded-lg md:rounded-md'>
          <CasesList
            case_titles = {case_titles}
          />
        </div>

        <h1 className="labil text-3xl text-red-900 w-3/4 mx-auto my-12 animate-pulse">⚠ Cases above only represent the top 20, and do not represent the full data used to compute scores.</h1>
        
        <h3 className="w-3/4 my-2 mx-auto labil sm:text-3xl md:text-4xl lg:text-5xl text-slate-100 mb-7">Links</h3>
        <div className="w-3/4 my-2 mx-auto border border-slate-800 rounded-lg md:rounded-md mb-7">
          <NormList
            numbers = {links}
          />
        </div>
        
      </body>
    </html>
    
  )
}
