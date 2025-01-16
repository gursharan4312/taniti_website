import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Card({
  href = "#",
  name = "Item Name",
  address = "address",
  location = "location",
  price = "120",
  imageUrl = "",
}) {
  return (
    <Link href={href} className="inline-block text-left hover:bg-gray-200">
      <div className="bg-gray-300 w-full h-72 flex items-center justify-center">
        {imageUrl ? (<Image
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5l7.5 3 7.5-3m-7.5 3v9.75M3 6l9-3 9 3M3 6v12.75c0 .69.56 1.25 1.25 1.25h15.5c.69 0 1.25-.56 1.25-1.25V6"
            />
          </svg>
        )}
      </div>
      <div className="p-2">
        <h3 className="mt-4 font-normal text-sm tracking-wide uppercase text-gray-700">
          {name}
        </h3>
        <p className="text-sm text-gray-500 my-4">{address}, {location}</p>
        <p className="text-sm font-normal text-gray-700">${price}</p>
      </div>
    </Link>
  );
}
