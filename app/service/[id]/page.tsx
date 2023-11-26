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

  return (
    <main className='w-3/4 mx-auto'>
      <header className='flex flex-col my-10 text-center space-y-5 lg:flex-row lg:space-x-20'>
        <div className='flex flex-col items-center space-x-4 space-y-5 lg:flex-row lg:w-4/5 lg:text-left'>
          <img src={`/images/service-icons/${data[0].service_id}.png`} alt="Service Logo" className="h-14 w-fit"/>
          <h2 className="text-6xl text-slate-100 font-bold">{data[0].service_name}</h2>
        </div>
        <div className='w-full text-5xl lg:w-1/5 lg:text-right'>
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
