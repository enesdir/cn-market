import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

/**
 * @todo: remove this comment below when ready
 * ref: https://github.com/vercel/next.js/issues/13712#issuecomment-910409023
 * */
// eslint-disable-next-line @next/next/no-document-import-in-page

const APP_NAME = 'ecommerce-application';
const APP_DESCRIPTION = 'ECommerce is a example of shoping app with firebase';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          {/* https://nextjs.org/docs/basic-features/font-optimization */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
            rel="stylesheet"
          />
          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
