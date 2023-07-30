export default function CasesList(props: any) {
  const numbers = props.case_titles;

//{listItemStyle.backgroundColor}

  const colorMap: { [key: string]: JSX.Element } = {
    good: (<div className="order-last bg-gradient-radial from-slate-800 to-green-600/30 w-min px-2 py-1 rounded-lg text-green-600 border-2 border-green-600">Good</div>),
    neutral: (<div className="order-last bg-gradient-radial from-slate-800 to-gray-600/30 w-min px-2 py-1 rounded-lg text-gray-600 border-2 border-gray-600">Neutral</div>),
    bad: (<div className="order-last bg-gradient-radial from-slate-800 to-orange-500/30 w-min px-2 py-1 rounded-lg text-orange-500 border-2 border-orange-500">Bad</div>),
    blocker: (<div className="order-last bg-gradient-radial from-slate-800 to-red-500/30 w-min px-2 py-1 rounded-lg text-red-500 border-2 border-red-500">Blocker</div>)
    // Add more mappings as needed
  };

  const listItems = numbers && numbers.map((number: any, index: any) => {
    const listItemRating = {
      element: colorMap[number.class] || (<div className="order-last bg-gradient-radial from-slate-800 to-gray-400/30 w-min px-2 py-1 rounded-lg text-gray-400 border border-gray-400/25">Good</div>), // Use 'bg-gray-400' as default color if not found in colorMap
    };

    return (
      <div className="">
        <li key={index} className={`flex justify-between transition ease-in-out duration-300 p-2 my-2 border hover:border-2 border-indigo-600 rounded-lg text-gray-300 font-sans hover:scale-x-[1.025] hover:shadow-md hover:shadow-indigo-600 hover:bg-slate-800`}>
          <div className="overflow-hidden line-clamp-1 py-1">
            {number.title}
          </div>
          {listItemRating.element}
        </li>
      </div>
      
    );
  });

  return (
    <div>{listItems}</div>
  )
}