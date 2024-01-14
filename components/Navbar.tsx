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

  const hideNavbar = () => {
    setIsNavbarExpanded(false);
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

  const navItems: { [key: number]: string[] } = {
    0: ['/about', 'About'],
    1: ['/member-benefits', 'Member Benefits'],
    2: ['https://gofundme.com/f/volapyk', 'Donate'],
  }

  const signInOutButton = () => {
    if (status === "authenticated") {
      return (<button onClick={() => signOut({ callbackUrl: "/" })} className="block border-2 mx-auto border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Sign Out</button>);
    }
    return (<Link href="/?login=true" onClick={hideNavbar} className="block border-2 mx-auto border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">Login</Link>);
  }

  if (status === "authenticated") {
    navItems[0] = ['/add-service', 'Add a Service']
    navItems[1] = ['/instant-checker', 'Instant Checker']
    navItems[2] = ['/preferences', 'Preferences']
  }
  
  return (
    <nav className={`bg-gray-900 ${isNavbarExpanded ? 'absolute h-screen w-full z-10 top-0' : ''}`}>
      <div className="flex flex-wrap items-center justify-between mx-5 p-4">
        <Link href="/" className="flex items-center">
          <img src={'/images/logo.svg'} height={50} width={50} alt="Volapyk Logo" />
        </Link>
        <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 bg-none rounded-lg lg:hidden focus:outline-none">
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
              <Link href={navItems[0][0]} className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">{navItems[0][1]}</Link>
            </li>
            <li>
              <Link href={navItems[1][0]} className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">{navItems[1][1]}</Link>
            </li>
            <li>
              <Link href={navItems[2][0]} className="block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">{navItems[2][1]}</Link>
            </li>
            <li>
              {signInOutButton()}
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isNavbarExpanded ? '' : 'hidden'}`}>
        <div>
          <ul className="text-white font-bold text-xl text-center mt-5">
            <li>
              <Link href="/" onClick={hideNavbar} className="w-fit mx-auto mb-1 block border-2 border-transparent text-purple-600 bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href={navItems[0][0]} onClick={hideNavbar} className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">{navItems[0][1]}</Link>
            </li>
            <li>
              <Link href={navItems[1][0]} onClick={hideNavbar} className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">{navItems[1][1]}</Link>
            </li>
            <li>
              <Link href={navItems[2][0]} onClick={hideNavbar} className="w-fit mx-auto mb-1 block border-2 border-transparent bg-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-600 bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-10 ease-in-out duration-150">{navItems[2][1]}</Link>
            </li>
            <li>
              {signInOutButton()}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
