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
        <li key={index} className={`flex justify-between transition ease-in-out p-2 px-4 my-2 border-2 hover:border-2 border-transparent rounded-lg text-gray-300 font-sans hover:scale-x-[1.025] hover:shadow-md hover:shadow-indigo-600 hover:bg-slate-800 hover:border-indigo-600`}>
          <div className="py-1 pr-4">
            <h5 className="labil">{number.title}</h5>
          </div>
          <div>
            {listItemRating.element}
          </div>
        </li>
      </div>
      
    );
  });

  return (
    <div>{listItems}</div>
  )
}