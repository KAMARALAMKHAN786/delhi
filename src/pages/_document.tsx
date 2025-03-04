// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="description" content="Delhi Escort offers premium escort services with a focus on professionalism, authenticity, and unforgettable experiences." />
<meta name="keywords" content="Delhi Escort, premium escorts, escort services, Delhi, model escorts" />
          <link rel="canonical" href="https://www.delhi-escorts.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument