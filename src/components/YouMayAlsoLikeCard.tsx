"use client"

import { useState, useEffect } from 'react';
import { accomodations, transportation, tours } from '../data.js'
import Link from 'next/link.js';

function getRandomValues(type: string, numValues: number) {
  let arr: any = accomodations;
  if (type === 'accomodations') arr = accomodations;
  else if (type === 'transportation') arr = transportation;
  else if (type === 'tours') arr = tours;

  if (numValues > arr.length) {
    throw new Error("The number of values to select cannot exceed the array length.");
  }

  return arr
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .slice(0, numValues)
    .map((item: any) => item.value);
}

const Card = ({ id, placeholder, name, price, manager }: any) => {
  return (
    <Link href={`./${id}`} className="bg-gray-200">
      <div className="h-32 bg-gray-300 flex items-center justify-center mb-2">
        <span className="text-gray-500">{placeholder}</span>
      </div>
      <div className="p-4">
        <h3 className="text-gray-700 font-semibold">
          {name}
        </h3>
        <p className="text-sm text-gray-500">Crafted by - {manager}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-bold line-through text-red-500">${price.match(/\d+/g) * 1.2}</span>
          <span className="font-bold">${price}</span>
        </div>
      </div>
    </Link>
  )
}

export default function YouMayAlsoLike({ type }: any) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getRandomValues(type, 4))
  }, [type])

  return (
    <section className="px-8 py-8">
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-6 text-center">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {items.map(({ id, name, price, placeholder, description, manager }) =>
          <Card
            key={id}
            id={id}
            name={name}
            placeholder={placeholder}
            price={price}
            description={description}
            manager={manager}
          />)}
      </div>
      <button className="border border-gray-500 px-4 py-2 text-gray-700 hover:bg-gray-100  mx-auto">
        View More Products
      </button>
    </section>
  );
}
