import React from 'react'
import { BsFillPlayFill } from "react-icons/bs"
const logo = require("@/public/logo.png")


export default function Hero() {
  return (
    <section className="flex justify-center items-center border-b border-fuchsia-600 h-[85vh]" id="hero">
      <div className="container mx-auto flex items-center max-sm:flex-col">
        <div className="max-sm:order-2 text-center">
          <h1 className="font-bold text-3xl max-sm:text-xl dark:text-gray-100">A-Z {'>'}  The best solutions for your Business</h1>
          <p className="max-sm:text-xs dark:text-gray-400 capitalize">We are a company that manufactures web software, desktop software, mobile app software, and all accounting software</p>
          <div className="flex space-x-5 justify-center mt-3">
            <button type="button" className="dark:hover:bg-transparent hover:bg-gray-900 bg-gray-700 text-fuchsia-500 dark:bg-white dark:text-fuchsia-700 px-5 py-2 outline outline-2  outline-offset-1 rounded-3xl">Get Started</button>
            <button type="button" className="flex items-center text-fuchsia-500 dark:text-white px-5 py-1 hover:bg-gray-50 dark:hover:bg-white dark:hover:text-gray-900  transition-al  outline outline-2  outline-offset-1 rounded-3xl"><BsFillPlayFill size={35} />Watch Video</button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-0">
          <img src={logo} className="max-sm:w-3/5 dark:invert-[90%]" alt="" />
        </div>
      </div>
    </section>
  )
}


