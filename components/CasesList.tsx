import Link from "next/link";

export default function CasesList(props: any) {
  const numbers = props.case_titles;

  const colorMap: { [key: string]: string } = {
    good: 'bg-green-600 hover:bg-opacity-75',
    neutral: 'bg-gray-600 hover:bg-opacity-75',
    bad: 'bg-orange-500 hover:bg-opacity-75',
    blocker: 'bg-red-500 hover:bg-opacity-75'
    // Add more mappings as needed
  };

  const listItems = numbers && numbers.map((number: any, index: any) => {
    const listItemStyle = {
      backgroundColor: colorMap[number.class] || 'bg-gray-400', // Use 'bg-gray-400' as default color if not found in colorMap
    };

    return (
      <li key={index} className={`relative transition ease-in-out duration-250 text-white font-sans block border border-transparent rounded-lg p-2 my-1 ${listItemStyle.backgroundColor}`}>
        <div className="overflow-hidden line-clamp-1">
          {number.title}
        </div>
      </li>
    );
  });

  return (
    <div className="m-2">{listItems}</div>
  )
}