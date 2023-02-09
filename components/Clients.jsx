import React from 'react'


export default function Clients() {
  return (
    <div className="container mx-auto" id="clients">
      <div className="grid grid-cols-6 max-sm:grid-cols-3 items-center" data-aos="zoom-in">
        <div className="text-center">
          <img src="clients/client-1.png" className="h-auto" alt="" />
        </div>

        <div className="text-center">
          <img src="clients/client-2.png" className="h-auto" alt="" />
        </div>

        <div className="text-center">
          <img src="clients/client-3.png" className="h-auto" alt="" />
        </div>

        <div className="text-center">
          <img src="clients/client-4.png" className="h-auto" alt="" />
        </div>

        <div className="text-center">
          <img src="clients/client-5.png" className="h-auto" alt="" />
        </div>

        <div className="text-center">
          <img src="clients/client-6.png" className="h-auto" alt="" />
        </div>
      </div>

    </div>
  )
}

