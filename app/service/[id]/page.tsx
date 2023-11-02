import CasesList from '@/components/List-Cases.tsx';
import LinksList from '@/components/List-Links.tsx';
import Navbar from '@/components/Navbar';
import { prisma } from '../../../prisma/client.ts';
import Link from 'next/link';

export default async function ServicePage({ params }: { params: { id: string } }) {
  const data = await prisma.service_info.findMany({
    where: {
      service_id: Number(params.id),
    },
  });

  const links_promise = await prisma.scored_links.findMany({
    where: {
      service_id: Number(params.id),
    },
  });
  const links = links_promise.map((element) => {
    return element.link;
  });

  const cases = await prisma.cases.findMany();
  const casesData: Record<number, [string, number]> = {};
  for (const caseItem of cases) {
    casesData[caseItem.case_id] = [caseItem.title, caseItem.classification];
  }

  const case_titles = []
  for (const case_id of data[0].case_ids) {
    const [title, classification] = casesData[case_id];
    let classname = ''; // Initialize classname variable
    if (classification === 10) {
      classname = 'good';
    } else if (classification === 0) {
      classname = 'neutral';
    } else if (classification === -10) {
      classname = 'bad';
    } else if (classification === -30) {
      classname = 'blocker';
    }
    case_titles.push({ 'title': title, 'class': classname });
  }

  const gradeColorMap: { [key: string]: string; } = {
    'A': 'border-green-500 text-green-500',
    'B': 'border-lime-500 text-lime-500',
    'C': 'border-yellow-500 text-yellow-500',
    'D': 'border-orange-500 text-orange-500',
    'E': 'border-red-500 text-red-500',
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-center mt-12 mb-5">
        <Link className="hidden lg:block absolute text-right p-[15px] w-[150px] -translate-x-2/3 hover:-translate-x-1/3 font-bold border-2 border-slate-100 bg-slate-100 rounded-lg hover:text-slate-100 hover:bg-slate-900 transition ease-in-out duration-300 hover:shadow-lg hover:shadow-indigo-600 hover:after:content-['Back']" href="/">
          <span>←  </span>
        </Link>
    
        <div className="flex-col lg:flex-row flex items-center lg:justify-between w-3/4 lg:w-2/3 mx-auto">
          <div className='flex items-center justify-between lg:m-0 mb-5'>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-100 font-bold">{data[0].service_name}</h2>
          </div>
          <div className='grid grid-flow-col auto-cols-max text-sm sm:text-base lg:text-lg'>
            <div className={`mr-2 p-4 border rounded-lg items-center justify-center ${gradeColorMap[data[0].char_score]}`}>
              Character Grade <br></br> {data[0].char_score}
            </div>
            <div className={`ml-2 p-4 border rounded-lg items-center justify-center ${gradeColorMap[data[0].char_score]}`}>
              Numerical Grade <br></br> {String(data[0].num_score)}
            </div>
          </div>
        </div>
      </div>

      <div className='w-3/4 mx-auto border-2 border-slate-800 lg:pt-2 rounded-lg'>
        <CasesList
          case_titles = {case_titles}
        />
      </div>

      
      <h3 className="w-3/4 mt-10 mb-5 text-center font-bold mx-auto text-2xl sm:text-3xl md:text-4xl text-slate-100">Sources</h3>
      <div className="w-3/4 mx-auto border border-slate-800 rounded-lg md:rounded-md mb-7">
        <LinksList
          numbers = {links}
        />
      </div>
      
    </div>  
  )
}

// <h1 className="text-lg sm:text-2xl lg:text-3xl text-red-900 w-3/4 mx-auto my-12 animate-pulse">⚠ Cases above only represent the top 20, not the full data used to compute scores.</h1>