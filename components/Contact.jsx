import React from "react";
import { FiPhoneCall } from "react-icons/fi"
import { MdMarkEmailRead } from "react-icons/md"

function Index() {
  return (
    <div className="container mx-auto pt-16 my-6 max-md:my-4">
      <div className="lg:flex border-x-[5px] border-red-600 dark:border-fuchsia-600">
        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 dark:bg-gray-800 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold decoration-slice underline underline-offset-[5px] decoration-red-600" data-aos="fade-up" data-aos-delay="200">Connect with us</h1>
            <p className="text-xl text-gray-200 pb-8 leading-relaxed font-normal lg:pr-4" data-aos="fade-up" data-aos-delay="150">We are an A-To-Z company. We always offer the best with our customers. We are always interested in customer support. You can communicate or give some suggestions.</p>
            <div className="flex pb-4 items-center">
              <div>
                <FiPhoneCall />
              </div>
              <p className="pl-4 text-white text-base" data-aos="fade-left" data-aos-delay="200">+20 100 10 268 04</p>
              <p className="pl-4 text-white text-base" data-aos="fade-right" data-aos-delay="200">+20 111 57 567 19</p>
            </div>
            <div className="flex items-center">
              <div>
                <MdMarkEmailRead />
              </div>
              <p className="pl-4 text-white text-base" data-aos="fade-down" data-aos-delay="200">A-TO-Z@Gmail.com</p>
            </div>
            <p className="text-lg text-white pt-10 tracking-wide" data-aos="fade-right" data-aos-delay="250">
              545, Dokki <br />
              Giza, Egypt
            </p>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 h-full shadow shadow-fuchsia-600 dark:shadow-red-700 pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Full Name
                  </label>
                  <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Full Name" />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Email
                  </label>
                  <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Phone
                  </label>
                  <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea placeholder="Message" name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" defaultValue={""} />
              </div>
              <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
