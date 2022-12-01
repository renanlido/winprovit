import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stitches.config';

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <style
          id="stitches"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: getCssText()
          }}
        />
        <meta charSet="UTF-8" />

        {/* <Favicon /> */}

        {/* <OG /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
