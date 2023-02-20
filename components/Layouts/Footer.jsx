import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs"
import logo from "@/public/logo.png";



const NAVLINKS = [
  {
    title: "About Us",
    links: [
      {
        name: "Company History",
        href: "/"
      },
      {
        name: "Meet the Team",
        href: "/"
      },
      {
        name: "Employee Handbook",
        href: "/"
      },
      {
        name: "Careers",
        href: "/"
      }
    ]
  },

  {
    title: "Our Services",
    links: [
      {
        name: "Web Development",
        href: "/"
      },
      {
        name: "Web Design",
        href: "/"
      },
      {
        name: "Marketing",
        href: "/"
      },
      {
        name: "Google Ads",
        href: "/"
      }
    ]
  },

  {
    title: "Resources",
    links: [
      {
        name: "Online Guides",
        href: "/"
      },
      {
        name: "Web Design",
        href: "/"
      },
      {
        name: "Conference Notes",
        href: "/"
      },
      {
        name: "Downloads",
        href: "/"
      },
      {
        name: "Upcoming Events",
        href: "/"
      }
    ]
  },

  {
    title: "Helpful Links",
    links: [
      {
        name: "FAQs",
        href: "/"
      },
      {
        name: "Web Design",
        href: "/"
      },
      {
        name: "Support",
        href: "/"
      },
      {
        name: "Downloads",
        href: "/"
      }
    ]
  },

]

const SOCIALLINKS = [
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    svg: <BsFacebook size={22} />
  },
  {
    title: "Instagram",
    link: "https://www.facebook.com",
    svg: <BsInstagram size={22} />
  },
  {
    title: "Twitter",
    link: "https://www.facebook.com",
    svg: <BsTwitter size={22} />
  },
  {
    title: "GitHub",
    link: "https://www.facebook.com",
    svg: <BsGithub size={22} />
  },
  {
    title: "Dribbble",
    link: "https://www.facebook.com",
    svg: <BsDribbble size={22} />
  }
]

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-center sm:justify-start" >
            <Image className="nav-logo" src={logo} alt="logo web site" width="auto" height="auto" priority data-aos="fade-left"/>
            <h1 className="text-3xl text-fuchsia-800" data-aos="fade-right">A-Z</h1>
          </div>
          <p className="max-w-md mx-auto mt-4 leading-relaxed text-center text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-left lg:mr-0 lg:mt-0">
            The company "A-To-Z" everything related to software and hardware. We care about serving our valued customers. We offer the best after-sales
            service. The most important thing that distinguishes us is the service of our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-16 mt-10 border-t border-gray-100 dark:border-gray-800 md:grid-cols-4 lg:grid-cols-6">

          {NAVLINKS.map((nav, index) => (
            <div className="text-center sm:text-left" key={index}>
              <p className="text-lg font-medium text-gray-900 dark:text-white" >
                {nav.title}
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  {nav.links.map((navLinks, index) => (
                    <li data-aos={`fade-${['left', 'right'][Math.floor(Math.random()*['left', 'right'].length)]}`} data-aos-delay={Math.floor(Math.random() * 800) + 100}  key={index}>
                      <a href={navLinks.href} className="text-gray-700 transition dark:text-white hover:font-bold hover:text-fuchsia-900 dark:hover:text-white" >
                        {navLinks.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Stay in Touch
            </p>

            <div className="max-w-md mx-auto mt-8 sm:ml-0">
              <p className="leading-relaxed text-center text-gray-500 dark:text-gray-400 sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id,
                iure consectetur et error hic!
              </p>

              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">Email</label>

                  <input className="w-full px-6 py-3 bg-white border-gray-200 rounded-full shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white" type="email" placeholder="Enter your email" />

                  <button className="block px-8 py-3 font-medium text-white transition bg-indigo-500 rounded-full hover:bg-indigo-600" type="submit" >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-10 border-t border-gray-100 dark:border-gray-800 sm:flex sm:items-center sm:justify-between" >
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 sm:text-left">
            Copyright &copy; 2022. All rights reserved.
          </p>

          <ul className="flex justify-center gap-6 mt-4 sm:mt-0 sm:justify-start">

            {SOCIALLINKS.map((link, index) => (
              <li key={index}>
                <a href={link.link} target="_blank" className="text-gray-600 transition hover:text-gray-500/75 dark:text-gray-500 dark:hover:text-gray-500/75">
                  <span className="sr-only">{link.title}</span>
                  {link.svg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>



  )
}
