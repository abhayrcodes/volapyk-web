import Link from "next/link";

export default function Card(props: any) {
  const numbers = props.numbers;

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

  const listItems = numbers && numbers.map((number: any, index: any) => {
    const listItemStyle = {
      backgroundColor: caseColorMap[props.colors?.[index % (props.colors.length || 1)]] || 'bg-gray-400', // Use 'bg-gray-400' as default color if not found in colorMap
    };

    return (
      <li key={index} className={`relative transition ease-in-out duration-250 text-white block border border-transparent rounded-lg p-2 my-1 ${listItemStyle.backgroundColor}`}>
        <div className="overflow-hidden line-clamp-1">
          {number}
        </div>
      </li>
    );
  });

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
    <Link href={"/service/"+props.service_id} className="block mb-6 p-6 rounded-lg border-2 border-gray-700 transition ease-in-out hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-row space-x-2">
          <img src={`/images/service-icons/${props.service_id}.png`} alt="Service Logo" className="h-9"/>
          <h2 className="py-1 text-2xl tracking-tight text-white font-bold">{props.service_name}</h2>
        </div>
        <div className={`text-xl text-${gradeColorMap[props.char_score]}-500`}>
          <span className="font-bold">4.9</span><span>/10</span>
        </div>
      </div>
      <hr className="h-[2px] my-4 bg-gray-700 border-0"></hr>
      <div className="grid grid-cols-2 gap-2">
        {initialCategories.map((category, index) => (
          <div key={index} className={`relative transition ease-in-out duration-250 text-white block border border-transparent rounded-lg p-2 ${caseColorMap[index]} hover:bg-opacity-75`}>
            <div className="text-center overflow-hidden line-clamp-1">
              {category}
            </div>
          </div>
        ))}
      </div>
    </Link>
  )
}