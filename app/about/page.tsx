import React from 'react';
import NumCountUp from '@/components/NumCountUp';

export default function About() {
  const aboutCard: string = 'w-full h-full p-6 rounded-lg border-2 border-gray-700 transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500'

  const aboutGrades = (
    <div className={aboutCard}>
      <p className="text-md lg:text-xl font-bold tracking-tight mb-5">
        Volapyk (&ldquo;vola-pike&rdquo;) uses machine learning to automate the processing of privacy policies and terms of service. Each service is then given an easy to understand grade based on its documents.
      </p>
      <table className='w-full'>
        <tbody>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-green-500 rounded-lg items-center justify-center text-green-500 inline-flex">
                Grade A
              </div>
              {' '}➔
            </td>
            <td className='p-1'>
              Respects user privacy and data 
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-lime-500 rounded-lg items-center justify-center text-lime-500 inline-flex">
                Grade B
              </div>
              {' '}➔
            </td>
            <td className='p-1'>
              Tends to respect privacy with transparent issues 
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-yellow-500 rounded-lg items-center justify-center text-yellow-500 inline-flex">
                Grade C
              </div>
              {' '}➔
            </td>
            <td className='p-1'>
              Can respect privacy in certain areas, lacks transparency
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-orange-500 rounded-lg items-center justify-center text-orange-500 inline-flex">
                Grade D
              </div>
              {' '}➔
            </td>
            <td className='p-1'>
              Lacks privacy and transparency, issues should not be taken lightly
            </td>
          </tr>
          <tr className='flex'>
            <td className='flex-shrink-0'>
              <div className="h-8 mb-2 p-2 border border-red-500 rounded-lg items-center justify-center text-red-500 inline-flex">
                Grade E
              </div>
              {' '}➔
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
    <div className={aboutCard}>
      <p className="text-md lg:text-xl font-bold tracking-tight mb-5">
        For every sentence marked as relevant by our machine learning model, the probabalility of 250+ privacy related cases are calculated. The top 5 of these cases appear on each service card, color-coded by class.
      </p>
      <div className={`relative transition ease-in-out duration-250 text-white bg-green-600 hover:bg-opacity-75 block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Good: A positive case that signifies protection of user privacy
      </div>
      <div className={`relative transition ease-in-out duration-250 text-white bg-gray-600 hover:bg-opacity-75 block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Neutral: A case that neither helps nor hurts the final grade, but is important information
      </div>
      <div className={`relative transition ease-in-out duration-250 text-white bg-orange-500 hover:bg-opacity-75 block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Bad: A negative case that signifies disrespect for user privacy
      </div>
      <div className={`relative transition ease-in-out duration-250 text-white bg-red-500 hover:bg-opacity-75 block border border-transparent overflow-hidden rounded-lg p-2 my-1`}>
        Blocker: A triple negative case signifying a violation of privacy rights
      </div>
    </div>
  );

  const aboutContributors = (
    <div className={aboutCard}>
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
    <div className={aboutCard}>
      <p className="text-md lg:text-xl font-bold tracking-tight mb-5">
        Volapyk means &ldquo;language of the world&rdquo;, this is how we will make privacy understandable to the masses in beta and beyond.
      </p>
      <p className='font-bold text-purple-500'>Short Term:</p>
      <ul className='pl-4 mb-3 list-disc w-full'>
        <li>Add case pages to show specific quotes backing each case for every service</li>
        <li>Establish strong scoring formula and review cases with network</li>
        <li>Improve ease of use on the preferences selection</li>
      </ul>
      <p className='font-bold text-purple-500'>Medium Term:</p>
      <ul className='pl-4 mb-3 list-disc w-full'>
        <li>Expand from 17 Alpha services to 7500+ final services</li>
        <li>User selects case ratings for personalized service scores</li>
        <li>Send alerts for positive or negative changes to service scores</li>
      </ul>
      <p className='font-bold text-purple-500'>Long Term:</p>
      <ul className='pl-4 list-disc w-full'>
        <li>Enable instant checker for web links</li>
        <li>Create browser extension</li>
        <li>Recommend alternative services</li>
      </ul>
    </div>
  );

  const aboutSpeed = (
    <div className="h-full flex w-full justify-between space-x-6">
      <div className={aboutCard}>
        <p className='text-orange-400 font-sans font-bold text-center text-4xl mb-2'>100x</p>
        <p className='text-white font-sans font-bold text-center lg:text-lg'>Faster than a human</p>
      </div>
      <div className={aboutCard}>
        <p className='text-green-400 font-sans font-bold text-center text-4xl mb-2'>0.1s</p>
        <p className='text-white font-sans font-bold text-center lg:text-lg'>To process a sentence</p>
      </div>
    </div>
  );

  const aboutModels = (
    <div className="h-full flex w-full justify-between space-x-6">
      <div className={aboutCard}>
        <p className='text-blue-400 font-sans font-bold text-center text-4xl mb-2'>200+</p>
        <p className='text-white font-sans font-bold text-center lg:text-lg'>Privacy Assessments</p>
      </div>
      <div className={aboutCard}>
        <p className='text-red-400 font-sans font-bold text-center text-4xl mb-2'>80k</p>
        <p className='text-white font-sans font-bold text-center lg:text-lg'>Datapoints for training</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-5/6">
          <h1 id='logo-text' className="mt-20 mb-10 text-3xl font-extrabold text-white lg:text-4xl lg:leading-snug text-center">
            Personalized{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">
              Privacy
            </span>
            {' '}through the power of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">
              AI
            </span>
          </h1>
          <div className="grid lg:grid-cols-3 border-2 transition ease-in-out mb-7 p-6 rounded-lg text-white shadow border-red-700">
            <p className='text-red-400 font-sans mb-3 lg:mb-0 font-bold text-center text-2xl'>Project Phase: Alpha</p>
            <p className='text-red-400 font-sans mb-3 lg:mb-0 font-bold text-center text-2xl'>Beta Launch: December 1, 2023</p>
            <p className='text-red-400 font-sans font-bold text-center text-2xl'>Scored Services: <NumCountUp number={17}/></p>
          </div>

          <div className="grid lg:grid-cols-2 w-full max-w-screen overflow-hidden gap-6 mb-10 text-sm text-white leading-6">
            <div>
              {aboutGrades}
            </div>
            <div>
              {aboutCases}
            </div>
            <div>
              {aboutSpeed}
            </div>
            <div>
              {aboutModels}
            </div>
            <div>
              {aboutContributors}
            </div>
            <div>
              {aboutRoadmap}
            </div>
          </div>

          <table className="w-full gap-4 text-sm mb-10 leading-6 grid-template-column justify-center text-white py-3">
            <tbody>
              <tr>
                <td className='w-1/3'>
                  <a href="/docs/Log_of_Project_Changes.txt" className="border-2 mr-5 lg:mr-20 py-3 px-1 group transition text-center font-bold ease-in-out bg-slate-100 text-slate-900 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600 block rounded-lg shadow">
                    View Project Timeline
                  </a>
                </td>
                <td className='w-1/3'>
                  <a href="/" className="border-2 p-6 group transition text-center text-md font-bold ease-in-out bg-slate-100 text-slate-900 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600 block rounded-lg shadow">
                    EXPLORE SCORED SERVICES
                  </a>
                </td>
                <td className='w-1/3'>
                  <a href="https://gofundme.com/f/volapyk" className="border-2 ml-5 lg:ml-20 py-3 px-1 group transition text-center font-bold ease-in-out bg-slate-100 text-slate-900 border-slate-100 hover:text-slate-100 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-600 block rounded-lg shadow">
                    Fund Future Growth
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
