import React from 'react'
import { BsCodeSlash, BsHeadset } from "react-icons/bs"
import { MdDevices } from "react-icons/md"
import { RiUserSettingsLine } from "react-icons/ri"

export default function Services() {
  return (
    <section id="services" className="container mx-auto my-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2 dark:text-white decoration-slice underline underline-offset-[5px] decoration-fuchsia-700" data-aos="fade-up" data-aos-delay="200">SERVICES</h1>
        <p className="text-gray-700 dark:text-gray-300 capitalize" data-aos="fade-down">We always care about our services, whether it is software, hardware, hardware or software maintenance.</p>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-10 max-lg:gap-3 max-sm:grid-cols-2 max-lg:grid-cols-3 max-lg:px-[3%] ">

        <div className="transition-all duration-300 hover:-translate-y-6 hover:text-fuchsia-600">
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md shadow-fuchsia-700 p-5 rounded-xl border border-fuchsia-600" data-aos="fade-left" data-aos-delay="250">
            <BsCodeSlash size={28} />
            <h1 className="text-xl dark:text-white">POS Software</h1>
            <p className="text-gray-700 dark:text-gray-300">Point of Sale system (Web Applications, DeskTop Applications, Mobile App)</p>
          </div>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-6 hover:text-fuchsia-600">
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md shadow-fuchsia-700 p-5 rounded-xl border border-fuchsia-600" data-aos="fade-right" data-aos-delay="400">
            <MdDevices size={28} />
            <h1 className="text-xl dark:text-white">POS Hardware</h1>
            <p className="text-gray-700 dark:text-gray-300">Selling all kinds of POS devices (printers, scanners, barcode printer, PC, All one)</p>
          </div>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-6 hover:text-fuchsia-600">
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md shadow-fuchsia-700 p-5 rounded-xl border border-fuchsia-600" data-aos="fade-left" data-aos-delay="400">
            <RiUserSettingsLine size={28} />
            <h1 className="text-xl dark:text-white">Maintenance</h1>
            <p className="text-gray-700 dark:text-gray-300">Immediate maintenance for all faults, whether they are software or hardware</p>
          </div>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-6 hover:text-fuchsia-600">
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md shadow-fuchsia-700 p-5 rounded-xl border border-fuchsia-600" data-aos="fade-right" data-aos-delay="250">
            <BsHeadset size={28} />
            <h1 className="text-xl dark:text-white">Support</h1>
            <p className="text-gray-700 dark:text-gray-300">We always care about after-sales service and always support you all the time</p>
          </div>
        </div>

      </div>
    </section>
  )
}

