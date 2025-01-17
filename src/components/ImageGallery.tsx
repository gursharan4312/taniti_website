"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { getRandomValues } from "./YouMayAlsoLikeCard";


export default function ImageGallery({ manager, type }: any) {
  const [images, setImages] = useState<any[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const arr = getRandomValues(type, 5);
    setImages(arr.map((item: any) => ({ src: item.imageUrl, alt: item.name })))
  }, [type])

  return (
    <>
      <section className="md:flex px-10 gap-4">
        <div className="md:w-2/3">
          <div className="mx-auto max-w-4xl p-4">
            <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center mb-4">
              <Image
                src={images[selectedIndex]?.src || ""}
                alt={images[selectedIndex]?.alt || ""}
                className="max-h-full object-cover"
                width={800}
                height={400}
                quality={100}
              />
            </div>

            <div className="flex gap-4 justify-center">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(idx)}
                  className="cursor-pointer"
                >
                  <Image
                    src={img?.src || ""}
                    alt={img?.alt || ""}
                    className={`
                w-24 h-16 object-cover border 
                transition-transform duration-200 
                hover:scale-105 
                ${idx === selectedIndex ? 'border-blue-500' : 'border-transparent'}
              `}
                    width={400}
                    height={400}
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>        </div>
        <div className="md:w-1/3">
          <div className="p-6 bg-white shadow-md md:my-6">
            <h3 className="text-lg font-semibold">Mr. {manager}</h3>
            <p className="text-sm text-gray-500 mb-2">MANAGER</p>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
