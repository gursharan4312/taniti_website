import React from 'react'

const PageHeader = ({ name = "", imageUrl = "" }: { name?: string, imageUrl?: string }) => {
  return (
    <section className="relative w-full bg-gray-300 h-64 flex flex-col justify-end items-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="p-8">
        <h2 className="text-4xl bold italic font-serif text-white leading-snug z-10 relative">{name}</h2>
      </div>
    </section>
  )
}

export default PageHeader
