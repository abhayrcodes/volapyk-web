'use client'

// About.js
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function About() {

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
              <p className='text-red-400 font-bold text-center text-2xl'>NOTE: We are currently in Private Alpha, grades and appearance are all subject to change.</p>
            </div>
            <table className="w-full gap-4 text-sm leading-6 grid">
              <tbody>
                <tr className='flex'>
                  <td className='pr-3 w-1/2 flex'>
                    <div className="border-2 transition ease-in-out mb-7 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
                      <p className="text-xl font-bold tracking-tight mb-5">
                        Volapyk (&quot;vola-pike&quot;) uses machine learning to automate the processing of privacy policies and terms of service. Each service is then given an easy to understand grade based on its documents.
                      </p>
                      <div>
                        <div>
                          <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                            Grade A
                          </div>
                          {' '}-&gt; Respects user privacy and data 
                        </div>
                        <div>
                          <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                            Grade B
                          </div>
                          {' '}-&gt; Tends to respect privacy with transparent issues
                        </div>
                        <div>
                          <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                            Grade C
                          </div>
                          {' '}-&gt; Can respect privacy in certain areas, lacks transparency
                        </div>
                        <div>
                          <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                            Grade D
                          </div>
                          {' '}-&gt; Lacks privacy and transparency, issues should not be taken lightly
                        </div>
                        <div>
                          <div className="h-8 mb-2 p-2 border border-green-400 rounded-lg items-center justify-center text-green-400 inline-flex">
                            Grade E
                          </div>
                          {' '}-&gt; Disregards user privacy with invasive and harmful practices
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='pl-3 w-1/2 flex'>
                    <div className="border-2 transition ease-in-out mb-7 hover:shadow-lg hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg text-white shadow bg-slate-900 border-gray-700">
                      <p className="text-xl font-bold tracking-tight mb-5">
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
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full gap-4 text-sm mb-10 leading-6 grid-template-column justify-center text-white py-3">
              <tbody>
                <tr>
                  <td className='w-1/3'>
                    <a href="/docs/Log_of_Project_Changes.txt" className="border-2 mr-20 py-3 group transition text-center font-medium ease-in-out hover:shadow-lg bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600 hover:border-indigo-500 block rounded-lg shadow border-none">
                      View Project Timeline
                    </a>
                  </td>
                  <td className='w-1/3'>
                    <a href="/" className="border-2 mx-5 group transition text-center text-md font-bold ease-in-out hover:shadow-lg bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600 hover:border-indigo-500 block p-6 rounded-lg shadow border-none">
                      EXPLORE SCORED SERVICES
                    </a>
                  </td>
                  <td className='w-1/3'>
                    <a href="https://gofundme.com/f/volapyk" className="border-2 ml-20 py-3 group transition text-center font-medium ease-in-out hover:shadow-lg bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-600 hover:border-indigo-500 block rounded-lg shadow border-none">
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

/*
Welcome to Volapyk. We are a project that harnesses the power of machine learning to revolutionize the way people interact with privacy policies and terms of service. Our mission is to make these complex and often convoluted documents accessible and understandable to everyone.

At Volapyk, we understand the frustration and confusion that can arise when faced with lengthy and complicated legal jargon. That's why we have developed an innovative system that reads, analyzes, and scores privacy policies and terms of service, providing quick and easily understandable summaries. By simplifying these documents, we empower individuals to make informed decisions about their privacy and data security.

The name Volapyk perfectly captures our vision. Derived from the words "volapük" meaning "language" and "the world," it represents our commitment to bridging the gap between incomprehensible legal language and the general public. We believe that everyone should have access to transparent information, regardless of their expertise in legal matters.

Our cutting-edge machine learning algorithms carefully process privacy policies and terms of service in an unbiased manner, extracting key information and generating concise scores. These scores enable users to quickly grasp the implications of the document without having to spend hours deciphering its intricacies. Volapyk transforms the unreadable into something accessible, providing a valuable service to the masses.

Join us on this exciting journey as we bring transparency and simplicity to the world of legal documents. Our team of machine learning and privacy enthusiasts is committed to continually improving our algorithms and expanding our database to cover a wide range of policies and terms.

Discover the power of Volapyk and make informed decisions effortlessly. Together, we can unlock the language of the world and empower individuals to protect their rights and privacy.


*/