'use client'

// About.js
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function About() {
  const paragraphs = [
    "Paragraph 1",
    "Paragraph 2",
    "Paragraph 3",
    // Add more paragraphs as needed
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };

  // Attach the scroll event listener for the Client Component
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-5/6">
          <h1 className="mt-20 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-5xl text-center">
            Everyone has a right to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-indigo-500">
              Transparency & Simplicity
            </span>
          </h1>
          <div className="h-80 overflow-y-scroll scroll-smooth relative">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="absolute w-full text-white"
                style={{
                  top: `${index * 100}%`,
                  opacity: Math.max(1 - Math.abs((scrollPosition - index * 100) / 200), 0),
                  transition: 'opacity 0.2s',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
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