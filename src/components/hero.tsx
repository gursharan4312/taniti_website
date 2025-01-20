import React from 'react'
import Link from 'next/link.js';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative bg-gray-200 p-6 flex flex-col justify-between  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("/images/island.jpg")` }}>
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <h2 className="text-3xl font-serif italic text-white mb-4 z-10">About</h2>
        <p className="text-white mb-10 w-4/5 z-10">Taniti is a breathtaking island located in the heart of the Pacific. Boasting diverse wildlife and spectacular natural landscapes, it is an ideal getaway for adventurers and those in search of tranquility. From its dramatic coastlines to its verdant mountains, Taniti promises an unforgettable journey for every visitor.</p>
      </div>

      <div className="">
        <div className="relative bg-gray-300 p-6 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url("/images/hotel4.jpg")` }}>
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <h2 className="relative text-3xl font-serif italic text-white mb-4 z-10">Accommodation</h2>
          <p className="relative text-white w-4/5 my-5 z-10">Taniti provide various accomodation options from 5 star hotels, airbnbs, motels and more for everyone&apos;s needs</p>
          <Link href="/accomodations" className="relative text-white mt-4 uppercase inline-block">Learn More</Link>
        </div>

        <div className="relative bg-gray-400 p-6 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url("/images/plane2.jpg")` }}>
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <h2 className="relative text-3xl font-serif italic text-white mb-4 z-10">Transportation</h2>
          <p className="relative text-white w-4/5 my-5 z-10">Reaching Taniti and exploring the island is a breeze, thanks to a range of transportation options catering to every traveler. Whether you arrive by air or sea, your adventure kicks off the moment you set foot on the island. Once there, immerse yourself in Taniti&apos;s charm—from the vibrant streets of Taniti City to its serene beaches and verdant rainforests. With accessible options like public buses, rental bikes, and taxis, you can uncover Taniti&apos;s treasures at your own pace. Everything you need to navigate the island is right here.</p>
          <Link href="/transportation" className="relative text-white mt-4 uppercase inline-block z-10">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
