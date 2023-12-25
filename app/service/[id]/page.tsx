import LinksList from '@/components/List-Links.tsx';
import { prisma } from '../../../prisma/client.ts';
import CategoryList from '@/components/List-Categories.tsx'
import {CircularProgress} from "@nextui-org/progress";

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

  return (
    <main className='w-3/4 mx-auto'>
      <header className='flex flex-col justify-between my-10 gap-y-5 lg:flex-row lg:gap-y-0'>
        <div className='flex flex-col items-center lg:space-x-4 gap-y-5 lg:flex-row lg:text-left'>
          <img src={`/images/service-icons/${data[0].service_id}.webp`} alt="Service Logo" className="h-16 w-fit rounded-md"/>
          <h2 className="text-4xl lg:text-6xl text-slate-100 font-bold">{data[0].service_name}</h2>
        </div>
        <CircularProgress
          aria-label="Loading..."
          classNames={{
            svg: "w-16 h-16 drop-shadow-md",
            indicator: "stroke-red-500",
            track: "stroke-gray-700",
            value: "text-xl font-semibold text-red-500",
          }}
          formatOptions={{style: 'decimal'}}
          maxValue={10}
          value={4.9}
          strokeWidth={4}
          showValueLabel={true}
        />
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
