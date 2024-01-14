import Link from "next/link";
import {CircularProgress} from "@nextui-org/progress";

export default function ServiceCard(props: any) {
  function scoreColor(score: number): string {
    if (score >= 8) {
      return "green-500";
    } else if (score >= 6) {
      return "orange-500"
    } else {
      return "red-500"
    }
  }
  function categoryColor(cat_score: number): string {
    if (cat_score >= 8) {
      return "green-600";
    } else if (cat_score >= 6) {
      return "orange-500"
    } else {
      return "red-500"
    }
  }

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
    <Link href={"/service/"+props.id} className="block p-6 rounded-lg border-2 border-gray-700 transition ease-in-out hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500">
      <div className="flex items-center justify-between space-x-2 mb-2">
        <div className="flex flex-row items-center space-x-2">
          <img src={`/images/service-icons/${props.id}.webp`} alt="Service Logo" className="h-11 my-auto rounded-md"/>
          <h2 className="py-1 text-2xl tracking-tight text-white font-bold">{props.name}</h2>
        </div>
        <CircularProgress
          aria-label="Loading..."
          classNames={{
            svg: "w-11 h-11 drop-shadow-md",
            indicator: `stroke-${scoreColor(props.score)}`,
            track: "stroke-gray-700",
            value: `text-md font-semibold text-${scoreColor(props.score)}`,
          }}
          formatOptions={{style: 'decimal'}}
          value={props.score}
          maxValue={10}
          strokeWidth={4}
          showValueLabel={true}
        />
      </div>
      <hr className="h-[2px] my-4 bg-gray-700 border-0"></hr>
      <div className="grid grid-cols-2 gap-2">
        {initialCategories.map((category, index) => (
          <div key={index} className={`transition ease-in-out duration-250 text-white block border border-transparent rounded-md p-2 bg-${categoryColor(props.cat_scores[index])}`}>
            <div className="text-center overflow-hidden line-clamp-1">
              {category}
            </div>
          </div>
        ))}
      </div>
    </Link>
  )
}