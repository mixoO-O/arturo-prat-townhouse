import React from 'react';
import ItemImg from '../../ItemImg';
import styles from './Styles.module.scss';

const Proyect = () => {
  return (
    <div id='proyecto'>
      <div className={styles.content}>
        <div className={styles.car}>
          <ItemImg uri='/galery/3.png' />
        </div>
        <div className={styles.contentText}>
          <span>Townhouse Arturo Prat</span>
          <h2>Proyecto único en el sector</h2>
          <p>
            TownHouse Arturo Prat es un concepto de viviendas que entrega toda la comodidad de una casa y la seguridad
            de un departamento. El proyecto está formado por 7 Townhouses: 3 duplex y 4 triplex, con 2 y 3 dormitorios o
            home office, 2 y 3 baños más terraza en 4to piso.
          </p>
          <br />
          <p>
            Townhouse Arturo Prat es un proyecto moderno e innovador, caracterizado principalmente por su diseño,
            calidad y funcionalidad, manteniendo un concepto de modernidad en cada rincón, fue diseñado para disfrutar
            de tu casa con todo lo que tú y tu familia necesitan, destacan sus espacios cómodos y funcionales con
            terminaciones modernas que te harán sentir una experiencia diferente y única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
