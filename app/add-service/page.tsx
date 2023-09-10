import Navbar from '@/components/Navbar.tsx'
import SearchInput from '@/components/SearchInput';

export default function AddService() {
  return (
    <div className="static">
      <Navbar/>
      <SearchInput/>
      <div className="flex flex-col text-center items-center mb-20">
        <h1 className='w-2/3 lg:mt-20 mb-3 font-bold text-slate-100 text-xl md:text-2xl'>Add a Service Instructions</h1>
        <ol className="list-decimal list-inside space-y-2 w-2/3 font-sans font-normal text-gray-400 text-md md:text-lg">
          <li>Search for the service name to ensure it is not already added</li>
          <li>If it does exist, ensure your sources are not already added</li>
          <li>If it does not exist, use the bottom card to type in the service name</li>
          <li>Hit the "+" button in the upper right to add multiple sources</li>
          <li>Put in the full source link (Eg. https://...) and hit the add source button</li>
          <li>Your source will be added to the service upon approval by the Volapyk team</li>
        </ol>
      </div>
    </div>   
  )
}
