import Head from 'next/head';
import type { AppProps } from 'next/app';
import ModalProvider from '../components/context/modal/modal.provider';
import '../styles/globals.scss';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <Head>
          <title>Townhouse Arturo Prat</title>
          <meta name='description' content='Toda la comodidad de una casa con la seguridad de un departamento' />
          <link rel='icon' href={prefix + '/favicon.ico'} />
        </Head>

        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

export default MyApp;
