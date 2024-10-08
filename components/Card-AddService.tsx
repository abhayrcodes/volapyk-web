'use client'

import React, { useState } from 'react';

function AddServiceCard({ titleElement, linksElement, inputServiceName }: { titleElement: any; linksElement: any; inputServiceName: string }) {
  const [sourceInputs, setSourceInputs] = useState([{ link: '', value: '' }]);
  const [buttonStates, setButtonStates] = useState(Array(sourceInputs.length).fill('idle'));
  const [inputValue, setInputValue] = useState('');

  const handleAddSource = () => {
    setSourceInputs(prevInputs => [...prevInputs, { link: '', value: '' }]);
  };

  const handleSourceInputChange = (index: number, field: string, value: string) => {
    const newInputs: any[] = [...sourceInputs];
    newInputs[index][field] = value;
    setSourceInputs(newInputs);
  };

  const serviceName = inputValue || inputServiceName;

  const handleNavigate = async (link: string, index: number) => {
    if (isValidLink(link)) {
      try {
        setButtonStates(prevStates => {
          const newStates = [...prevStates];
          newStates[index] = 'loading';
          return newStates;
        });
  
        const response = await fetch('/api/push-link', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ link, serviceName }),
        });
  
        if (response.ok) {
          setButtonStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = 'success';
            return newStates;
          });
        } else {
          setButtonStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = 'error';
            return newStates;
          });
        }
      } catch (error) {
        console.error('Error while fetching API:', error);
        // Handle error case (show error message, etc.)
        setButtonStates(prevStates => {
          const newStates = [...prevStates];
          newStates[index] = 'error';
          return newStates;
        });
      }
    } else {
      console.log('Invalid link:', link);
      // Handle invalid link case (show error message, etc.)
      setButtonStates(prevStates => {
        const newStates = [...prevStates];
        newStates[index] = 'error';
        return newStates;
      });
    }
  };

  const isValidLink = (link: string) => {
    return link.startsWith('http://') || link.startsWith('https://');
  };

  return (
    <div className="relative border-2 group transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg shadow bg-slate-900 border-gray-700">
        <div className='flex'>
          {inputServiceName !== '' &&titleElement}
          {inputServiceName === '' && (
            <div className="w-full items-center justify-between text-white">
              <input name="service" className="w-full mb-2 pr-6 text-2xl tracking-tight font-bold bg-transparent focus:outline-none" placeholder="Type a new service name here..." value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            </div>
          )}
          <div className='w-[30px] items-center justify-end top-6 right-6'>
            <button className="flex h-[30px] w-[30px] text-white text-xl items-center justify-center font-bold bg-indigo-600 rounded-full hover:bg-indigo-500" onClick={handleAddSource}>+</button>
          </div>
        </div>
        {linksElement}
        {sourceInputs.map((inputData, index) => (
            <div key={index} className="flex items-center w-full mt-4 justify-between rounded-lg text-gray-300 bg-slate-800">
              <input name="source" className="w-full bg-transparent px-4 py-1 focus:outline-none" placeholder="Link of source to add..." value={inputData.link} onChange={e => handleSourceInputChange(index, 'link', e.target.value)}/>
              <button className="flex w-min whitespace-nowrap items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-r-lg text-white" onClick={() => handleNavigate(inputData.link, index)}>
                  {inputData.value || buttonStates[index] === 'loading' ? 'Loading...' : buttonStates[index] === 'success' ? '✔' : 'Add Source'}
              </button>
            </div>
        ))}
    </div>
  );
}

export default AddServiceCard;

