import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
      </Head>

      <body className="w-screen overflow-x-hidden bg-body-light dark:bg-body-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
