import About from "@/components/About";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Head from "next/head";
import Categories from "@/components/Categories"




export async function getServerSideProps(context) {
  
  return {
    props: {
      categories: []
    },
  };
}



export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Hero />
      <Clients />
      <Services />
      <About />
      <WhyUs />
      <Categories categories={categories}/>
      <Skills />
      <Contact />
    </>
  );
}
