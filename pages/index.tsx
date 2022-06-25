import type { NextPage } from 'next';
import { Carousel } from 'rsuite';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/Navbar';
import 'rsuite/dist/rsuite.min.css';
import Parallax from '../components/Parallax';

const Home: NextPage = () => {
  return (
    <div>
      <HeaderImage
        title={'Deuman Spa'}
        subtitle={'Inmobiliaria'}
      />
      <Navbar />

      <div id="proyecto">
        <Parallax />
      </div>

      <div id="galeria">
        <Carousel autoplay className="custom-slider" style={{ width: '100vw', height: "100vh"}}>
          <img src="/houses/house_1.jpg" />
          <img src="/houses/house_2.jpg" />
          <img src="/houses/house_3.jpg" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
