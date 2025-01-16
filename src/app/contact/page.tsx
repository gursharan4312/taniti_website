import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        </div>
      </header>

      <section className="mt-8 flex flex-col items-center  ">
        <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 shadow-md  bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-6">
            We’d love to hear from you! Fill out the form below and
            we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-4 py-2  focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="Inquiry Subject"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 px-4 py-2  focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="inline-block px-6 py-2 bg-gray-800 text-white font-semibold  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-8 mb-16 flex flex-col items-center px-6 ">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-md  p-6 sm:p-8 mt-4 bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Office
          </h3>
          <p className="text-gray-500 mb-4">
            1234 Example St, City, Country
          </p>
          <p className="text-gray-500">
            Email: info@yoursite.com | Phone: +1 (555) 123-4567
          </p>
        </div>
      </section>
    </main>
  )
}

export default Contact
