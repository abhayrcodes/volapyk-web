'use client'

import { useState } from 'react';

function ButtonGroup(props:any) {

    const text=props.text;
    const og=props.og;

    const [current, setCurrent] = useState(og);

    const handleChange = (e:any) => {
        setCurrent(e.target.dataset.id);
    }

    const colorKey = ["border-red-500 hover:shadow-red-500/60", "border-orange-500 hover:shadow-orange-500/60", "border-slate-600 hover:shadow-slate-600/60", "border-green-600 hover:shadow-green-600/60"];

    return (
        <div className={`m-3 pb-6 border-2 rounded-lg shadow-2xl ${colorKey[current]} hover:scale-105 transition ease-in-out duration-200`}>
            <p className="text-slate-100 text-center text-sm p-3">{text}</p>

            <div className="w-11/12 flex mx-auto align-text-bottom h-max bottom-0">
                <button data-id={0} onClick={handleChange} className={`text-xs rounded-l-lg w-1/4 from-slate-800 to-red-500/30 px-2 py-3 text-red-500/50 border-2 border-red-500 hover:shadow-lg hover:shadow-red-500/70 ${current==0 ? "bg-gradient-radial" : " "} transition ease-in-out duration-200`}>Blocker</button>
                <button data-id={1} onClick={handleChange} className={`text-xs w-1/4 from-slate-800 to-orange-500/30 px-2 py-3 text-orange-500 border-2 border-orange-500 hover:shadow-lg hover:shadow-orange-500/70 ${current==1 ? "bg-gradient-radial" : " "} transition ease-in-out duration-200`}>Bad</button>
                <button data-id={2} onClick={handleChange} className={`text-xs w-1/4 from-slate-800 to-gray-600/30 px-2 py-3 text-gray-600 border-2 border-gray-600 hover:shadow-lg hover:shadow-slate-600/70 ${current==2 ? "bg-gradient-radial" : " "} transition ease-in-out duration-200`}>Neutral</button>
                <button data-id={3} onClick={handleChange} className={`text-xs rounded-r-lg w-1/4 from-slate-800 to-green-600/30 py-3 text-green-600 border-2 border-green-600 hover:shadow-lg hover:shadow-green-600/70 ${current==3 ? "bg-gradient-radial" : " "} transition ease-in-out duration-200`}>Good</button>
            </div>
        </div>
        
    )   
}

export default function AllCasesPrefs(props:any) {
    const cases = props.cases;
    const cols = 5;
    let casePrefList = Array<any>();

    for (let row=0; row<cases.length/cols; row++) {
        casePrefList.push(
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <ButtonGroup
                    text={cases[cols*row] === undefined ? "Loading" : cases[cols*row].title}
                    og={cases[cols*row] === undefined ? "Loading" : cases[cols*row].classification==-30 ? 0 : cases[cols*row].classification/10 + 2}
                />
                <ButtonGroup
                    text={cases[cols*row+1] === undefined ? "Loading" : cases[cols*row+1].title}
                    og={cases[cols*row+1] === undefined ? "Loading" : cases[cols*row+1].classification==-30 ? 0 : cases[cols*row+1].classification/10 + 2}
                />
                <ButtonGroup
                    text={cases[cols*row+2] === undefined ? "Loading" : cases[cols*row+2].title}
                    og={cases[cols*row+2] === undefined ? "Loading" : cases[cols*row+2].classification==-30 ? 0 : cases[cols*row+2].classification/10 + 2}
                />
                <ButtonGroup
                    text={cases[cols*row+3] === undefined ? "Loading" : cases[cols*row+3].title}
                    og={cases[cols*row+3] === undefined ? "Loading" : cases[cols*row+3].classification==-30 ? 0 : cases[cols*row+3].classification/10 + 2}
                />
            </div>
        )
        
    }
    
    return (
        <div className='mt-5 mb-20'>
            {casePrefList}
        </div>
    )
}