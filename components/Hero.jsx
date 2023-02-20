import React from 'react'
import Image from "next/Image"
import { BsFillPlayFill } from "react-icons/bs"
const logo = require("@/public/logo.png")


export default function Hero() {
  return (
    <section className="flex justify-center items-center border-b border-fuchsia-600 h-[85vh]" id="hero">
      <div className="container flex items-center mx-auto max-sm:flex-col">
        <div className="text-center max-sm:order-2">
          <h1 className="text-3xl font-bold max-sm:text-xl dark:text-gray-100">A-Z {'>'}  The best solutions for your Business</h1>
          <p className="capitalize max-sm:text-xs dark:text-gray-400">We are a company that manufactures web software, desktop software, mobile app software, and all accounting software</p>
          <div className="flex justify-center mt-3 space-x-5">
            <button type="button" className="px-5 py-2 bg-gray-700 dark:hover:bg-transparent hover:bg-gray-900 text-fuchsia-500 dark:bg-white dark:text-fuchsia-700 outline outline-2 outline-offset-1 rounded-3xl">Get Started</button>
            <button type="button" className="flex items-center px-5 py-1 text-fuchsia-500 dark:text-white hover:bg-gray-50 dark:hover:bg-white dark:hover:text-gray-900 transition-al outline outline-2 outline-offset-1 rounded-3xl"><BsFillPlayFill size={35} />Watch Video</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-0">
          <Image src={logo} className="max-sm:w-3/5 dark:invert-[90%]" alt="" />
        </div>
      </div>
    </section>
  )
}


