import Image from "next/image";
import Link from "next/link";

export default function Categories({ categories }) {


  return (
    <section id="categories" className="container w-full mx-auto my-16 overflow-hidden" >
      <h1 className="mb-5 text-5xl text-center dark:text-white">Categories</h1>
      <div className="grid grid-cols-4 gap-10 m-4 overflow-hidden max-lg:grid-cols-2 max-sm:grid-cols-1">

        {
          categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center py-8 border border-red-600 shadow-md rounded-xl outline-dotted outline-2 outline-offset-4 outline-gray-800 shadow-red-600">
              <Image src={`https://0dcb-41-43-95-76.eu.ngrok.io/images/${category.img}`} width={750} height={750} alt={`img category ${category.name}`} className="object-cover border border-red-600 h-[195px] w-[195px] transition-all p-1 rounded-full m-5 hover:border-[3px]" />
              <div className="text-center">
                <h2 className="text-2xl font-bold transition-all cursor-pointer dark:text-white hover:tracking-widest">{"<"} {category.name} {">"}</h2>
                <p className="px-5 dark:text-gray-300">{category.description}</p>
                <Link href={`category/${category.slug}`} type="button" className="outline outline-2 outline-offset-4 outline-red-700 my-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Show More..</Link>
              </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}