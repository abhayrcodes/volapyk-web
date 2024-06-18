import LinksList from '@/components/List-Links.tsx';
import { prisma } from '../../../prisma/client.ts';
import CategoryList from '@/components/List-Categories.tsx'
import {CircularProgress} from "@nextui-org/progress";

export default async function ServicePage({ params }: { params: { id: string } }) {
  const data = await prisma.services.findMany({
    where: {
      id: Number(params.id),
    },
  });

  let strokeColor: string = "";
  let textColor: string = "";
  if (data[0].score >= 7) {
    strokeColor = "stroke-green-500"
    textColor = "text-xl font-semibold text-green-500"
  } else if (data[0].score >= 6) {
    strokeColor = "stroke-orange-500"
    textColor = "text-xl font-semibold text-orange-500"
  } else {
    strokeColor = "stroke-red-500"
    textColor = "text-xl font-semibold text-red-500"
  }

  const cases = await prisma.cases.findMany();

  const links_promise = await prisma.approved_links.findMany({
    where: {
      service_name: data[0].name,
    },
  });
  const links = links_promise.map((element) => {
    return element.link;
  });

  const caseMap: string[][] = [
    [], [], [], [], [], [], [], [],
  ];

  data[0].cat_scores.forEach((cat_score, index) => {
    caseMap[index].push(String(cat_score));
  });

  data[0].case_ids.forEach((case_id) => {
    const cat = Number(cases[case_id].category_id);
    caseMap[cat].push(String(cases[case_id].title));
    caseMap[cat].push(String(cases[case_id].score));
  });

  return (
    <main className='w-3/4 mx-auto'>
      <header className='flex flex-col justify-between my-10 gap-y-5 lg:flex-row lg:gap-y-0'>
        <div className='flex flex-col items-center lg:space-x-4 gap-y-5 lg:flex-row lg:text-left'>
          <img src={`/images/service-icons/${data[0].name}.webp`} alt="Service Logo" className="h-16 w-fit rounded-md"/>
          <h2 className="text-4xl lg:text-6xl text-slate-100 font-bold">{data[0].name}</h2>
        </div>
        <CircularProgress
          aria-label="Loading..."
          classNames={{
            svg: "w-16 h-16 drop-shadow-md",
            indicator: strokeColor,
            track: "stroke-gray-700",
            value: textColor,
          }}
          formatOptions={{style: 'decimal'}}
          maxValue={10}
          value={data[0].score}
          strokeWidth={4}
          showValueLabel={true}
        />
      </header>
      <div className='flex flex-col mx-auto'>
        <section className='w-full'>
          <CategoryList case_map = {caseMap}/>
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
