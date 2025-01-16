import Hero from '../components/hero'
import Feedback from '../components/feedback'
import Link from 'next/link.js';

export default function Home() {
  return (
    <div >
      <Hero />
      <section className="container mx-auto w-4/5 px-4 py-12">
        <div className="md:flex md:space-x-6">
          <div className="bg-gray-50 p-8 md:w-2/3 mb-6 md:mb-0 flex flex-col justify-between">
            <h2 className="text-3xl font-serif italic text-gray-700 mb-4">Tours</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>

            <Link href="/tours"
              className="text-grey-500 mt-4 uppercase inline-block">
              View Tours
            </Link>
          </div>

          <div className="bg-gray-50 p-8 md:w-1/3 flex flex-col items-center text-center justify-between">
            <img
              src="https://via.placeholder.com/100"
              alt="Tour Image"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            <h3 className="text-lg font-serif italic text-gray-700 mb-4">Example Tour</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer.
            </p>

            <a href="#"
              className="text-grey-500 mt-4 uppercase inline-block">
              More...
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feedback />
        <Feedback />
        <Feedback />
      </section>
    </div>
  );
}
