import Head from "next/head";
import Contact from "@/components/Contact";
import Image from "next/image";
import Hero from "@/components/Hero";

export async function getServerSideProps(context) {  
  
  return {
    props: {
      category: {
        name: context.query["category"],
      },
    },
  };
}




export default function ({ category }) {


  return (
    <>
      <Head>
        <title>Category: {category.name}</title>
      </Head>
      <Hero />
    
      <section id="category" className="container w-full mx-auto border-b rounded-b-2xl border-fuchsia-600" >
        <div className="text-center">
          <h1 className="text-3xl font-bold py-2 dark:text-white decoration-slice underline underline-offset-[5px] decoration-fuchsia-700 uppercase" data-aos="fade-up" data-aos-delay="200">{category.name}</h1>
          <p className="text-gray-700 capitalize dark:text-gray-300" data-aos="fade-down">We always care about our services, whether it is software, hardware, hardware or software maintenance.</p>
        </div>

        {/* <div className="mt-8 grid grid-cols-4 gap-10 max-lg:gap-5 max-sm:grid-cols-1 max-lg:grid-cols-3 max-lg:px-[3%] m-5">

          {
            category.products.map((product, index) => (
              <div className="text-gray-900 transition-all duration-300 cursor-pointer hover:-translate-y-6 hover:text-fuchsia-600 dark:hover:text-red-700 hover:font-bold" key={index}>
                <div className="overflow-hidden border shadow-md bg-gray-50 dark:bg-gray-800 shadow-fuchsia-700 rounded-xl border-fuchsia-600" data-aos="fade-up" data-aos-delay="250">
                  <Image src={`https://2796-41-43-95-76.eu.ngrok.io/${product.img}`} width={350} height={350}  className="h-[210px] w-full" alt="Image" />
                  <div className="p-5">
                    <h1 className="text-xl text-center">{product.name}</h1>
                    <h2><span className="text-gray-900 dark:text-white">Model: </span>{product.model}</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-300">{product.info}</p>
                    <a href="/" type="button" className="outline outline-2 outline-offset-4 outline-red-700 my-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Show Product.</a>
                  </div>
                </div>
              </div>
            ))
          }

        </div> */}
      </section>

      <Contact />
    </>
  );
}


