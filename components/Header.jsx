import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { BsMoon, BsFillSunFill, BsList, BsSearch, BsXLg } from "react-icons/bs"
import logo from "@/public/logo.png";
import useDarkMode from "@/hooks/useTheme.hook";



export default function Header() {
  const [menu, setMenu] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="min-w-screen max-h-[6vh]">
      <nav className="navbar">
        <div className="flex justify-center items-center space-x-3">
          <Image className="nav-logo" src={logo} alt="logo web site" width="auto" height="auto" priority />
          <h1 className="text-3xl font-bold text-fuchsia-800 dark:text-white max-sm:hidden">A-Z</h1>
        </div>
        <ul className="nav-links">
          <li><Link className="nav-link" href="#hero">Home</Link></li>
          <li><Link className="nav-link" href="#about">About</Link></li>
          <li><Link className="nav-link" href="#services">Services</Link></li>
          <li><Link className="nav-link" href="#product">Product</Link></li>
          <button className="hover:bg-gray-800 dark:text-white hover:text-white transition duration-150 ease-out p-3 rounded-lg" onClick={() => console.log("Search")}>
            <BsSearch size="20" />
          </button>
          <button onClick={() => colorTheme === "dark" ? setTheme("dark") : setTheme("light")} className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl">
            {colorTheme === "dark" ? <BsMoon size="25" /> : <BsFillSunFill size="25" />}
          </button>
        </ul>
        <button onClick={() => setMenu(!menu)} className="max-sm:block hidden">
          <BsList size={30} className="dark:text-white" />
        </button>
        <button className="btn-auth">
          Auth
        </button>
      </nav>

      <div className={`navbar-mobile  ${!menu && "hidden"}`}>
        <div onClick={() => setMenu(!menu)} className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-gray-900 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src={logo} alt="logo web site" width="35" height="35" priority />
            </a>
            <button onClick={() => setMenu(!menu)} className="navbar-close">
              <BsXLg className="dark:text-white" />
            </button>
          </div>
          <button onClick={() => colorTheme === "dark" ? setTheme("dark") : setTheme("light")} className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl">
            {colorTheme === "light" ? <BsFillSunFill size="25" /> : <BsMoon size="25" />}
          </button>
          <div>
            <ul className="nav-links-mobile">
              <li><Link className="nav-link-mobile" href="#hero">Home</Link></li>
              <li><Link className="nav-link-mobile" href="#about">About</Link></li>
              <li><Link className="nav-link-mobile" href="#services">Services</Link></li>
              <li><Link className="nav-link-mobile" href="#product">Product</Link></li>
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
    </header>
  );
}