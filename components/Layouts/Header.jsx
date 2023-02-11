import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsMoon, BsFillSunFill, BsList, BsSearch, BsXLg } from "react-icons/bs"
import logo from "@/public/logo.png";



export default function Header() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState()

  const ChangeTheme = () => {
    document.documentElement.className = "";
    if (theme === "light") {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark");
    }

    else if (theme === "dark") {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.add("light");
    }
    setTheme(localStorage.getItem("theme"));
  }


  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <header className="min-w-screen max-h-[8vh]">
      <nav className="navbar">
        <div className="flex justify-center items-center space-x-3" data-aos="zoom-out">
          <Image className="nav-logo" src={logo} alt="logo web site" width="auto" height="auto" priority />
          <h1 className="text-3xl font-bold text-fuchsia-800 dark:text-white max-sm:hidden">A-Z</h1>
        </div>
        <ul className="nav-links" data-aos="zoom-in">
          <li data-aos="fade-down"><Link className="nav-link" href="#hero">Home</Link></li>
          <li data-aos="fade-down"><Link className="nav-link" href="#about">About</Link></li>
          <li data-aos="fade-down"><Link className="nav-link" href="#services">Services</Link></li>
          <li data-aos="fade-down"><Link className="nav-link" href="/product">Product</Link></li>
          <button className="hover:bg-gray-800 dark:text-white hover:text-white transition duration-150 ease-out p-3 rounded-lg" onClick={() => console.log("Search")}>
            <BsSearch size="20" />
          </button>
          <button onClick={() => ChangeTheme()} className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl">
            {theme === "dark" ? <BsMoon size="25" /> : <BsFillSunFill size="25" />}
          </button>
        </ul>
        <button onClick={() => setMenu(!menu)} className="max-sm:block hidden" data-aos="fade-down">
          <BsList size={30} className="dark:text-white" />
        </button>
        <button className="btn-auth" data-aos="fade-left">
          Auth
        </button>
      </nav>

      {menu && (
        <div className="navbar-mobile">
          <div onClick={() => setMenu(!menu)} className="fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-gray-900 border-r border-fuchsia-800">
            <div className="flex items-center mb-8">
              <Image src={logo} className="mr-auto dark:invert-[100%]" alt="logo web site" width="35" height="35" priority />
              <button onClick={() => setMenu(!menu)} className="navbar-close">
                <BsXLg className="dark:text-white" />
              </button>
            </div>
            <button data-aos="fade-right" data-aos-delay="150" onClick={() => ChangeTheme()} className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl">
              {theme === "dark" ? <BsMoon size="25" /> : <BsFillSunFill size="25" />}
            </button>
            <div>
              <ul className="nav-links-mobile">
                <li data-aos="fade-left" data-aos-delay="100" ><Link className="nav-link-mobile" href="#hero">Home</Link></li>
                <li data-aos="fade-right" data-aos-delay="150"><Link className="nav-link-mobile" href="#about">About</Link></li>
                <li data-aos="fade-left" data-aos-delay="200"><Link className="nav-link-mobile" href="#services">Services</Link></li>
                <li data-aos="fade-right" data-aos-delay="250"><Link className="nav-link-mobile" href="/product">Product</Link></li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white dark:text-black font-semibold bg-gray-900 dark:bg-white hover:bg-gray-700  rounded-xl" href="#">Auth</a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400"><span>Copyright © 2023</span></p>
            </div>
          </nav>
        </div>
      )
      }

    </header>
  );
}