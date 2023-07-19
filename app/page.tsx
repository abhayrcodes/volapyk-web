import Image from 'next/image';
import Card from '../components/Card.tsx';
import Navbar from '../components/Navbar.tsx';
import SearchInput from '@/components/SearchInput.tsx';

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
  const data = [
    {
      service_name: 'Facebook',
      numbers: [
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
      ],
    },
    {
      service_name: 'Amazon',
      numbers: [
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
      ],
    },
    {
      service_name: 'Google',
      numbers: [
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
      ],
    },
    {
      service_name: 'Twitter',
      numbers: [
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
        'They sell your data to other services or companies',
        'They steal your data',
      ],
    },
  ];

  const tableContent = (
    <>
      <tr>
        <td className="pr-3">
          <Card service_name={data[0].service_name} numbers={data[0].numbers} />
        </td>
        <td className="pl-3">
          <Card service_name={data[1].service_name} numbers={data[1].numbers} />
        </td>
      </tr>
      <tr>
        <td className="pr-3">
          <Card service_name={data[2].service_name} numbers={data[2].numbers} />
        </td>
        <td className="pl-3">
          <Card service_name={data[3].service_name} numbers={data[3].numbers} />
        </td>
      </tr>
    </>
  );

  const stackedContent = data.map((item, index) => (
    <tr key={index}>
      <td colSpan={2}>
        <Card service_name={item.service_name} numbers={item.numbers} />
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
