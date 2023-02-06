import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/img/logo.png";



export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("mood") ?? "light");
    const [menu, setMenu] = useState(false)
    // const [modalSearch, setModalSearch] = useState(false);

    useEffect(() => {
        document.querySelector("body").classList.toggle("dark");
        if (theme === "dark") {
            document.querySelector("body").classList.add("dark");
        }
        localStorage.setItem("mood", theme);
    }, [theme]);

    return (
        <header className="min-w-screen max-h-[5vh]">
            <nav className="nav">
                <div className="flex justify-center items-center">
                    <img width={45} height={45} className="mx-3" src={logo} alt="logo" />
                    <h1 className="text-3xl font-bold dark:text-white max-sm:hidden">A-Z</h1>
                </div>
                <ul className="flex items-center space-x-3 max-sm:hidden">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/categories" className="nav-link">Categories</NavLink>
                    <NavLink to="/product" className="nav-link">Product</NavLink>
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                    <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
                    <button className="hover:bg-gray-800 dark:text-white hover:text-white transition duration-150 ease-out p-3 rounded-lg" onClick={()=> console.log("Search")}>
                        <svg className="ease-in duration-100" width="16px" height="16px" fill="currentColor" viewBox="0 0 16 16" >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                    <button className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} >
                        <svg className="ease-in duration-300" width="30px" height="30px"  fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path d={ theme === "dark" ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" } />
                        </svg>
                    </button>
                </ul>
                <button onClick={()=> setMenu(!menu) } className="max-sm:block hidden">
                    <svg className="dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14"><g fill="none" stroke="currentColor" transform="translate(1 1)"><path d="M0 6h18M0 0h18M0 12h18"/></g></svg>
                </button>
                <button className="py-2 px-6 bg-black text-white dark:text-black dark:bg-white  hover:bg-gray-300 text-sm font-bold  rounded-xl transition duration-200">
                    Auth
                </button>
            </nav>

            <div className={`relative z-50 ${!menu && "hidden"}`}>
                <div onClick={()=> setMenu(!menu) } className="fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-gray-900 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <img width={45} height={45} className="mx-3" src={logo} alt="logo" />
                        </a>
                        <button onClick={()=> setMenu(!menu) } className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <button className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} >
                        <svg className="ease-in duration-300" width="30px" height="30px"  fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path d={ theme === "dark" ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" } />
                        </svg>
                    </button>
                    <div>
                        <ul>
                            <NavLink to="/" className="nav-link-mobile ">Home</NavLink>
                            <NavLink to="/categories" className="nav-link-mobile ">Categories</NavLink>
                            <NavLink to="/product" className="nav-link-mobile ">Product</NavLink>
                            <NavLink to="/services" className="nav-link-mobile ">Services</NavLink>
                            <NavLink to="/contact-us" className="nav-link-mobile ">Contact Us</NavLink>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white dark:text-black font-semibold bg-gray-900 dark:bg-white hover:bg-blue-700  rounded-xl" href="#">Auth</a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400"><span>Copyright © 2023</span></p>
                    </div>
                </nav>
            </div>
        </header>
    );
}

{/* <button className="hover:bg-gray-800 dark:text-white hover:text-white transition duration-150 ease-out p-3 rounded-lg" onClick={()=> console.log("Search")}>
<svg className="ease-in duration-100" width="16px" height="16px" fill="currentColor" viewBox="0 0 16 16" >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
</svg>
</button>
<button className="hover:bg-gray-600 hover:text-white dark:text-white hover:dark:bg-slate-700 p-1 rounded-xl" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} >
<svg className="ease-in duration-300" width="30px" height="30px"  fill="none" viewBox="0 0 24 24" stroke="currentColor" >
    <path d={ theme === "dark" ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" } />
</svg>
</button> */}
