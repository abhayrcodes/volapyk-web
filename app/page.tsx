import Card from '../components/Card.tsx';
import Navbar from '../components/Navbar.tsx';
import LoadingCard from '@/components/LoadingCard.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import { Suspense } from 'react';

const prisma = new PrismaClient();

export default async function Home() {
  const data = await prisma.service_scores.findMany()

  const tableContent = [];
  for (let i = 0; i < data.length; i += 2) {
    const firstService = data[i];
    const secondService = data[i + 1];

    tableContent.push(
      <tr key={i}>
        <td className='pr-3 w-1/2'>
          {firstService && (
            <Suspense fallback={<LoadingCard/>}>
              <Card
              service_id = {firstService.service_id}
              service_name={firstService.service_name}
              char_score={firstService.char_score}
              numbers={[
                firstService.case0_title,
                firstService.case1_title,
                firstService.case2_title,
                firstService.case3_title,
                firstService.case4_title,
              ]}
              colors={[
                firstService.case0_class,
                firstService.case1_class,
                firstService.case2_class,
                firstService.case3_class,
                firstService.case4_class,
              ]}
            />
            </Suspense>
            
          )}
        </td>
        <td className='pl-3 w-1/2'>
          {secondService && (
            <Suspense fallback={<LoadingCard/>}>
              <Card
            service_id = {secondService.service_id}
              service_name={secondService.service_name}
              char_score={secondService.char_score}
              numbers={[
                secondService.case0_title,
                secondService.case1_title,
                secondService.case2_title,
                secondService.case3_title,
                secondService.case4_title, 
              ]}
              colors={[
                secondService.case0_class,
                secondService.case1_class,
                secondService.case2_class,
                secondService.case3_class,
                secondService.case4_class,
              ]}
            />
            </Suspense>
            
          )}
        </td>
      </tr>
    );
  }


  const stackedContent = data.map((item: any, index: any) => (
    <tr key={index}>
      <td colSpan={2}>
        <Suspense fallback={<LoadingCard />}>
          <Card service_id = {item.service_id} service_name={item.service_name} char_score={item.char_score} 
          numbers={[item.case0_title, item.case1_title, item.case2_title, item.case3_title, item.case4_title]}
          colors={[item.case0_class, item.case1_class, item.case2_class, item.case3_class, item.case4_class]} />
        </Suspense>
        
      </td>
    </tr>
  ));

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
