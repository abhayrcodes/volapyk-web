import CasesList from '@/components/List-Cases.tsx';
import LinksList from '@/components/List-Links.tsx';
import { prisma } from '../../../prisma/client.ts';
import CategoryList from '@/components/List-Categories.tsx'

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
    <main className='w-3/4 mx-auto'>
      <header className='flex flex-col lg:flex-row lg:space-x-20 my-10'>
        <div className='w-full lg:w-4/5'>
          <h2 className="text-6xl text-slate-100 font-bold">{data[0].service_name}</h2>
        </div>
        <div className='w-full lg:w-1/5 text-right text-5xl'>
          <span className='font-bold text-red-500'>4.9</span><span className='text-red-700'>/10</span>
        </div>
      </header>
      <div className='flex flex-col mx-auto'>
        <section className='w-full'>
          <CategoryList/>
        </section>
        <section className='w-full'>
          <h3 className="mt-10 mb-5 text-center font-bold mx-auto text-4xl text-slate-100">Sources</h3>
          <div className="mx-auto border-2 border-slate-800 rounded-md mb-7">
            <LinksList numbers = {links}/>
          </div>
        </section>
      </div>
    </main>  
  )
}
