import type { NextPage } from 'next';
import { Carousel } from 'rsuite';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/Navbar';

import Parallax from '../components/Parallax';
import Projects from '../components/Projects';
import 'rsuite/dist/rsuite.min.css';

const Home: NextPage = () => {
  return (
    <div>
      <HeaderImage
        title={'Deuman Spa'}
        subtitle={'Inmobiliaria'}
      />
      <Navbar />

      <Projects />

      <div id="proyecto">
        <Parallax />
      </div>

      <div id="galeria" style={{ width: '100vw', height: '100vh', background: '#A8C9EA', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Carousel autoplay className="custom-slider" style={{ width: '50vw', height: "50vh"}}>
          <img src="/houses/house_1.jpg" />
          <img src="/houses/house_2.jpg" />
          <img src="/houses/house_3.jpg" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
