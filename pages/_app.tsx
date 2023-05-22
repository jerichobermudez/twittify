import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '@/components/Layout';
import LoginModal from '@/components/modals/LoginModal';
import EditModal from '@/components/modals/EditModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Twittify</title>
          <meta name="description" content="Twitter Clone using next js" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <EditModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  )
}
