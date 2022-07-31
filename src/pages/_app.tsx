import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import React from 'react';

import '@/styles/globals.css';

import { ThemeProvider } from '@/contexts/ThemeProvider';

import { AuthProvider, RouteWrapper } from '@/features/auth/';
import { StoreProvider } from '@/features/store';

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
