import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import ModalProvider from '../components/context/modal/modal.provider';
import DrawerProvider from '../components/context/drawer/drawer.provider';

import YourSvg from '../public/whatsapp.svg';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Townhouse Arturo Prat</title>
        <meta
          name='description'
          content='TownHouse Arturo Prat es un concepto de viviendas que entrega toda la comodidad de una casa y la seguridad
            de un departamento. El proyecto está formado por 7 departamentos: 3 duplex y 4 triplex, con 2 y 3
            dormitorios o home office, 2 baños y 3 baños más terraza en 4to piso.'
        />
        <link rel='icon' href={prefix + '/favicon.ico'} />
      </Head>

      <ModalProvider>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>

        <img
          onClick={() => window.open('https://api.whatsapp.com/send?phone=56932606098')}
          className='whatsapp'
          src={'/whatsapp.svg'}
        />
      </ModalProvider>
    </>
  );
}

export default MyApp;
