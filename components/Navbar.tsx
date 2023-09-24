'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function Navbar(props: any) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const { data: session, status } = useSession()

  const toggleNavbar = () => {
    setIsNavbarExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (isNavbarExpanded) {
        event.preventDefault();
      }
    };

    if (isNavbarExpanded) {
      window.addEventListener('scroll', handleScroll, { passive: false });
      document.body.classList.add('no-scrollbar'); // Apply the CSS class
    } else {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scrollbar'); // Remove the CSS class
    }

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarExpanded]);


  if (status === "authenticated") {
    return (
      <nav className={`bg-gray-900 ${isNavbarExpanded ? 'absolute h-screen w-full z-10 top-0' : ''}`}>
        <div className="flex flex-wrap items-center justify-between mx-10 p-4">
          <Link href="/" className="flex items-center">
            <img src={'/images/logo2.svg'} height={50} width={50} alt="React Logo" />
          </Link>
          <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 bg-none rounded-lg lg:hidden focus:outline-none">
            <span className="sr-only">Open main menu</span>
            <svg className={`w-6 h-6 ${isNavbarExpanded ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className={`w-6 h-6 ${isNavbarExpanded ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="text-white font-semibold flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row md:space-x-8 lg:mt-0 lg:border-0">
              <li>
                <Link href="/" className="block border-2 border-transparent text-purple-600 bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/add-service" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Add a Service</Link>
              </li>
              <li>
                <Link href="/instant-checker" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Instant Checker</Link>
              </li>
              <li>
                <Link href="/preferences" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Preferences</Link>
              </li>
              <li>
                <button onClick={() => signOut({ callbackUrl: '/' })} className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isNavbarExpanded ? '' : 'hidden'}`}>
          <div>
            <ul className="text-white font-bold text-xl text-center mt-5">
              <li>
                <Link href="/" className="w-fit mx-auto mb-1 block border-2 border-transparent text-purple-600 bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/add-service" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Add a Service</Link>
              </li>
              <li>
                <Link href="/instant-checker" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Instant Checker</Link>
              </li>
              <li>
                <Link href="/preferences" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Preferences</Link>
              </li>
              <li>
                <button onClick={() => signOut({ callbackUrl: '/' })} className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  return (
    <nav className={`bg-gray-900 ${isNavbarExpanded ? 'absolute h-screen w-full z-10 top-0' : ''}`}>
      <div className="flex flex-wrap items-center justify-between mx-10 p-4">
        <Link href="/" className="flex items-center">
          <img src={'/images/logo2.svg'} height={50} width={50} alt="React Logo" />
        </Link>
        <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 bg-none rounded-lg lg:hidden focus:outline-none">
          <span className="sr-only">Open main menu</span>
          <svg className={`w-6 h-6 ${isNavbarExpanded ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className={`w-6 h-6 ${isNavbarExpanded ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="text-white font-semibold flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row md:space-x-8 lg:mt-0 lg:border-0">
            <li>
              <Link href="/" className="block border-2 border-transparent text-purple-600 bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">About</Link>
            </li>
            <li>
              <Link href="/member-benefits" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Member Benefits</Link>
            </li>
            <li>
              <Link href="https://gofundme.com/f/volapyk" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Donate</Link>
            </li>
            <li>
              <Link href="/?login=true" className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isNavbarExpanded ? '' : 'hidden'}`}>
        <div>
          <ul className="text-white font-bold text-xl text-center mt-5">
            <li>
              <Link href="/" className="w-fit mx-auto mb-1 block border-2 border-transparent text-purple-600 bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/about" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">About</Link>
            </li>
            <li>
              <Link href="/member-benefits" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Member Benefits</Link>
            </li>
            <li>
              <Link href="https://gofundme.com/f/volapyk" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Donate</Link>
            </li>
            <li>
              <Link onClick={toggleNavbar} href="/?login=true" className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
