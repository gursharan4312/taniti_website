import React from 'react'
import { transportation } from '../../../data'
import ImageGallery from '../../../components/ImageGallery'
import YouMayAlsoLike from '../../../components/YouMayAlsoLikeCard'

const page = ({ params }: any) => {
  const { name, manager } = transportation.find(item => item.id === params.id) || {};
  return (
    <div>
      <section className="w-full bg-gray-300 h-64 flex flex-col justify-end items-center">
        <div className="p-8">
          <h2 className="text-4xl text-white font-bold">{name}</h2>
        </div>
      </section>
      <section className="px-8 py-6 w-4/5 mx-auto">
        <p className="text-gray-700 mb-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
      <ImageGallery manager={manager} />
      <section className="px-8 py-6">
        <p className="text-gray-700 mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
        <div className="text-2xl font-bold bg-gray-200 w-fit px-4 py-2">$120/night</div>
      </section>
      <YouMayAlsoLike type="transportation" />
    </div>
  )
}

export default page
