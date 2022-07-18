import React from 'react';
import styles from './Secondary.module.scss';

const Secondary = () => {
  return (
    <div className={styles.secondaryProject}>
      <div className={styles.projectImage}>
        <img src='/galery/2.png' />
      </div>
      <div className={styles.projectDescription}>
        <span>Comodidad</span>
        <ul>
          <li>
            <span>+</span> Solo 7 townhouse.
          </li>
          <li>
            <span>+</span> Terrazas independientes.
          </li>
          <li>
            <span>+</span> Acceso único.
          </li>
          <li>
            <span>+</span> Estacionamientos.
          </li>
          <li>
            <span>+</span> Bicicletero.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Secondary;
