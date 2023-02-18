import React from "react";
import Image from "next/image";



const CATEGORIES = [
  {
    name: "SoftWare",
    info: " paragraph. A paragraph is defined as “a group of sentences or a single sentence that.",
    img: require("@/public/categories/1.png"),

  },
  {
    name: "HardWare",
    info: " paragraph. A paragraph is defined as “a group of sentences or a single sentence that.",
    img: require("@/public/categories/2.png"),

  },
  {
    name: "PC",
    info: " paragraph. A paragraph is defined as “a group of sentences or a single sentence that.",
    img: require("@/public/categories/3.png"),

  },
  {
    name: "XPrinter",
    info: " paragraph. A paragraph is defined as “a group of sentences or a single sentence that.",
    img: require("@/public/categories/4.png"),

  },
]


export default function Categories() {
  return (
    <section id="categories" className="container mx-auto my-16 overflow-hidden" >
      <h1 className="text-5xl text-center dark:text-white mb-5">Categories</h1>
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1 m-4">

        {
          CATEGORIES.map((category, index) => (
            <div key={index} className="flex flex-col items-center rounded-xl outline-dotted outline-2 outline-offset-4 outline-gray-800 border border-red-600 py-8 shadow-md shadow-red-600">
              <Image src={category.img} alt="" className="object-cover border border-red-600 h-[195px] w-[195px] transition-all p-1 rounded-full m-5 hover:border-[3px]" />
              <div className="text-center">
                <h2 className="text-2xl dark:text-white font-bold hover:tracking-widest transition-all cursor-pointer">{"<"} {category.name} {">"}</h2>
                <p className="dark:text-gray-300 px-5">{category.info}</p>
                <a href="/" type="button" className="outline outline-2 outline-offset-4 outline-red-700 my-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Show More..</a>
              </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}