import React from 'react';
import styles from './Principal.module.scss';

const Principal = () => {
  return (
    <div className={styles.principalProject}>
      <div className={styles.projectImage}>
        <img src='/galery/3.png' />
      </div>
      <div className={styles.projectDescription}>
        <span>Townhouse Arturo Prat</span>
        <h2>Proyecto único en el sector</h2>
        <p>
          TownHouse Arturo Prat es un concepto de viviendas que entrega toda la comodidad de una casa y la seguridad de
          un departamento. El proyecto está formado por 7 departamentos: 3 duplex y 4 triplex, con 2 y 3 dormitorios o
          home office, 2 baños y 3 baños más terraza en 4to piso.
        </p>
        <br />
        <p>
          TownHouse Arturo Prat es un proyecto moderno e innovador, caracterizado principalmente por su diseño calidad y
          funcionalidad, manteniendo un concepto de modernidad en cada rincón, fue diseñado para disfrutar de tu casa
          con todo lo que tú y tu familia necesitan, destacan sus espacios cómodos y funcionales con terminaciones
          modernas que te harán sentir una experiencia diferente y única.
        </p>
      </div>
    </div>
  );
};

export default Principal;
