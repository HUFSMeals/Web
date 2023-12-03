import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Layout from './components/Layout';
import { theme } from './styles/theme';
import Router from './components/Router';
import React from 'react';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <Layout>
            <Suspense>
              <RouterProvider router={Router} />
            </Suspense>
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
