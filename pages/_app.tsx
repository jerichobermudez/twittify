import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '@/components/Layout';
import LoginModal from '@/components/models/LoginModal';
import RegisterModal from '@/components/models/RegisterModal';

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <>
      <Head>
        <title>Twittify</title>
        <meta name="description" content="Twitter Clone using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}