"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    let pathname = usePathname()
    if (pathname === '/') {
        pathname = '';
    }
    if (pathname.endsWith('/search')) {
        pathname = pathname.slice(0, -'/search'.length);
    }

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        console.log(pathname)
        const targetPage = `${pathname}/search`;
        router.push(`${targetPage}?q=${encodedSearchQuery}`);
    };
    
    return (
        <div>            
            <form className="w-5/6 mt-20 mb-10 m-auto" onSubmit={onSearch}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-bold text-white sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value = {searchQuery} onChange={(event) => setSearchQuery(event.target.value)} type="search" id="default-search" className="transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-10 text-sm border-2 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-900 border-gray-600 placeholder-gray-400 text-white" placeholder="Search for a service here..." required></input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>
        
    )
};

export default SearchInput;