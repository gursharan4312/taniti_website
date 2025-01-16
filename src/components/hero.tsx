import React from 'react'

const hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-200 p-6 flex flex-col justify-between">
        <h2 className="text-3xl font-serif italic text-gray-700 mb-4">About</h2>
        <p className="text-gray-600 mb-10 w-4/5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="">
        <div className="bg-gray-300 p-6 ">
          <h2 className="text-3xl font-serif italic text-gray-700 mb-4">Accommodation</h2>
          <p className="text-gray-600 w-4/5 my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a href="#" className="text-grey-500 mt-4 uppercase inline-block">Learn More</a>
        </div>

        <div className="bg-gray-400 p-6 ">
          <h2 className="text-3xl font-serif italic text-gray-700 mb-4">Transportation</h2>
          <p className="text-gray-600 w-4/5 my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a href="#" className="text-grey-500 mt-4 uppercase inline-block">Learn More</a>
        </div>
      </div>
    </div>
  );
}
  
export default hero
