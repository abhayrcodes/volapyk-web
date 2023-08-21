// About.js
import React from 'react';
import Navbar from '@/components/Navbar';

export default function About() {
  const aboutGrades = (
    <div className="border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
      <p className="text-md lg:text-xl font-bold tracking-tight mb-5">
        Volapyk (&quot;vola-pike&quot;) uses machine learning to automate the processing of privacy policies and terms of service. Each service is then given an easy to understand grade based on its documents.
      </p>
      <table className='w-full'>
        <tbody>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                Grade A
              </div>
              {' '}-&gt;
            </td>
            <td className='p-1'>
              Respects user privacy and data 
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                Grade B
              </div>
              {' '}-&gt;
            </td>
            <td className='p-1'>
              Tends to respect privacy with transparent issues 
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                Grade C
              </div>
              {' '}-&gt;
            </td>
            <td className='p-1'>
              Can respect privacy in certain areas, lacks transparency
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                Grade D
              </div>
              {' '}-&gt;
            </td>
            <td className='p-1'>
              Lacks privacy and transparency, issues should not be taken lightly
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                Grade E
              </div>
              {' '}-&gt;
            </td>
            <td className='p-1'>
              Disregards user privacy with invasive and harmful practices
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const aboutCases = (
    <div className="border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
      <p className="text-md lg:text-xl font-bold tracking-tight mb-5">
        For every sentence marked as relevant by our machine learning model, the probabalility of 250+ privacy related cases are calculated. The top 5 of these cases appear on each service card, color-coded by class.
      </p>
      <div className={`relative transition ease-in-out duration-250 text-white bg-green-600 hover:bg-opacity-75 font-sans block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Good: A positive case that signifies protection of user privacy
      </div>
      <div className={`relative transition ease-in-out duration-250 text-white bg-gray-600 hover:bg-opacity-75 font-sans block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Neutral: A case that neither helps nor hurts the final grade but is important information
      </div>
      <div className={`relative transition ease-in-out duration-250 text-white bg-orange-500 hover:bg-opacity-75 font-sans block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Bad: A negative case that signifies disrespect for user privacy
      </div>
      <div className={`relative transition ease-in-out duration-250 text-white bg-red-500 font-sans hover:bg-opacity-75 block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Blocker: A triple negative case signifying a violation of privacy rights
      </div>
    </div>
  );

  const aboutContributors = (
    <div className="border-2 transition w-full ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
      <p className="text-md lg:text-xl text-center font-bold tracking-tight mb-5">
        Our Team
      </p>
      <div className='flex'>
        <figure className="w-1/2 mr-2">
          <img className="max-h-80 max-w-full rounded-lg mx-auto" src="/images/davin.jpeg" alt="image description"></img>
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Davin</figcaption>
        </figure>
        <figure className="w-1/2 ml-2">
          <img className="max-h-80 max-w-full rounded-lg mx-auto" src="/images/abhay.jpeg" alt="image description"></img>
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Abhay</figcaption>
        </figure>
      </div>
    </div>
  );

  const aboutRoadmap = (
    <div className="border-2 transition ease-in-out mb-6 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
      <p className="text-md lg:text-xl font-bold tracking-tight mb-5">
        Volapyk means &quot;language of the world&quot;, this is how we will make privacy understandable to the masses in beta and beyond.
      </p>
      <p className='font-bold text-purple-500'>Short Term:</p>
      <ul className='pl-4 mb-3 list-disc w-full'>
        <li>Add case pages to show specific quotes backing each case for every service</li>
        <li>Add user login portal (ability to follow companies, get alerts, personalize scoring, etc.)</li>
        <li>Speed up AI processing and transer database to server</li>
      </ul>
      <p className='font-bold text-purple-500'>Medium Term:</p>
      <ul className='pl-4 mb-3 list-disc w-full'>
        <li>Enable the Add a Service feature for crowdsourcing services</li>
        <li>User selects case ratings for personalized service scores</li>
        <li>Send alerts for positive or negative changes to service scores</li>
      </ul>
      <p className='font-bold text-purple-500'>Long Term:</p>
      <ul className='pl-4 list-disc w-full'>
        <li>Expand from 14 Alpha services to 7500+ in the final product</li>
        <li>Create browser extension</li>
        <li>Recommend alternative services</li>
      </ul>
    </div>
  );

  return (
    <html>
      <body>
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="w-5/6">
            <h1 className="mt-20 mb-10 text-3xl font-extrabold text-white md:text-3xl lg:text-5xl text-center">
              Simple{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">
                Privacy
              </span>
              {' '}through the power of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">
                AI
              </span>
            </h1>
            <div className="border-2 transition ease-in-out mb-7 block p-6 rounded-lg text-white shadow border-red-700">
              <p className='text-red-400 font-bold text-center text-2xl'>NOTE: We are currently in Public Alpha, grades and appearance are all subject to change.</p>
            </div>

            <table className="w-full gap-4 mb-4 text-sm leading-6 hidden lg:grid">
              <tbody>
                <tr className='flex'>
                  <td className='pr-3 flex w-1/2'>
                    {aboutGrades}
                  </td>
                  <td className='pl-3 flex w-1/2'>
                    {aboutCases}
                  </td>
                </tr>
                <tr className='flex'>
                  <td className='pr-3 flex w-1/2'>
                    {aboutContributors}
                  </td>
                  <td className='pl-3 flex w-1/2'>
                    {aboutRoadmap}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full gap-4 text-sm leading-6 lg:hidden">
              <tbody>
                <tr>
                  <td className='flex'>
                    {aboutGrades}
                  </td>
                  <td className='flex'>
                    {aboutCases}
                  </td>
                  <td className='flex'>
                    {aboutContributors}
                  </td>
                  <td className='flex'>
                    {aboutRoadmap}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full gap-4 text-sm mb-10 leading-6 grid-template-column justify-center text-white py-3">
              <tbody>
                <tr>
                  <td className='w-1/3'>
                    <a href="/docs/Log_of_Project_Changes.txt" className="border-2 mr-5 lg:mr-20 py-3 px-1 group transition text-center font-medium ease-in-out hover:shadow-lg bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600 hover:border-indigo-500 block rounded-lg shadow border-none">
                      View Project Timeline
                    </a>
                  </td>
                  <td className='w-1/3'>
                    <a href="/" className="border-2 p-6 group transition text-center text-md font-bold ease-in-out hover:shadow-lg bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600 hover:border-indigo-500 block rounded-lg shadow border-none">
                      EXPLORE SCORED SERVICES
                    </a>
                  </td>
                  <td className='w-1/3'>
                    <a href="https://gofundme.com/f/volapyk" className="border-2 ml-5 lg:ml-20 py-3 px-1 group transition text-center font-medium ease-in-out hover:shadow-lg bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600 hover:border-indigo-500 block rounded-lg shadow border-none">
                      Fund Future Growth
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  );
}
