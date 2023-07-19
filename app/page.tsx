import Image from 'next/image'
import Card from '../components/Card.tsx'
import Navbar from '../components/Navbar.tsx'
import SearchInput from '@/components/SearchInput.tsx'

function Logo() {
  return <Image
    src="/images/logo.svg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
}

export default function Home() {
  return (
    <html>
      <body className="bg-slate-900">
        <Navbar/>

        <SearchInput />

        <div className="w-5/6 m-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr>
                        <td className="pr-3">       
                          <Card
                          service_name={"Facebook"}
                          numbers={["They steal your data", "They sell your data to other services or companies", "They steal your data", "They sell your data to other services or companies", "They steal your data"]}
                          />
                        </td>
                        <td className="pl-3">
                          <Card
                          service_name={"Amazon"}
                          numbers={["They steal your data", "They sell your data to other services or companies", "They steal your data", "They sell your data to other services or companies", "They steal your data"]}
                          />
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-3">       
                          <Card
                          service_name={"Google"}
                          numbers={["They steal your data", "They sell your data to other services or companies", "They steal your data", "They sell your data to other services or companies", "They steal your data"]}
                          />
                        </td>
                        <td className="pl-3">
                          <Card
                          service_name={"Twitter"}
                          numbers={["They steal your data", "They sell your data to other services or companies", "They steal your data", "They sell your data to other services or companies", "They steal your data"]}
                          />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


      </body>
    </html>
  )
}
