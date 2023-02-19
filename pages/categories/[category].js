import Head from "next/head";
import Contact from "@/components/Contact";
import Image from "next/image";
import Hero from "@/components/Hero";


export default function ({ category }) {
  return (
    <>
      <Head>
        <title>Category: {category}</title>
      </Head>
      <Hero />

      <section id="category" className="container mx-auto w-full rounded-b-2xl bg-[#e5eaff] dark:bg-[#0b101d] border-b border-fuchsia-600 h-screen" >
        <div className="text-center">
          <h1 className="text-3xl font-bold py-2 dark:text-white decoration-slice underline underline-offset-[5px] decoration-fuchsia-700 uppercase" data-aos="fade-up" data-aos-delay="200">{category}</h1>
          <p className="text-gray-700 dark:text-gray-300 capitalize" data-aos="fade-down">We always care about our services, whether it is software, hardware, hardware or software maintenance.</p>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-10 max-lg:gap-3 max-sm:grid-cols-1 max-lg:grid-cols-3 max-lg:px-[3%] ">

          <div className="transition-all duration-300 hover:-translate-y-6 hover:text-fuchsia-600">
            <div className="bg-gray-50 dark:bg-gray-800 shadow-md shadow-fuchsia-700 overflow-hidden rounded-xl border border-fuchsia-600" data-aos="fade-up" data-aos-delay="250">
              <Image src={require("@/public/categories/4.png")} width="auto" height="auto" />
              <div className="p-5">
                <h1 className="text-xl text-center dark:text-white">{category}</h1>
                <h2>Model: Zp359</h2>
                <p className="text-gray-700 dark:text-gray-300">Point of Sale system (Web Applications, DeskTop Applications, Mobile App)</p>
                <a href="/" type="button" className="outline outline-2 outline-offset-4 outline-red-700 my-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Show Product.</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Contact />
    </>
  );
}


export async function getServerSideProps(context) {
  return {
    props: {
      category: context.query["category"],
    },
  };
}
