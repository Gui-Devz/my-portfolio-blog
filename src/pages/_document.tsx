import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="https://user-images.githubusercontent.com/62578862/132279264-5274ab5f-c6d8-475d-8928-2659c864478b.png"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
