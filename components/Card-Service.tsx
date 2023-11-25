import Link from "next/link";

export default function Card(props: any) {
  const numbers = props.numbers;

  const caseColorMap: { [key: string]: string; } = {
    '10': 'bg-green-600 hover:bg-opacity-75',
    '0': 'bg-gray-600 hover:bg-opacity-75',
    '-10': 'bg-orange-500 hover:bg-opacity-75',
    '-30': 'bg-red-500 hover:bg-opacity-75',
  };

  const gradeColorMap: { [key: string]: string; } = {
    'A': 'border-green-500 text-green-500',
    'B': 'border-lime-500 text-lime-500',
    'C': 'border-yellow-500 text-yellow-500',
    'D': 'border-orange-500 text-orange-500',
    'E': 'border-red-500 text-red-500',
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

  return (
    <Link href={"/service/"+props.service_id} className="border-2 group transition hover:bg-slate-800 ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg shadow bg-slate-900 border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <h2 className="py-1 text-2xl tracking-tight text-white font-bold">{props.service_name}</h2>
        <div className={`h-fit my-auto py-1 px-2 border rounded-lg items-center justify-center inline-flex ${gradeColorMap[props.char_score]}`}>
          Grade {props.char_score}
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-700 border-0"></hr>
      <div className="h-56 space-y-1 list-none list-inside">
        <ul>
          {listItems}
        </ul>
      </div>
    </Link>
  )
}