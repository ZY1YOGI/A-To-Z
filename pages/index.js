import About from "@/components/About";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
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
    </>
  );
}