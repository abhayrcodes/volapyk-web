import Link from "next/link";

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
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-row space-x-2">
          <img src={`/images/service-icons/${props.service_id}.webp`} alt="Service Logo" className="h-10 my-auto rounded-md"/>
          <h2 className="py-1 text-2xl tracking-tight text-white font-bold">{props.service_name}</h2>
        </div>
        <div className={`text-xl text-${gradeColorMap[props.char_score]}-500`}>
          <span className="font-bold">4.9</span><span>/10</span>
        </div>
      </div>
      <hr className="h-[2px] my-4 bg-gray-700 border-0"></hr>
      <div className="grid grid-cols-2 gap-2">
        {initialCategories.map((category, index) => (
          <div key={index} className={`transition ease-in-out duration-250 text-white block border border-transparent rounded-md p-2 ${caseColorMap[index]} hover:bg-opacity-75`}>
            <div className="text-center overflow-hidden line-clamp-1">
              {category}
            </div>
          </div>
        ))}
      </div>
    </Link>
  )
}