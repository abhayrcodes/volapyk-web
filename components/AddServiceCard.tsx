'use client'

import React, { useState } from 'react';

function AddServiceCard({ titleElement, linksElement }: { titleElement: any; linksElement: any }) {
  const [sourceInputs, setSourceInputs] = useState([{ link: '', value: '' }]);

  const handleAddSource = () => {
    setSourceInputs(prevInputs => [...prevInputs, { link: '', value: '' }]);
  };

  const handleSourceInputChange = (index: number, field: string, value: string) => {
    const newInputs: any[] = [...sourceInputs];
    newInputs[index][field] = value;
    setSourceInputs(newInputs);
  };

  return (
    <div className="relative border-2 group transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg shadow bg-slate-900 border-gray-700">
        {titleElement}
        <div className='absolute flex items-center justify-end top-6 right-6 z-10'>
            <button className="h-[30px] w-[30px] text-white bg-indigo-600 rounded-full hover:bg-indigo-500" onClick={handleAddSource}>+</button>
        </div>
        {linksElement}
        {sourceInputs.map((inputData, index) => (
            <div key={index} className="flex items-center w-full mt-4 justify-between rounded-lg text-gray-300 bg-slate-800">
            <input className="flex-1 bg-transparent px-4 py-1 focus:outline-none" placeholder="Link of source to add..." value={inputData.link} onChange={e => handleSourceInputChange(index, 'link', e.target.value)}/>
            <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-r-lg text-white" onClick={() => handleSourceInputChange(index, 'value', inputData.link)}>
                {inputData.value || 'Add Source'}
            </button>
            </div>
        ))}
    </div>
  );
}

export default AddServiceCard;

