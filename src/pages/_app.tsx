import 'styles/globals.css';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import defaultSEOConfig from '../../next-seo.config';
import RouteWrapper from '@components/RouteWrapper';
import { AuthProvider } from '@contexts/AuthProvider';
import { StoreProvider } from '@contexts/StoreProvider';
import { ThemeProvider } from '@contexts/ThemeProvider';

function CNAIO({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <AuthProvider>
        <RouteWrapper>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </RouteWrapper>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default CNAIO;
