import CasesList from '@/components/CasesList';
import Navbar from '@/components/Navbar';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function ServicePage({ params }: { params: { id: string } }) {
  const data = await prisma.service_scores.findMany({
    where: {
      service_id: Number(params.id),
    },
  });

  console.log(typeof data);

  const case_titles = []
  for (let i = 0; i < 20; i += 1) {
    case_titles.push({
      "title": data[0]["case"+i+"_title"],
      "class": data[0]["case"+i+"_class"]
    })
  }

  return (
    <html>
      <body className='bg-slate-900'>
        <Navbar />

        <div className="flex items-center justify-between w-2/3 mx-auto my-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">{data[0].service_name}</h1>

          <div className='grid grid-flow-col auto-cols-max'>
            <div className="text-lg mr-2 p-4 border border-green-400 rounded-lg items-center justify-center text-green-400">
              Character Grade <br></br> {data[0].char_score}
            </div>
            <div className="text-lg ml-2 p-4 border border-green-400 rounded-lg items-center justify-center text-green-400">
              Numerical Grade <br></br> {data[0].num_score}
            </div>
          </div>
        </div>

        <div className='w-3/4 mx-auto my-5 border-2 rounded-lg border-indigo-600 shadow-lg shadow-indigo-600'>
          <CasesList
            case_titles = {case_titles}
          />
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-sm text-red-900 w-3/4 mx-auto my-12">* CASES ABOVE ARE ONLY TOP 20, AND DO NOT REPRESENT FULL DATA USED TO COMPUTE SCORES</h1>
        
      </body>
    </html>
    
  )
}
