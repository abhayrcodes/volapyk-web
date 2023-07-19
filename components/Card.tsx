export default function Card(props: any) {
  const numbers = props.numbers;
  const listItems = numbers && numbers.map((number: any, index: any) =>
    <li key={index} className="relative transition ease-in-out duration-250 text-white font-sans block bg-red-400 border border-transparent rounded-lg hover:drop-shadow-[0_10px_10px_rgba(255,0,0,0.5)] hover:bg-red-500 p-2 my-1">
      {number}
    </li>
  );

  return (
    <a href="#" className="transition ease-in-out mb-7 hover:shadow-lg hover:shadow-emerald-600 block p-6 border border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.service_name}</h5>
      <hr className="h-px my-4 bg-gray-700 border-0 dark:bg-gray-700"></hr>
      <div className="h-56 space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        <ul>
          {listItems}
        </ul>
      </div>
    </a>
  )
}