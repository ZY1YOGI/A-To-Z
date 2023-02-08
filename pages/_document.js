import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" />
      </Head>

      <body className="bg-body-light dark:bg-body-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
