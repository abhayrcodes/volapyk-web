import Navbar from '@/components/Navbar.tsx'
import SearchInput from '@/components/SearchInput';

export default function AddService() {
  return (
    <html>
      <body className="static bg-slate-900">
        <Navbar/>
        <SearchInput/>
        <div className="pointer-events-none text-center">
          <p className="text-md md:text-lg font-sans font-normal text-gray-400 lg:text-2xl">To add a service, you must search to ensure it is not already added</p>
        </div>
      </body>
    </html>
    
  )
}
