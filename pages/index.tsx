import type { NextPage } from 'next';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <HeaderImage
        title={'Deuman Spa'}
        subtitle={'Inmobiliaria'}
      />
      <Navbar />
      <div id="proyecto" style={{ width: '100vw', height: '50vh', background: 'crimson'}}>
        Proyecto
      </div>
      <div id="galeria" style={{ width: '100vw', height: '50vh', background: 'dodgerblue'}}>
        Galería
      </div>
      <div id="entorno" style={{ width: '100vw', height: '50vh', background: 'lightblue'}}>
        Entorno
      </div>
      <div id="contacto" style={{ width: '100vw', height: '50vh', background: 'lightsalmon'}}>
        Contacto
      </div>
      
    </div>
  );
};

export default Home;
