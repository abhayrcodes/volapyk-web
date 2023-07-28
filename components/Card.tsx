import Link from "next/link";

export default function Card(props: any) {
  const numbers = props.numbers;

  const colorMap: { [key: string]: string } = {
    good: 'bg-green-600 hover:bg-opacity-75',
    neutral: 'bg-gray-600 hover:bg-opacity-75',
    bad: 'bg-orange-500 hover:bg-opacity-75',
    blocker: 'bg-red-500 hover:bg-opacity-75'
    // Add more mappings as needed
  };

  const listItems = numbers && numbers.map((number: any, index: any) => {
    const listItemStyle = {
      backgroundColor: colorMap[props.colors?.[index % (props.colors.length || 1)]] || 'bg-gray-400', // Use 'bg-gray-400' as default color if not found in colorMap
    };

    return (
      <li key={index} className={`relative transition ease-in-out duration-250 text-white font-sans block border border-transparent rounded-lg p-2 my-1 ${listItemStyle.backgroundColor}`}>
        <div className="overflow-hidden line-clamp-1">
          {number}
        </div>
      </li>
    );
  });

  return (
    <Link href={"/service/"+props.service_id} className="border-2 group transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg shadow bg-slate-900 border-gray-700">
      <div className="flex items-center justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.service_name}</h5>
        <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
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