import type { NextPage } from 'next';
import { Carousel } from 'rsuite';

import styles from './Styles.module.scss';

interface IItemImg {
  img: string;
  txt: string;
}

const ITEM: IItemImg[] = [
  {
    img: '/carrucel/centro.jpg',
    txt: 'Centro Comunitario de Salud',
  },
  {
    img: '/carrucel/colegio.jpg',
    txt: 'Colegios',
  },
  {
    img: '/carrucel/metro.jpg',
    txt: 'Estación Matta - Línea 3',
  },
  {
    img: '/carrucel/parque.jpg',
    txt: 'Parque O´Higgins',
  },
  {
    img: '/carrucel/parque2.jpg',
    txt: 'Parque O´Higgins',
  },
  {
    img: '/carrucel/parque3.jpg',
    txt: 'Parque O´Higgins',
  },
  {
    img: '/carrucel/universidad.jpg',
    txt: 'Universidades',
  },
];
const Location: NextPage = () => {
  return (
    <>
      <div id='entorno'>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            <Carousel autoplay as='div'>
              {ITEM.map((item, index) => (
                <div
                  key={index}
                  className={styles.divImg}
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  <div>
                    <p>{item.txt}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className={styles.contentDetails}>
            <span>Entorno</span>
            <h2>Nuestro Barrio</h2>
            <p>
              Town House Arturo Prat te invita a la experiencia de vivir en medio de un Barrio Patrimonial en Santiago:
              Barrio Matta Sur; Ofrece vida de barrio, alta plusvalía y la posibilidad de estar cerca de todo, lo cual
              permite un equilibrio entre familia, trabajo, deporte y tiempo libre.
            </p>
            <br />
            <p>
              Cuenta con una conexión privilegiada a transporte público, línea 3 del metro de Santiago, ciclovías,
              servicios locales, supermercados, comercio, educación, parques y un rápido acceso a Autopista Central.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
