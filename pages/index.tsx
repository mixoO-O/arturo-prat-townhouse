import { useRef } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Parallax from '../components/Parallax';
import Galery from '../components/_Page/Galery';
import Location from '../components/_Page/Location';
import Footer from '../components/_Page/Footer';
import HeaderImage from '../components/HeaderImage';
import Characteristic from '../components/_Page/Characteristics';
import 'rsuite/dist/rsuite.min.css';
import Homes from '../components/_Page/Homes';
import Proyect from '../components/_Page/Proyect';
import ProyectTwo from '../components/_Page/ProyectTwo';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

const Home: NextPage = () => {
  const bodyRef = useRef(null);

  return (
    <>
      <HeaderImage />
      <Navbar bodyRef={bodyRef} />
      <div ref={bodyRef}>
        <div
          style={{
            display: 'flex',

            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
            }}
          >
            <Proyect />
            <ProyectTwo />
            <Characteristic />
            <Parallax />
            <Homes />
            <Galery />
            <Location />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
