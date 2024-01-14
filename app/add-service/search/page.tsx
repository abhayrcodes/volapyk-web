import SearchInput from '@/components/SearchInput.tsx';
import { prisma } from '../../../prisma/client.ts';
import Link from "next/link";
import AddServiceCard from '@/components/Card-AddService.tsx';
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

export default async function Search({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string };
  }) {

  const query = (typeof searchParams === "undefined") ? "" : searchParams.q;

  const data = await prisma.services.findMany({
    where: {
      name: { contains: query, mode: 'insensitive' }
    }
  })

  const session = await getServerSession();
  if (!session) {
    redirect('/?login=true')
  }

  async function serviceLinks(input_name: string) {
    const links_data = await prisma.approved_links.findMany({
      where: {
        service_name: input_name,
      }
    });
    
    return links_data.map((element, index) => ({
      key: index,
      link: element.link
    }));
  }
  
  const stackedContent = await Promise.all(
    data.map(async (item: any, index: any) => {
      const links = await serviceLinks(item.name);
  
      return (
        <tr key={index}>
          <td colSpan={2}>
            <AddServiceCard 
                titleElement={
                    <div className="flex items-center w-full pr-6 text-white">
                        <h2 className="mb-2 text-2xl tracking-tight font-bold">{item.name}</h2>
                    </div>
                }
                linksElement={links.map(({ key, link }) => (
                    <Link key={key} href={link} passHref>
                        <li className="flex justify-between transition ease-in-out p-2 px-4 my-2 border-2 hover:border-2 border-transparent rounded-lg text-gray-300 hover:scale-x-[1.025] hover:shadow-md hover:shadow-indigo-600 hover:bg-slate-800 hover:border-indigo-600">
                            <div className="overflow-hidden line-clamp-1 break-all">{link}</div>
                        </li>
                    </Link>
                ))}
                inputServiceName={item.name}
            />
          </td>
        </tr>
      );
    })
  );
        

  return (
    <div>
      <SearchInput />

      <div className="w-5/6 m-auto relative">
        <table className="w-full text-sm text-left">
          <tbody>
              {stackedContent}
              <tr>
                  <td colSpan={2}>
                      <AddServiceCard titleElement={<p/>} linksElement={<p/>} inputServiceName=''/>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}