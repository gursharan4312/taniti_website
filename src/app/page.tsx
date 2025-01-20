import Hero from '../components/hero'
import Feedback from '../components/feedback'
import Link from 'next/link.js';
import Image from 'next/image';

export default function Home() {
  return (
    <div >
      <Hero />
      <section className="container mx-auto w-4/5 px-4 py-12">
        <div className="md:flex md:space-x-6">
          <div className="bg-gray-50 p-8 md:w-2/3 mb-6 md:mb-0 flex flex-col justify-between bg-no-repeat bg-center bg-cover relative"
            style={{ backgroundImage: `url("/images/tour2.jpg")` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <h2 className="relative text-3xl font-serif italic text-white mb-4">Tours</h2>

            <p className="text-white z-10 leading-relaxed mb-4">
              Discover the true essence of Taniti by venturing beyond its renowned beaches. Wander through the picturesque streets of Taniti City or soak in the tranquility of Yellow Leaf Bay—each spot has its own unique tale to tell. Whether you&apos;re trekking through vibrant rainforests, exploring the island by boat, or standing in awe at the rim of an active volcano, Taniti&apos;s breathtaking scenery will captivate you. Explore the guide below to uncover the must-visit destinations that will make your journey truly unforgettable.
            </p>

            <p className="text-white z-10 leading-relaxed mb-4">
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>

            <Link href="/tours"
              className="text-white z-10 mt-4 uppercase inline-block">
              View Tours
            </Link>
          </div>

          <div className="bg-gray-50 p-8 md:w-1/3 flex flex-col items-center text-center justify-between">
            <Image
              src="/images/tour.jpg"
              alt="Tour Image"
              className="w-24 h-24 rounded-full object-cover mb-4"
              width={400}
              height={400}
            />

            <h3 className="text-lg font-serif italic text-gray-700 mb-4">Tour 1</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer.
            </p>

            <Link href="/tours"
              className="text-grey-500 mt-4 uppercase inline-block">
              More...
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feedback imageUrl='/images/tour.jpg' />
        <Feedback imageUrl='/images/tour2.jpg' />
        <Feedback imageUrl='/images/tour3.jpg' />
      </section>
    </div>
  );
}
