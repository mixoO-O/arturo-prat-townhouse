import React from 'react';
import styles from './HeaderImage.module.scss';

const HeaderImage = () => (
  <div className={styles.headerWrapper}>
    <div className={styles.headerBackground}></div>
    <div className={styles.headerLayout}>
      <div className={styles.headerTitle}>
        <div>
          <img src='/dummies/logo2.png' />
          <h2>TOWNHOUSE</h2>
          <h1>Arturo Prat</h1>
        </div>
      </div>

      <div className={styles.headerSubtitle}>
        <h2>Toda la comodidad de una casa con la seguridad de un departamento</h2>
      </div>

      <div className={styles.headerList}>
        <ul>
          <li>2 y 3 Dormitorios o home office </li>
          <li>2 baños y 3 baños</li>
          <li>Desde 86m2 totales</li>
        </ul>
      </div>

      <div className={styles.headerReservation}>
        <div>
          <span>RESERVA AHORA</span>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderImage;
