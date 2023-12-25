import Link from "next/link";
import {CircularProgress} from "@nextui-org/progress";

export default function ServiceCard(props: any) {
  const caseColorMap: { [key: string]: string; } = {
    '0': 'bg-green-600',
    '3': 'bg-gray-600',
    '4': 'bg-orange-500',
    '7': 'bg-red-500',
    '6': 'bg-green-600',
    '2': 'bg-gray-600',
    '1': 'bg-orange-500',
    '5': 'bg-red-500',
  };

  const gradeColorMap: { [key: string]: string; } = {
    'A': 'green',
    'B': 'lime',
    'C': 'yellow',
    'D': 'orange',
    'E': 'red',
  };

  const initialCategories: string[] = [
    'Data Collection',
    'Data Usage',
    'Data Security',
    'Account Control',
    'Content Control',
    'Service Operation',
    'Government',
    'Legal & Liability',
  ];

  return (
    <Link href={"/service/"+props.service_id} className="block p-6 rounded-lg border-2 border-gray-700 transition ease-in-out hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500">
      <div className="flex items-center justify-between space-x-2 mb-2">
        <div className="flex flex-row items-center space-x-2">
          <img src={`/images/service-icons/${props.service_id}.webp`} alt="Service Logo" className="h-11 my-auto rounded-md"/>
          <h2 className="py-1 text-2xl tracking-tight text-white font-bold">{props.service_name}</h2>
        </div>
        <CircularProgress
          aria-label="Loading..."
          classNames={{
            svg: "w-11 h-11 drop-shadow-md",
            indicator: "stroke-green-500",
            track: "stroke-gray-700",
            value: "text-md font-semibold text-green-500",
          }}
          formatOptions={{style: 'decimal'}}
          value={8.5}
          maxValue={10}
          strokeWidth={4}
          showValueLabel={true}
        />
      </div>
      <hr className="h-[2px] my-4 bg-gray-700 border-0"></hr>
      <div className="grid grid-cols-2 gap-2">
        {initialCategories.map((category, index) => (
          <div key={index} className={`transition ease-in-out duration-250 text-white block border border-transparent rounded-md p-2 ${caseColorMap[index]}`}>
            <div className="text-center overflow-hidden line-clamp-1">
              {category}
            </div>
          </div>
        ))}
      </div>
    </Link>
  )
}