import Clients from '@/components/Clients';
import Head from 'next/head'
export default function Home() {

  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <main className="h-screen">
          <Clients />
      </main>
    </>
  );
}
