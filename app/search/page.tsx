import Card from '../../components/Card.tsx';
import Navbar from '../../components/Navbar.tsx';
import LoadingCard from '@/components/LoadingCard.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();

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

  const cases = await prisma.cases.findMany();
  const casesData: Record<number, [string, number]> = {};
  for (const caseItem of cases) {
    casesData[caseItem.case_id] = [caseItem.title, caseItem.classification];
  }

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
  
    for (let i = 0; i < 5 && i < service.case_ids.length; i++) {
      const case_id = service.case_ids[i];
      cardProps.numbers.push(casesData[case_id][0]);
      cardProps.colors.push(casesData[case_id][1]);
    }
  
    return cardProps;
  }

  const tableContent = [];
  for (let i = 0; i < data.length; i += 2) {
    const firstService = data[i];
    const secondService = data[i + 1];
    const serviceRows = [];
    if (firstService) {
      const firstServiceCardProps = generateCardProps(firstService);
      serviceRows.push(
        <td className='pr-3 w-1/2' key={firstService.service_id}>
          <Suspense fallback={<LoadingCard/>}>
            <Card {...firstServiceCardProps} />
          </Suspense>
        </td>
      );
    }
    if (secondService) {
      const secondServiceCardProps = generateCardProps(secondService);
      serviceRows.push(
        <td className='pl-3 w-1/2' key={secondService.service_id}>
          <Suspense fallback={<LoadingCard/>}>
            <Card {...secondServiceCardProps} />
          </Suspense>
        </td>
      );
    }
    tableContent.push(
      <tr key={i}>
        {serviceRows}
      </tr>
    );
  }

  const stackedContent = data.map((item: any, index: any) => {
    const cardProps = generateCardProps(item);
    return (
      <tr key={index}>
        <td colSpan={2}>
          <Suspense fallback={<LoadingCard />}>
            <Card {...cardProps} />
          </Suspense>
        </td>
      </tr>
    );
  });
  

  return (
    <html>
      <body className="bg-slate-900">
        <Navbar />

        <SearchInput />

        <div className="w-5/6 m-auto relative">
          <table className="w-full text-sm text-left md:hidden">
            <tbody>
              {stackedContent}
            </tbody>
          </table>

          <div className="w-full gap-4 text-sm leading-6 hidden md:grid">
            <table>
              <tbody>
                {tableContent}
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  );
}
