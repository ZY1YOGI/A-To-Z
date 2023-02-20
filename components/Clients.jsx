import React from 'react'


export default function Clients() {
  return (
    <section id="clients" className="container mx-auto w-full rounded-b-2xl bg-[#e5eaff] dark:bg-[#0b101d] border-b border-fuchsia-600" >
      <div className="grid items-center grid-cols-6 max-sm:grid-cols-3">
        <div className="text-center cursor-pointer" data-aos="fade-up" data-aos-delay="200">
          <img src="clients/client-1.png" className="h-auto" alt="" />
        </div>

        <div className="text-center cursor-pointer" data-aos="fade-down" data-aos-delay="200">
          <img src="clients/client-2.png" className="h-auto" alt="" />
        </div>

        <div className="text-center cursor-pointer" data-aos="fade-up" data-aos-delay="200">
          <img src="clients/client-3.png" className="h-auto" alt="" />
        </div>

        <div className="text-center cursor-pointer" data-aos="fade-down" data-aos-delay="200">
          <img src="clients/client-4.png" className="h-auto" alt="" />
        </div>

        <div className="text-center cursor-pointer" data-aos="fade-up" data-aos-delay="200">
          <img src="clients/client-5.png" className="h-auto" alt="" />
        </div>

        <div className="text-center cursor-pointer" data-aos="fade-down" data-aos-delay="200">
          <img src="clients/client-6.png" className="h-auto" alt="" />
        </div>
      </div>

    </section>
  )
}

