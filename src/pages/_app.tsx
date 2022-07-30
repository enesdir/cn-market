import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import React from 'react';

import '@/styles/globals.css';

import { AuthProvider } from '@/contexts/AuthProvider';
import { StoreProvider } from '@/contexts/StoreProvider';
import { ThemeProvider } from '@/contexts/ThemeProvider';

import RouteWrapper from '@/components/RouteWrapper';

import defaultSEOConfig from '../../next-seo.config';

function CNAIO({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
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
