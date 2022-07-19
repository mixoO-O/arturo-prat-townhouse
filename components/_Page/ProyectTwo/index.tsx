import React from 'react';
import { Carousel } from 'rsuite';
import ItemImg from '../../ItemImg';
import styles from './Styles.module.scss';

const listItems = [
  'Solo 7 townhouse.',
  'Terrazas independientes.',
  'Acceso único.',
  'Estacionamientos.',
  'Bicicletero.',
];

const ProyectTwo = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.car}>
          <ItemImg uri='/galery/2.png' />
        </div>
        <div className={styles.contentText}>
          <span>Comodidad</span>
          <ul>
            {listItems.map((text, index) => (
              <li key={index}>
                <span>+</span> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProyectTwo;
