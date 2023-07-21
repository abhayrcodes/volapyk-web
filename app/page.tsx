'use client'

import Image from 'next/image';
import Card from '../components/Card.tsx';
import Navbar from '../components/Navbar.tsx';
import SearchInput from '@/components/SearchInput.tsx';
import React, { useState, useEffect } from 'react';

function Logo() {
  return (
    <Image
      src="/images/logo.svg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
}

export default function Home() {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    // Define the URL of your API route
    const apiUrl = '/api/database?q=SELECT * FROM service_scores'

    // Fetch JSON data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const tableContent = [];
  for (let i = 0; i < data.length; i += 2) {
    const firstService = data[i];
    const secondService = data[i + 1];

    tableContent.push(
      <tr key={i}>
        <td className='pr-3'>
          {firstService && (
            <Card
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
          )}
        </td>
        <td className='pl-3'>
          {secondService && (
            <Card
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
          )}
        </td>
      </tr>
    );
  }


  const stackedContent = data.map((item, index) => (
    <tr key={index}>
      <td colSpan={2}>
        <Card service_name={item.service_name} char_score={item.char_score} 
          numbers={[item.case0_title, item.case1_title, item.case2_title, item.case3_title, item.case4_title]}
          colors={[item.case0_class, item.case1_class, item.case2_class, item.case3_class, item.case4_class]} />
      </td>
    </tr>
  ));

  return (
    <html>
      <body className="bg-slate-900">
        <Navbar />

        <SearchInput />

        <div className="w-5/6 m-auto relative">
          {/* Use media query to conditionally render the projects in a grid layout on larger screens */}
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 md:hidden">
            <tbody>
              {stackedContent}
            </tbody>
          </table>

          {/* Use media query to conditionally render the projects in a stacked layout on smaller screens */}
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
