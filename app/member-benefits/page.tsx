import Navbar from "@/components/Navbar";
import { ButtonGroup } from "@/components/PrefComps.tsx"

export default function MemberBenefits() {
    const addService = (
        <div className="w-full border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
          <div className="flex justify-between mb-5">
            <p className="py-1 text-lg lg:text-xl font-bold tracking-tight">
                Add New Services & Sources
            </p>
            <div className="h-fit my-auto py-1 px-2 border rounded-lg items-center justify-center inline-flex border-green-500 text-green-500">
              Done
            </div>
          </div>
          <p className="font-bold tracking-tight mb-5">
              Submit new services and sources to be reviewed by the team and added to the database for processing.
          </p>
          <div className="relative border-2 group transition ease-in-out shadow-lg shadow-indigo-600 border-indigo-500 block p-6 rounded-lg bg-slate-900">
              <div className='flex'>
                  <div className="w-full items-center justify-between text-white">
                      <input name="service" className="w-full mb-2 pr-6 text-2xl tracking-tight font-bold bg-transparent focus:outline-none" placeholder="Type a new service name here..."/>
                  </div>
                  <div className='w-[30px] items-center justify-end top-6 right-6'>
                      <button className="flex h-[30px] w-[30px] text-white text-xl items-center justify-center font-bold bg-indigo-600 rounded-full hover:bg-indigo-500">+</button>
                  </div>
              </div>
              <div className="flex items-center w-full mt-4 justify-between rounded-lg text-gray-300 bg-slate-800">
                  <input name="source" className="w-full bg-transparent px-4 py-1 focus:outline-none" placeholder="Link of source to add..."/>
                  <button className="flex w-min whitespace-nowrap items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-r-lg text-white">
                      Add Source
                  </button>
              </div>
          </div>
        </div>
    );
    const instantCHecker = (
        <div className="w-full border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
          <div className="flex justify-between mb-5">
            <p className="py-1 text-lg lg:text-xl font-bold tracking-tight">
                Instantly Check Sources
            </p>
            <div className="h-fit my-auto py-1 px-2 border rounded-lg items-center justify-center inline-flex border-orange-500 text-orange-500">
              Coming Soon
            </div>
          </div>
          <p className="font-bold tracking-tight mb-5">
            Submit a link to a service that has not been added to the database and get a score processed in realtime. Also allows for a comparison of past sources that came before Volapyk's inception.
          </p>
          <div className="flex justify-evenly">
            <img src={'/images/benefits-symbols/ai.svg'} height={100} width={100} alt="React Logo" />
            <img src={'/images/benefits-symbols/scan.svg'} height={100} width={100} alt="React Logo" />
            <img src={'/images/benefits-symbols/score.svg'} height={100} width={100} alt="React Logo" />
          </div>
        </div>
    );
    const preferences = (
        <div className="w-full border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
          <div className="flex justify-between mb-5">
            <p className="py-1 text-lg lg:text-xl font-bold tracking-tight">
                Set Your Case Preferences
            </p>
            <div className="h-fit my-auto py-1 px-2 border rounded-lg items-center justify-center inline-flex border-yellow-500 text-yellow-500">
              In Testing
            </div>
          </div>
          <p className="font-bold tracking-tight mb-5">
            Select whether you want a case to be good, neutral, bad, or blocker based on your personal preferences. All scores and displayed cases will update according to your preferences.
          </p>
          <ButtonGroup text={"A license is kept on user-generated content even after you close your account"} og={'1'}/>
        </div>
    );
    const emailAlerts = (
        <div className="w-full border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
          <div className="flex justify-between mb-5">
            <p className="py-1 text-lg lg:text-xl font-bold tracking-tight">
                Recieve Updates About Changes
            </p>
            <div className="h-fit my-auto py-1 px-2 border rounded-lg items-center justify-center inline-flex border-orange-500 text-orange-500">
              Coming Soon
            </div>
          </div>
          <p className="font-bold tracking-tight mb-5">
            Get email updates when a service you follow enacts positive or negative changes to their policies. Learn exactly what was changed and see how it affected the score.
          </p>
          <div className="flex justify-evenly">
            <img src={'/images/benefits-symbols/graph.svg'} height={100} width={100} alt="React Logo" />
            <img src={'/images/benefits-symbols/sent.svg'} height={100} width={100} alt="React Logo" />
            <img src={'/images/benefits-symbols/email.svg'} height={100} width={100} alt="React Logo" />
          </div>
        </div>
    );

    return (
        <div>
            <Navbar />

            <div className="block lg:flex w-11/12 mx-auto my-5">
                <div className="flex w-full lg:w-1/2 justify-center items-center lg:min-h-[var(--custom-max-height)]">
                    <div className="text-center p-5">
                        <h1 id="logo-text" className="w-full mb-4 text-3xl lg:text-5xl font-extrabold text-white">Sign up to become a member of</h1>
                        <h1 id="logo-text" className="w-full mb-4 text-5xl lg:text-7xl font-extrabold text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">Volapyk Zero</span>
                        </h1>
                        <a href="/?signup=true"><button className="rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-2 lg:my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">Sign Up</button></a>
                        <a href="/?login=true"><button className="rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-2 lg:my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">Login</button></a>
                        <a href="https://gofundme.com/f/volapyk"><button className="rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-2 lg:my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">Donate</button></a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="overflow-y-auto lg:max-h-[var(--custom-max-height)]">
                        <table className="grid w-full gap-4 text-sm leading-6 px-5">
                            <tbody>
                                <tr>
                                    <td className='flex'>
                                        {addService}
                                    </td>
                                    <td className='flex'>
                                        {preferences}
                                    </td>
                                    <td className='flex'>
                                        {emailAlerts}
                                    </td>
                                    <td className='flex'>
                                        {instantCHecker}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
  }