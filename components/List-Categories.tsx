'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import '@fortawesome/fontawesome-free/css/all.css';

type Category = string;

const initialCategories: Category[] = [
    'Data Collection',
    'Data Usage',
    'Data Security',
    'Account Control',
    'Content Control',
    'Service Operation',
    'Government',
    'Legal & Liability',
];

export default function CategoryList(case_map: any) {
    const [openCategories, setOpenCategories] = useState<Category[]>([]);
    const searchParams = useSearchParams()
    const seachCategory = searchParams.get('category')

    useEffect(() => {
        const categoryToOpen = seachCategory as Category;
        if (categoryToOpen && initialCategories.includes(categoryToOpen)) {
            setOpenCategories([categoryToOpen]);
        }
    }, [seachCategory]);

    const toggleCategory = (category: Category) => {
        setOpenCategories((prevOpenCategories) => (
            prevOpenCategories.includes(category)
                ? prevOpenCategories.filter((openCategory) => openCategory !== category)
                : [...prevOpenCategories, category]
        ));
    };

    const caseColor: { [key: string]: string; } = {
        '10': 'green-600',
        '7': 'gray-600',
        '4': 'orange-500',
        '0': 'red-500',
      };

    function categoryColor(cat_score: number): string {
        if (cat_score >= 8) {
          return "green-600";
        } else if (cat_score >= 6) {
          return "orange-500"
        } else {
          return "red-500"
        }
      }

    return (
        <div>
            {initialCategories.map((category, index) => (
                <div key={index} className="mb-6">
                    <div onClick={() => toggleCategory(category)} className={`flex p-3 items-center transition ease-in-out duration-200 text-white cursor-pointer text-xl border-2 border-transparent ${openCategories.includes(category) ? 'bg-slate-800 rounded-t-lg' : 'hover:bg-slate-800 rounded-lg'}`}>
                        <div className="flex-shrink mr-4 md:mr-6">
                            <i className={`fas fa-chevron-${openCategories.includes(category) ? 'up' : 'down'}`}></i>
                        </div>
                        <div className="flex-shrink mr-4 md:mr-6">
                            <i className={`fas fa-sm fa-circle text-${categoryColor(case_map['case_map'][index][0])}`}></i>
                        </div>
                        <div className="flex-grow">
                            <span>{category}</span>
                        </div>
                        <div className="flex-shrink-0 ml-4 text-right md:ml-6">
                            <span>{case_map['case_map'][index][0]}</span><span className="text-gray-400">/10</span>
                        </div>
                    </div>
                    {openCategories.includes(category) && (
                        <div className='rounded-b-lg border-2 border-slate-800 p-2'>
                            {case_map['case_map'][index].map((item: string, i: number) => (
                                i % 2 === 1 && i + 1 < case_map['case_map'][index].length ? (
                                    <li key={i} className="flex justify-between items-center p-2 px-4 space-x-5 rounded-lg text-gray-300 border-2 border-transparent transition ease-in-out hover:scale-x-[1.025] hover:shadow-md hover:shadow-indigo-600 hover:bg-slate-800 hover:border-indigo-600">
                                        <h5>{case_map['case_map'][index][i]}</h5>
                                        <div className={`w-min px-2 py-1 rounded-lg bg-gradient-radial from-slate-800 to-${caseColor[case_map['case_map'][index][i + 1]]}/30 text-${caseColor[case_map['case_map'][index][i + 1]]} border-2 border-${caseColor[case_map['case_map'][index][i + 1]]}`}>{case_map['case_map'][index][i + 1]}</div>
                                    </li>
                                ) : null
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

