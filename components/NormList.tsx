import Link from "next/link";

export default function NormList(props: any) {
  const numbers = props.numbers;

  const listItems = numbers && numbers.map((number: any, index: any) => {

    return (
        <Link href = {number}>
            <li key={index} className={"flex justify-between transition ease-in-out p-2 px-4 my-2 border-2 hover:border-2 border-transparent rounded-lg text-gray-300 hover:scale-x-[1.025] hover:shadow-md hover:shadow-indigo-600 hover:bg-slate-800 hover:border-indigo-600"}>
                <div className="overflow-hidden line-clamp-1">
                {number}
                </div>
            </li>
        </Link>
    );
  });

  return (
    <div className="space-y-1 list-none list-inside">
        <ul>
            {listItems}
        </ul>
    </div>
  )
}