import Link from 'next/link';

export default function Navbar(props: any) {
    console.log(props);
    return (
        <nav className="border-gray-200 bg-gray-900">
          <div className="flex flex-wrap items-center justify-between mx-10 p-4">
            <Link href="/" className="flex items-center">
              <span id = "logo-text" className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">volapyk</span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/" className="block border-2 border-transparent text-purple-600 bg-purple-600 rounded bg-transparent p-2 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-20 ease-in-out duration-150" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="block border-2 border-transparent text-white bg-purple-600 rounded bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-20 ease-in-out duration-150">About</Link>
                </li>
                <li>
                  <Link href="/add-service" className="block border-2 border-transparent text-white bg-purple-600 rounded bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-20 ease-in-out duration-150">Add a Service</Link>
                </li>
                <li>
                  <Link href="/instant-checker" className="block border-2 border-transparent text-white bg-purple-600 rounded bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-20 ease-in-out duration-150">Instant Checker</Link>
                </li>
                <li>
                  <Link href="https://gofundme.com/f/volapyk" className="block border-2 border-transparent text-white bg-purple-600 rounded bg-transparent p-2 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:bg-opacity-20 ease-in-out duration-150">Donate</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}