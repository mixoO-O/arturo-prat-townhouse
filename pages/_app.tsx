import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href={prefix + '/favicon.ico'} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;