import type { NextPage } from 'next';
import { Carousel } from 'rsuite';

import styles from './Styles.module.scss';

const Location: NextPage = () => {
  return (
    <>
      <div id='entorno'>
        <div className={styles.title}>
          <span>ENTORNO</span>
        </div>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            <Carousel autoplay>
              <img src='/location/matta.png' />
              <img src='/galery/3.png' />
              <img src='/location/parque.jpeg' />
              <img src='/galery/4.png' />
              <img src='/location/parque2.jpeg' />
            </Carousel>
          </div>
          <div className={styles.contentDetails}>
            <h3>Nuestro Barrio</h3>
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
