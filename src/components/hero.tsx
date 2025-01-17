import React from 'react'
import Link from 'next/link.js';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative bg-gray-200 p-6 flex flex-col justify-between  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("/images/island.jpg")` }}>
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <h2 className="text-3xl font-serif italic text-white mb-4 z-10">About</h2>
        <p className="text-white mb-10 w-4/5 z-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="">
        <div className="relative bg-gray-300 p-6 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url("/images/hotel4.jpg")` }}>
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <h2 className="relative text-3xl font-serif italic text-white mb-4 z-10">Accommodation</h2>
          <p className="relative text-white w-4/5 my-5 z-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link href="/accomodations" className="relative text-white mt-4 uppercase inline-block">Learn More</Link>
        </div>

        <div className="relative bg-gray-400 p-6 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url("/images/plane2.jpg")` }}>
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <h2 className="relative text-3xl font-serif italic text-white mb-4 z-10">Transportation</h2>
          <p className="relative text-white w-4/5 my-5 z-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link href="/transportation" className="relative text-white mt-4 uppercase inline-block z-10">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
