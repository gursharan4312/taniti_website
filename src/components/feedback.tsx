import React from 'react'

const feedback = () => {
  return (
    <div className="relative bg-gray-200 h-80 p-6 w-100">
      <div className="absolute left-6 flex items-start" style={{ top: "-40px" }}>
        <div className="w-12 h-12 rounded-full bg-gray-700 mr-3"></div>
        <blockquote className="italic font-serif text-gray-700 text-sm leading-snug">
          <span className="font-bold text-lg">“</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </blockquote>
      </div>

      <div className="absolute bottom-6 left-6 w-fit">
        <h3 className="uppercase text-sm text-gray-700 tracking-wide mb-2">
          This is title of the tour featured
        </h3>
        <a href="#" className="text-grey-500 mt-4 uppercase inline-block">
          Read More
        </a>
      </div>
    </div>
  )
}

export default feedback
