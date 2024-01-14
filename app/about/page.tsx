import React from 'react';
import {CircularProgress} from "@nextui-org/progress";

export default function About() {
  return (
    <main>
      <div className='grid lg:grid-cols-2 w-5/6 mx-auto gap-6 gap-y-10 lg:gap-y-40 mb-40'>
        <div className='lg:order-first flex h-[var(--custom-max-height)] items-center justify-center mb-[80px]'>
          <div className='flex flex-col space-y-5'>
            <h1 id='logo-text' className="text-3xl font-extrabold text-white lg:text-4xl lg:leading-snug">
              Personalized{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">Privacy</span><br/>
              {' '}using the power of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">AI</span>
            </h1>
            <p className="text-md text-slate-400 lg:text-xl font-bold tracking-tight">
              Volapyk (&ldquo;vola-pike&rdquo;) uses machine learning to automate the processing of privacy policies and terms of service. Our goal is to make privacy a univeral right, and we believe that starts with awareness. All consumers should be able to make an educated choice about how their data is used.
            </p>
            <a href="/" className='rounded-lg transition ease-in-out duration-300 labil font-semibold w-fit p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600'>Explore Scored Services</a>
          </div>
        </div>
        <div className='flex lg:h-[var(--custom-max-height)] items-center justify-center'>
          <div className="hidden lg:grid grid-flow-row grid-rows-3 grid-cols-3 gap-8">
            <div className="transform scale-110 -rotate-6 -translate-x-10 translate-y-10">
              <img src="/images/service-icons/1.webp" className="h-32 w-32 rounded-xl" alt="" loading="lazy"/>
            </div>
            <div className="transform scale-75 rotate-6 -translate-y-10">
              <img src="/images/service-icons/2.webp" className="h-32 w-32 rounded-xl" alt="" loading="lazy"/>
            </div>
            <div className="transform scale-125 translate-x-10 translate-y-10">
              <img src="/images/service-icons/6.webp" className="h-32 w-32 rounded-xl" alt="" loading="lazy"/>
            </div>
            <div/>
            <div className="transform scale-150">
              <img src="/images/logo.svg" className="h-32 w-32 rounded-lg" alt="" loading="lazy"/>
            </div>
            <div/>
            <div className="transform scale-90 rotate-6 -translate-x-10 -translate-y-10">
              <img src="/images/service-icons/17.webp" className="h-32 w-32 rounded-xl" alt="" loading="lazy"/>
            </div>
            <div className="transform scale-110 translate-y-10">
              <img src="/images/service-icons/14.webp" className="h-32 w-32 rounded-xl" alt="" loading="lazy"/>
            </div>
            <div className="transform scale-85 -rotate-6 translate-x-10 -translate-y-10">
              <img src="/images/service-icons/8.webp" className="h-32 w-32 rounded-xl" alt="" loading="lazy"/>
            </div>
          </div>
        </div>
        <div className='lg:order-1 grid grid-cols-2 gap-6'>
          <div className='flex items-center justify-center'>
            <h1 id='logo-text' className="font-extrabold text-white text-xl lg:text-4xl lg:leading-snug">
              Current Progress
            </h1>
          </div>
          <div className='flex items-center justify-center rounded-lg bg-gradient-to-r to-purple-500 from-indigo-500 hover:scale-105 ease-in-out duration-300'>
            <div className='my-10 text-center space-y-2'>
              <h2 className='text-white text-4xl lg:text-6xl font-bold'>BETA</h2>
              <p className='text-slate-900 font-bold'>Project Phase</p>
            </div>
          </div>
        </div>
        <div className='lg:order-2 grid grid-cols-2 gap-6'>
          <div className='flex items-center justify-center rounded-lg bg-gradient-to-r to-purple-500 from-indigo-500 hover:scale-105 ease-in-out duration-300'>
            <div className='text-center space-y-2'>
              <h2 className='text-white text-4xl lg:text-6xl font-bold'>Aug 1</h2>
              <p className='text-slate-900 font-bold'>Planned Final Launch</p>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-lg bg-gradient-to-r to-purple-500 from-indigo-500 hover:scale-105 ease-in-out duration-300'>
            <div className='my-10 text-center space-y-2'>
              <h2 className='text-white text-4xl lg:text-6xl font-bold'>100</h2>
              <p className='text-slate-900 font-bold'>Scored Services</p>
            </div>
          </div>
        </div>
        <div className='lg:order-4 flex items-center justify-center mt-40 lg:mt-0'>
          <div className='flex flex-col space-y-5'>
            <h1 id='logo-text' className="text-3xl font-extrabold text-white lg:text-4xl lg:leading-snug">
              A Simple Scoring Model
            </h1>
            <p className="text-md text-slate-400 lg:text-xl font-bold tracking-tight">
              Every service is given an overall score out of ten. The overall score comes from averaging the scores of eight privacy categories. Service cards on the homepage have the eight categories color coded using the key shown. Within each service page, categories can be toggled to show the individual privacy cases that make up the category score.
            </p>
            <a href="/docs/Log_of_Project_Changes.txt" className='rounded-lg transition ease-in-out duration-300 labil font-semibold w-fit p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600'>Log of Project Changes</a>
          </div>
        </div>
        <div className='lg:order-3 flex items-center justify-center lg:pr-10'>
          <div className='grid lg:grid-cols-2 grid-flow-row gap-8'>
            <div className='flex flex-col justify-center'>
              <div className='text-white font-bold text-center text-xl mb-4'>
                Category Color Key
              </div>
              <div className={`flex transition ease-in-out duration-250 text-white text-sm lg:text-base bg-green-600 hover:bg-opacity-75 border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
                A category where the service does well
              </div>
              <div className={`flex transition ease-in-out duration-250 text-white text-sm lg:text-base bg-gray-600 hover:bg-opacity-75 border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
                A category where the service does neither good or bad
              </div>
              <div className={`flex transition ease-in-out duration-250 text-white text-sm lg:text-base bg-orange-500 hover:bg-opacity-75 border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
                A category where the service could use improvement
              </div>
              <div className={`flex transition ease-in-out duration-250 text-white text-sm lg:text-base bg-red-500 hover:bg-opacity-75 border border-transparent overflow-hidden rounded-lg p-2 mt-1`}>
                A category where the service does very poorly
              </div>
            </div>
            <div className='p-10'>
              <CircularProgress
                aria-label="Overall Service Score"
                classNames={{
                  svg: "w-full h-full drop-shadow-md",
                  indicator: "stroke-green-500",
                  track: "stroke-gray-700",
                  value: "text-4xl font-semibold text-green-500",
                }}
                formatOptions={{style: 'decimal'}}
                value={8.5}
                maxValue={10}
                strokeWidth={4}
                showValueLabel={true}
              />
              <p className='text-center text-white text-xl font-bold mt-4'>Overall Service Score</p>
            </div>
          </div>
        </div>
        <div className='lg:order-5 flex items-center justify-center mt-40 lg:mt-0'>
          <div className='flex flex-col space-y-5'>
            <h1 id='logo-text' className="text-3xl font-extrabold text-white lg:text-4xl lg:leading-snug">
              Our Team
            </h1>
            <p className="text-md text-slate-400 lg:text-xl font-bold tracking-tight">
              We strive to integrate as many perspectives as possible into our final product. We have worked with educational leaders at Columbia, Yale, the University of Washington and much more. We have also recieved input from leaders in cybersecurity through professional organizations like the ISSA and ISC2. We would love to hear your thoughts as well!
            </p>
            <a href="mailto:support@volapyk.net" className='rounded-lg transition ease-in-out duration-300 labil font-semibold w-fit p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600'>Contact Us</a>
          </div>
        </div>
        <div className='lg:order-6 flex items-center justify-center'>
          <figure className="w-1/2 mr-2">
            <img className="max-h-96 max-w-full rounded-lg mx-auto" src="/images/davin.jpeg" alt="image description"></img>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Davin</figcaption>
          </figure>
          <figure className="w-1/2 ml-2">
            <img className="max-h-96 max-w-full rounded-lg mx-auto" src="/images/abhay.jpeg" alt="image description"></img>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Abhay</figcaption>
          </figure>
        </div>
        <div className='lg:order-8 flex items-center justify-center mt-40 lg:mt-0'>
          <div className='flex flex-col space-y-5'>
            <h1 id='logo-text' className="text-3xl font-extrabold text-white lg:text-4xl lg:leading-snug">
              Company Roadmap
            </h1>
            <p className="text-md text-slate-400 lg:text-xl font-bold tracking-tight">
              Volapyk means language of the world, and we are committed to making privacy understandable for the masses in beta and beyond. Here are some of our longer term intitiatives. For status updates on our largest projects look at the Member Benefits page.
            </p>
            <a href="/member-benefits" className='rounded-lg transition ease-in-out duration-300 labil font-semibold w-fit p-4 bg-slate-100 text-slate-900 border-2 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600'>Member Benefits</a>
          </div>
        </div>
        <div className='lg:order-7 flex flex-col items-center justify-center lg:pr-10'>
          <div className="relative pl-8 py-6 group">
              <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Short Term</div>
              <div className="flex mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"/>
              <div className="text-slate-400">Add case pages to show specific quotes backing each case for every service; Establish strong scoring formula and review cases with network; Improve ease of use on the preferences selection</div>
          </div>          
          <div className="relative pl-8 py-6 group">
              <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Medium Term</div>
              <div className="flex mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"/>
              <div className="text-slate-400">Expand from 17 Alpha services to 7500+ final services; User selects case ratings for personalized service scores; Send alerts for positive or negative changes to service scores</div>
          </div>          
          <div className="relative pl-8 py-6 group">
              <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Long Term</div>
              <div className="flex mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5"/>
              <div className="text-slate-400">Enable instant checker for web links; Create browser extension; Recommend alternative services</div>
          </div>
        </div>
      </div>
    </main>
  );
}
