import React from 'react'
import { MdDoneAll } from "react-icons/md"

export default function About() {
  return (
    <section id="about" className="container mx-auto my-16 overflow-hidden" >
      <h1 className="text-3xl text-center font-bold py-2 dark:text-white decoration-slice underline underline-offset-[5px] decoration-fuchsia-700" data-aos="fade-up" data-aos-delay="200">ABOUT US</h1>

      <div className="flex space-x-8 max-sm:block max-sm:space-y-8 max-sm:space-x-3">
        <div className="w-3/6 p-3 max-sm:w-full">
          <h2 className="dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  tempor  ut labore et doloreExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ulpa qui officia deserunt mollit anim id est laborum. deserunt mollit anim id est laborum.</h2>
          <ul className="mt-5">
            <li className="flex space-x-1 text-gray-700 transition-all duration-300 cursor-default hover:-translate-y-1 dark:text-gray-400 hover:font-bold hover:text-fuchsia-600 dark:hover:text-white" data-aos="fade-left" data-aos-delay="150"><MdDoneAll size={25} /> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p> </li>
            <li className="flex space-x-1 text-gray-700 transition-all duration-300 cursor-default hover:-translate-y-1 dark:text-gray-400 hover:font-bold hover:text-fuchsia-600 dark:hover:text-white" data-aos="fade-left" data-aos-delay="350"><MdDoneAll size={25} /> <p>Duis aute irure dolor in reprehenderit in voluptate velit</p> </li>
            <li className="flex space-x-1 text-gray-700 transition-all duration-300 cursor-default hover:-translate-y-1 dark:text-gray-400 hover:font-bold hover:text-fuchsia-600 dark:hover:text-white" data-aos="fade-left" data-aos-delay="500"><MdDoneAll size={25} /> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p> </li>
          </ul>
        </div>

        <div className="p-3 w-3/6 max-sm:w-[93%] max-sm:px-0">
          <p className="dark:text-white">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button className="px-5 py-2 mt-5 dark:hover:bg-transparent hover:bg-gray-900 text-fuchsia-500 dark:bg-gray-800 dark:text-fuchsia-700 outline outline-2 outline-offset-1 rounded-3xl">
            Learn More
          </button>
        </div>
      </div>

    </section>
  )
}

