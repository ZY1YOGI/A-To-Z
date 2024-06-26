import React, { useState } from 'react'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
function Accordion({ title, content, id }) {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <div className="my-8 bg-white shadow-sm cursor-pointer outline outline-2 outline-offset-4 outline-red-700 max-md:my-4 rounded-xl dark:bg-gray-200" onClick={toggleExpanded}>
      <div className="flex flex-row items-center justify-between h-16 px-6 text-left select-none max-md:h-14">
        <h5 className="flex-1 overflow-hidden font-bold" data-aos="fade-up" data-aos-delay="350"><span className="text-blue-400">{id}</span> {title}</h5>
        <div className="flex-none pl-2">{expanded ? <BsFillArrowUpCircleFill size={20} /> : <BsFillArrowDownCircleFill size={20} />}</div>
      </div>
      <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
        <p className="pb-4 text-left">
          {content}
        </p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" className="my-20 bg-white dark:bg-gray-800  border-x-[5px] border-red-600 dark:border-fuchsia-600">
      <div className="flex items-center justify-center mx-20 space-x-8 max-md:mx-3 max-md:flex-col max-md:space-x-0 max-md:space-y-5">

        <div className="max-md:order-2">
          <div className="p-3">
            <h3 className="text-3xl max-md:text-xl text-[#37517e] dark:text-gray-50">That we are an A-Z company <strong>You acknowledge the undertaking with the following work.</strong></h3>
            <p className="dark:text-gray-300">
              Credibility with the customer, the agreement with the customer, privacy, and customer support
              throughout the week and around the clock is the most important thing that distinguishes us
            </p>
          </div>
          <div className="px-1 max-md:my-5">
            <Accordion id="01" title="Privacy" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit"} />
            <Accordion id="02" title="Credibility" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit"} />
            <Accordion id="03" title="Agreement" content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit"} />
          </div>
        </div>

        <div className="overflow-hidden max-md:order-1">
          <img className="" src="why-us.png" data-aos="zoom-out" data-aos-delay="350" />
        </div>
      </div>
    </section>
  )
}



