"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        router.push('/search?q='+encodedSearchQuery);
    };
    
    return (
        <div>
            <div className="text-center mt-20">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-9xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">volapyk</span></h1>
                <p className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400">Keeping you safe, <span className="underline decoration-emerald-600">one sentence at a time.</span></p>
            </div>
            
            <form className="w-5/6 mt-20 mb-10 m-auto" onSubmit={onSearch}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value = {searchQuery} onChange={(event) => setSearchQuery(event.target.value)} type="search" id="default-search" className="transition ease-in-out hover:shadow-lg hover:shadow-emerald-600 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-emerald-600 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="Search for a service here..." required></input>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Search</button>
                </div>
            </form>
        </div>
        
    )
};

export default SearchInput;