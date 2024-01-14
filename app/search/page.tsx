import ServiceCard from '../../components/Card-Service.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import React from 'react';
import { prisma } from '../../prisma/client.ts';

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
        <ServiceCard {...cardProps} />
      </div>
    );
  });
  

  return (
    <div>
      <div className="pointer-events-none text-center mt-20">
        <h1 id='logo-text' className="mb-4 text-5xl font-extrabold text-white md:text-8xl lg:text-9xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">volapyk</span></h1>
        <p className="text-md md:text-lg font-sans font-normal text-gray-400 lg:text-2xl">Keeping you safe, <span className="underline decoration-purple-600">one sentence at a time.</span></p>
      </div>

      <SearchInput />

      <div className="grid lg:grid-cols-2 w-5/6 mx-auto gap-6">
        {serviceCards}
      </div>
    </div>
  );
}
