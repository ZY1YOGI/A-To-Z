import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

  useEffect(() => {
    AOS.init();
    localStorage.getItem("theme") ?? localStorage.setItem("theme", "light");
    localStorage.getItem("theme") === "light" ? document.documentElement.classList.add("light") : document.documentElement.classList.add("dark")
  })
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
