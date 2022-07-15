import type { NextPage } from 'next';
import { Carousel } from 'rsuite';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/Navbar';
import Parallax from '../components/Parallax';
import Projects from '../components/Projects';

import 'rsuite/dist/rsuite.min.css';
import Galery from '../components/_Page/Galery';
import Footer from '../components/_Page/Footer';

const Home: NextPage = () => (
  <>
    <HeaderImage />

    <Navbar />
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
        <Projects />

        <Parallax />

        <Galery />

        <Footer />
      </div>
    </div>
  </>
);

export default Home;
