import ServiceCard from '../components/Card-Service.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import LoginModal from '@/components/Modal-Login.tsx';
import SignUpModal from '@/components/Modal-SignUp.tsx';
import React from 'react';
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

  const cases = await prisma.cases.findMany();
  const casesData: Record<number, [string, number]> = {};
  for (const caseItem of cases) {
    casesData[caseItem.case_id] = [caseItem.title, caseItem.classification];
  }
  const data = await prisma.service_info.findMany()

  interface Service {
    service_id: number;
    service_name: string;
    num_score: number;
    char_score: string;
    case_ids: number[];
    // Add other properties as needed
  }

  function generateCardProps(service: Service) {
    const cardProps: {
      service_id: number;
      service_name: string;
      char_score: string;
      numbers: string[]; // Adjust the type if needed
      colors: number[];  // Adjust the type if needed
    } = {
      service_id: service.service_id,
      service_name: service.service_name,
      char_score: service.char_score,
      numbers: [],
      colors: [],
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
    <div>

      <div className="mt-5 gap-3 mx-auto text-sm transition ease-in-out duration-1500 text-indigo-500 border-2 border-indigo-500 bg-indigo-600/10 rounded-full w-80 py-3 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-400 hover:bg-indigo-600/15 hover:shadow-lg hover:shadow-indigo-600/50">
        <h3 className='text-center'> Congressional App Challenge <br></br> 2023 Winner </h3>
        <h3 className=' text-4xl'>🎉</h3>
      </div>

      <div className="pointer-events-none text-center mt-20">
        <h1 id='logo-text' className="mb-4 text-5xl font-extrabold text-white md:text-8xl lg:text-9xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">volapyk</span></h1>
        <p className="text-md md:text-lg font-sans font-normal text-gray-400 lg:text-2xl">Keeping you safe, <span className="underline decoration-purple-600">one sentence at a time.</span></p>
      </div>

      <SearchInput />

      <div className="grid lg:grid-cols-2 w-5/6 mx-auto gap-6 mb-6">
        {serviceCards}
      </div>

      <LoginModal hidden={login} />
      <SignUpModal hidden={signup} />
    </div>
  );
}
