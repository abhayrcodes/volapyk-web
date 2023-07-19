export default function Card(props: any) {
  const numbers = props.numbers;
  const listItems = numbers && numbers.map((number: any, index: any) =>
    <li key={index} className="relative transition ease-in-out duration-250 text-white font-sans block bg-red-400 border border-transparent rounded-lg hover:bg-red-300 p-2 my-1">
      <div className="overflow-hidden line-clamp-1">
        {number}
      </div>
    </li>
  );

  return (
    <a href="#" className="group transition ease-in-out mb-7 hover:border-solid hover:border-blue-500 block p-6 border rounded-lg shadow bg-slate-700 border-gray-700">
      <div className="flex items-center justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.service_name}</h5>
        <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
          Grade A
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-400 group-hover:dark:bg-blue-500"></hr>
      <div className="h-56 space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        <ul>
          {listItems}
        </ul>
      </div>
    </a>
  )
}