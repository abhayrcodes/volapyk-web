import ServiceCard from '../components/Card-Service.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import LoginModal from '@/components/Modal-Login.tsx';
import SignUpModal from '@/components/Modal-SignUp.tsx';
import { prisma } from '../prisma/client.ts';

export default async function Home({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string };
}) {
  const login = (typeof searchParams === "undefined") ? true : (searchParams.login==="true" ? false : true);
  const signup = (typeof searchParams === "undefined") ? true : (searchParams.signup==="true" ? false : true);

  const data = await prisma.services.findMany({
    take: 99,
    orderBy: {
      id: 'asc'
    },
    select: {
      id: true,
      name: true,
      aliases: true,
      score: true,
      cat_scores: true,
    }
  })

  interface Service {
    id: number;
    name: string;
    aliases: string[];
    score: number;
    cat_scores: number[];
  }

  function generateCardProps(service: Service) {
    const cardProps: {
      id: number;
      name: string;
      aliases: string[];
      score: number;
      cat_scores: number[]; // Adjust the type if needed
    } = {
      id: service.id,
      name: service.name,
      aliases: service.aliases,
      score: service.score,
      cat_scores: service.cat_scores,
    };
    return cardProps;
  }

  const serviceCards = data.map((item: Service, index: number) => {
    const cardProps = generateCardProps(item);
    return (
      <div key={index}>
        <ServiceCard {...cardProps}/>
      </div>
    );
  });

  return (
    <main>
      <div className="mt-5 gap-3 mx-auto text-sm transition ease-in-out duration-1500 text-indigo-500 border-2 border-indigo-500 bg-indigo-600/10 rounded-full w-80 py-3 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-400 hover:bg-indigo-600/15 hover:shadow-lg hover:shadow-indigo-600/50">
        <h3 className='text-center'> Congressional App Challenge <br></br> 2023 Winner </h3>
        <h3 className=' text-4xl'>🎉</h3>
      </div>

      <div className="pointer-events-none text-center mt-20">
        <h1 id='logo-text' className="mb-4 text-5xl font-extrabold text-white md:text-8xl lg:text-9xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">volapyk</span></h1>
        <p className="text-md md:text-lg font-sans font-normal text-gray-400 lg:text-2xl">Keeping you safe, <span className="underline decoration-indigo-600">one sentence at a time.</span></p>
      </div>

      <SearchInput />

      <div className="grid lg:grid-cols-2 w-5/6 mx-auto gap-6 mb-6">
        {serviceCards}
      </div>

      <LoginModal hidden={login} />
      <SignUpModal hidden={signup} />
    </main>
  );
}
