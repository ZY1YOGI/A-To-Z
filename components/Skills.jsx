import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql, SiPython, SiJava, SiAdafruit, SiInfluxdb, SiAdobephotoshop } from "react-icons/si"

const SKILLS = [
  {
    title: "Html5",
    bar: "93%",
    ico: <SiHtml5 size={18} />
  },
  {
    title: "CSS3",
    bar: "89%",
    ico: <SiCss3 size={18} />
  },
  {
    title: "JAVASCRIPT",
    bar: "86%",
    ico: <SiJavascript size={18} />
  },
  {
    title: "PHP",
    bar: "79%",
    ico: <SiPhp size={18} />
  },
  {
    title: "SQL",
    bar: "94%",
    ico: <SiMysql size={18} />
  },
  {
    title: "JAVA",
    bar: "98%",
    ico: <SiJava size={18} />
  },
  {
    title: "PYTHON",
    bar: "81%",
    ico: <SiPython size={18} />
  },
  {
    title: "Ui-Web",
    bar: "89%",
    ico: <SiAdafruit size={18} />
  },
  {
    title: "UX-Web",
    bar: "77%",
    ico: <SiInfluxdb size={18} />
  },
  {
    title: "PHOTOSHOP",
    bar: "81%",
    ico: <SiAdobephotoshop size={18} />
  },
]


export default function Skills() {
  return (
    <section id="skills" className="my-6 max-md:my-0 py-5 bg-white dark:bg-body-dark border-x-[5px] border-fuchsia-600 dark:border-red-600">
      <div className="flex items-center justify-center mx-20 space-x-8 max-md:mx-3 max-lg:flex-col max-md:space-x-0 max-md:space-y-5">

        <div className="flex justify-center xl:w-[60%] min-lg:w-[20%] overflow-hidden">
          <img src="skills.png" className="w-auto h-auto rounded-2xl" data-aos="zoom-out" data-aos-delay="350" />
        </div>

        <div className="m-16">
          <div>
            <h3 className="text-3xl max-md:text-xl text-[#37517e] dark:text-gray-50">The company's programming skills</h3>
            <p className="dark:text-gray-300">To make your own program, the company uses some or both of these skills.</p>
          </div>

          <div className="mt-5 space-y-3 overflow-hidden">


            {
              SKILLS.map((skill, index) => (
                <div className="cursor-pointer" key={index} data-aos="fade-up-left" data-aos-delay="200">
                  <div className="flex justify-between">
                    <div className="flex items-center mb-1 space-x-3 text-base font-medium dark:text-white" data-aos="fade-right" data-aos-delay="450">{skill.ico} <h3>{skill.title}</h3></div>
                    <div className="mb-1 text-base font-medium dark:text-white">{skill.bar}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-red-600 h-1.5 rounded-full dark:bg-fuchsia-500 w-[35%]" style={{ width: skill.bar }}></div>
                  </div>
                </div>
              ))
            }



          </div>
        </div>

      </div>
    </section>
  )
}



