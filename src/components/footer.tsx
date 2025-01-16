import React from 'react'

const footer = () => {
  return (
    <footer className="mt-16">
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-xl font-serif italic text-gray-700 mb-4 md:mb-0">
              Subscribe to our newsletter
            </h2>

            <form action="#" method="POST" className="flex w-full md:w-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full md:w-96 px-3 py-2 border border-gray-300 text-gray-700 
                   focus:outline-none focus:border-gray-400 
                   "
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-300 text-gray-700 
                   border border-gray-300 border-l-0
                   hover:bg-gray-400 transition-colors 
                   focus:outline-none"
              >
                SUBSCRIBE
              </button>
            </form>          </div>
        </div>
      </div>

      <div className="bg-white py-6">
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
        >
          <span className="mb-4 md:mb-0">
            © 2025 Copyright Taniti.
          </span>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 4.9913 3.657 9.1284 8.438 9.8789v-6.988H7.8984V12H10.438v-2.123c0-2.5382 1.4922-3.9336 3.7814-3.9336 1.0972 0 2.2422.1953 2.2422.1953v2.4629H14.64c-1.2949 0-1.6954.8066-1.6954 1.6348V12h2.8828l-.461 2.8909h-2.4218v6.988C18.343 21.1284 22 16.9913 22 12z" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775A4.93 4.93 0 0023.337 3.6c-.95.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.381 4.482A13.978 13.978 0 011.64 3.162 4.916 4.916 0 003.167 9.72 4.903 4.903 0 01.96 9.1v.06a4.928 4.928 0 003.946 4.827 4.9 4.9 0 01-2.212.083 4.93 4.93 0 004.604 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.057 0 14.01-7.512 13.862-14.252.95-.693 1.775-1.562 2.544-2.55z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.98.235 2.444.39.598.206 1.025.45 1.476.901.45.45.695.878.9 1.476.156.465.337 1.274.391 2.445.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.235 1.98-.39 2.444-.206.598-.45 1.025-.901 1.476-.45.45-.878.695-1.476.9-.465.156-1.275.337-2.445.391-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.98-.235-2.444-.39-.598-.206-1.025-.45-1.476-.901-.45-.45-.695-.878-.9-1.476-.156-.465-.337-1.274-.391-2.445C2.175 15.586 2.163 15.206 2.163 12s.012-3.584.07-4.85c.054-1.17.235-1.98.39-2.444.206-.598.45-1.025.901-1.476.45-.45.878-.695 1.476-.9.465-.156 1.274-.337 2.445-.391C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.332.013 7.053.07 5.77.127 4.725.315 3.85.7 2.946 1.106 2.195 1.7 1.454 2.441c-.74.74-1.335 1.492-1.742 2.396-.385.875-.573 1.92-.63 3.203C-.013 8.332 0 8.74 0 12c0 3.26-.013 3.668.07 4.947.057 1.283.245 2.328.63 3.203.407.904 1.002 1.656 1.742 2.396.74.74 1.492 1.335 2.396 1.742.875.385 1.92.573 3.203.63 1.279.058 1.687.07 4.947.07s3.668-.013 4.947-.07c1.283-.057 2.328-.245 3.203-.63.904-.407 1.656-1.002 2.396-1.742.74-.74 1.335-1.492 1.742-2.396.385-.875.573-1.92.63-3.203.058-1.279.07-1.687.07-4.947s-.013-3.668-.07-4.947c-.057-1.283-.245-2.328-.63-3.203-.407-.904-1.002-1.656-1.742-2.396C22.344 1.7 21.592 1.106 20.689.7c-.875-.385-1.92-.573-3.203-.63C15.668.013 15.26 0 12 0z" />
              </svg>
            </a>
          </div>

          <span>Designed by Gursharan Singh Hayer</span>
        </div>
      </div>
    </footer>
  )
}

export default footer
