import Hero from "@/components/Hero";
import Head from "next/head";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>

      {/* <Hero /> */}
      <Categories />
      {/* <Contact /> */}
    </>
  );
}
