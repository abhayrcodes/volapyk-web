import Navbar from '../../../components/Navbar.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import { prisma } from '../../../prisma/client.ts';
import Link from "next/link";
import AddServiceCard from '@/components/AddServiceCard.tsx';

export default async function Search({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string };
  }) {

  const query = (typeof searchParams === "undefined") ? "" : searchParams.q;

  const data = await prisma.service_info.findMany({
    where: {
      service_name: { contains: query }
    }
  })

  async function serviceLinks(input_service_id: number) {
    const links_data = await prisma.scored_links.findMany({
      where: {
        service_id: input_service_id
      }
    });
    
    return links_data.map((element, index) => ({
      key: index,
      link: element.link
    }));
  }
  
  const stackedContent = await Promise.all(
    data.map(async (item: any, index: any) => {
      const links = await serviceLinks(item.service_id);
  
      return (
        <tr key={index}>
          <td colSpan={2}>
            <AddServiceCard 
                titleElement={
                    <div className="flex items-center justify-between text-white">
                        <h2 className="mb-2 text-2xl tracking-tight font-bold">{item.service_name}</h2>
                        <button className='h-[30px] w-[30px] bg-transparent' />
                    </div>
                }
                linksElement={links.map(({ key, link }) => (
                    <Link key={key} href={link} passHref>
                        <li className="flex justify-between transition ease-in-out p-2 px-4 my-2 border-2 hover:border-2 border-transparent rounded-lg text-gray-300 hover:scale-x-[1.025] hover:shadow-md hover:shadow-indigo-600 hover:bg-slate-800 hover:border-indigo-600">
                            <div className="overflow-hidden line-clamp-1">{link}</div>
                        </li>
                    </Link>
                ))}
                serviceName={item.service_name}
            />
          </td>
        </tr>
      );
    })
  );
        

  return (
    <html>
      <body className="bg-slate-900">
        <Navbar />
        <SearchInput />

        <div className="w-5/6 m-auto relative">
          <table className="w-full text-sm text-left">
            <tbody>
                {stackedContent}
                <tr>
                    <td colSpan={2}>
                        <AddServiceCard titleElement={
                            <div className="flex items-center justify-between text-white">
                                <input className="flex-1 mb-2 mr-6 text-2xl tracking-tight font-bold bg-transparent focus:outline-none" placeholder="Type a new service name here..."/>
                                <button className='h-[30px] w-[30px] bg-transparent' />
                            </div>
                        } linksElement={<p/>} serviceName='hello'/>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  );
}