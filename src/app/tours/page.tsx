import React from 'react'
import Card from '../../components/card'
import { tours } from '../../data';

const Tours = () => {
  return (
    <div className="flex flex-col font-sans">
      <div className="w-full h-64 bg-gray-300 flex flex-col items-center justify-end pb-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-700">
          Transporation
        </h1>
      </div>

      <div className="px-4 md:px-8 mt-8 max-w-5xl mx-auto">
        <p className="text-gray-600 text-center md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto mt-8 px-4 md:px-8 ">
        <aside className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-8 bg-gray-100 h-fit">
          <div className="p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Category Filter</h2>
            <ul className="space-y-1 text-gray-700">
              <li>Category One</li>
              <li>Category Two</li>
              <li>Category Three</li>
              <li>Category Four</li>
              <li>Category Five</li>
            </ul>
          </div>
          <div className=" p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Price Filter</h2>
            <ul className="space-y-1 text-gray-700">
              <li>Less than $50</li>
              <li>$50 - $100</li>
              <li>$101 - $200</li>
              <li>$201 - $300</li>
              <li>$301 and above</li>
            </ul>
          </div>
          <div className="p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Other Filters</h2>
            <ul className="space-y-1 text-gray-700">
              <li>Filter one</li>
              <li>Filter two</li>
              <li>Filter three</li>
            </ul>
          </div>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 hover:bg-gray-200 m-4">
            Reset Filters
          </button>
        </aside>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours.map(({ id, name, address, location, price }, i) => (
              <Card key={i} href={`tours/${id} `} name={name} address={address} location={location} price={price} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-3 rounded-md">
              LOAD MORE...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tours
