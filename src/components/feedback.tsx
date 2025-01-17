import Link from 'next/link'
import React from 'react'

const feedback = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative bg-gray-200 h-80 p-6 w-100  bg-no-repeat bg-center bg-cover relative" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="absolute left-6 flex items-start" >
        <div className="w-12 h-12 rounded-full bg-gray-700 mr-3"></div>
        <blockquote className="italic font-serif text-white text-sm leading-snug">
          <span className="font-bold text-lg ">“</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </blockquote>
      </div>

      <div className="absolute bottom-6 left-6 w-fit"
      >
        <h3 className="uppercase text-sm text-white tracking-wide mb-2">
          This is title of the tour featured
        </h3>
        <Link href="/tours" className="text-white mt-4 uppercase inline-block">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default feedback
