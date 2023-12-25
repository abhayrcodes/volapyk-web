import { ButtonGroup } from "@/components/PrefComps.tsx"

export default function MemberBenefits() {
    const addService = (
        <div className="w-full border-2 transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
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
        <div className="w-full border-2 transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
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
            <svg className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="icon" fill="#4F3CE5" transform="translate(64.000000, 64.000000)">
                      <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"></path>
                  </g>
              </g>
            </svg>
            <svg className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" fill="#7C3AED" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M19,12 L19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,12 L19,12 Z M3,12 L3,3 C3,1.8954305 3.8954305,1 5,1 L15.4142136,1 L21,6.58578644 L21,12 L23,12 L23,14 L1,14 L1,12 L3,12 Z M19,16 L21,16 L21,21 C21,22.1045695 20.1045695,23 19,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,16 L5,16 L5,21 L19,21 L19,16 Z M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z"/>
            </svg>
            <svg className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z" fill="#9333EA" /><path d="M630.72 113.28A413.76 413.76 0 0 1 768 185.28a32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56zM355.84 313.6a36.8 36.8 0 0 0-13.12 18.56l-107.52 312.96a37.44 37.44 0 0 0 2.56 35.52 32 32 0 0 0 24.96 10.56 27.84 27.84 0 0 0 17.28-5.76 43.84 43.84 0 0 0 10.56-13.44 100.16 100.16 0 0 0 7.04-15.36l4.8-12.8 17.6-49.92h118.72l24.96 69.76a45.76 45.76 0 0 0 10.88 19.2 28.8 28.8 0 0 0 20.48 8.32h2.24a27.52 27.52 0 0 0 27.84-15.68 41.28 41.28 0 0 0 0-29.44l-107.84-313.6a36.8 36.8 0 0 0-13.44-19.2 44.16 44.16 0 0 0-48 0.32z m24.32 96l41.6 125.44h-83.2zM594.88 544a66.56 66.56 0 0 0 25.6 4.16h62.4v78.72a29.12 29.12 0 0 0 32 32 26.24 26.24 0 0 0 27.2-16.32 73.28 73.28 0 0 0 4.16-26.24v-66.88h73.6a27.84 27.84 0 0 0 29.44-32 26.56 26.56 0 0 0-16-27.2 64 64 0 0 0-23.04-4.16h-64v-75.84a28.16 28.16 0 0 0-32-30.08 26.56 26.56 0 0 0-27.2 15.68 64 64 0 0 0-4.16 24v66.88h-62.72a69.44 69.44 0 0 0-25.6 4.16 26.56 26.56 0 0 0-15.68 27.2 25.92 25.92 0 0 0 16 25.92z" fill="#9333EA" /></svg>
          </div>
        </div>
    );
    const preferences = (
        <div className="w-full border-2 transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
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
        <div className="w-full border-2 transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
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
            <svg className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="5" r="3" stroke="#4F3CE5" strokeWidth="1.5"/>
              <path d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5" stroke="#4F3CE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 10.8717 2 9.87835 2.02008 9M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C3.02355 3.90538 2.71538 4.4272 2.5 5.0699" stroke="#4F3CE5" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <svg className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75778 6.14799C6.84443 5.77187 6.0833 5.45843 5.49196 5.30702C4.91915 5.16036 4.18085 5.07761 3.63766 5.62862C3.09447 6.17962 3.18776 6.91666 3.34259 7.48732C3.50242 8.07644 3.8267 8.83302 4.21583 9.7409L4.86259 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H4.8626L4.21583 14.2591C3.8267 15.167 3.50242 15.9236 3.34259 16.5127C3.18776 17.0833 3.09447 17.8204 3.63766 18.3714C4.18085 18.9224 4.91915 18.8396 5.49196 18.693C6.0833 18.5416 6.84443 18.2281 7.75777 17.852L19.1997 13.1406C19.4053 13.0561 19.6279 12.9645 19.7941 12.867C19.944 12.779 20.3434 12.5192 20.3434 12C20.3434 11.4808 19.944 11.221 19.7941 11.133C19.6279 11.0355 19.4053 10.9439 19.1997 10.8594L7.75778 6.14799Z" fill="#7C3AED"/>
            </svg>
            <svg className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
    );

    return (
        <div>
            <div className="block lg:flex w-11/12 mx-auto my-5">
                <div className="flex w-full lg:w-1/2 justify-center items-center lg:h-[var(--custom-max-height)] overflow-hidden">
                    <div className="text-center p-5">
                        <h1 id="logo-text" className="w-full mb-4 text-3xl lg:text-5xl font-extrabold text-white">Sign up to become a member of</h1>
                        <h1 id="logo-text" className="w-full mb-4 text-5xl lg:text-7xl font-extrabold text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-indigo-600">Volapyk Zero</span>
                        </h1>
                        <a href="/?signup=true"><button className="rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-2 lg:my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">Sign Up</button></a>
                        <a href="/?login=true"><button className="rounded-lg transition ease-in-out duration-300 labil font-semibold w-full p-4 bg-slate-100 text-slate-900 my-2 lg:my-5 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600">Login</button></a>
                        
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="overflow-y-auto lg:max-h-[var(--custom-max-height)]">
                        <div className="grid w-full gap-y-6 text-sm leading-6 px-5">
                            {addService}
                            {preferences}
                            {emailAlerts}
                            {instantCHecker}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }