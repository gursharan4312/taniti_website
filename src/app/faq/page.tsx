"use client"
import React, { useState } from 'react'
import { faqs } from '../../data'

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col font-sans">
      <main className="bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
            <p className="text-gray-500 mt-1">
              Here are some common questions and answers about our services.
            </p>
          </div>
        </header>

        <section className="max-w-3xl mx-auto px-4 py-10">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between focus:outline-none"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h2>
                <span className="text-gray-500 ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-2 text-gray-600 border-t pt-2">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Page
