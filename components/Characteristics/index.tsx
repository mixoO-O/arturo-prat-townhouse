import React from 'react';
import { Carousel } from 'rsuite';
import styles from './Characteristics.module.scss';
import stylesProjects from '../Projects/Principal/Principal.module.scss';

const listItems = [
  'Pisos con porcelanato',
  'Muros de hormigón visto',
  'Ventanas de aluminio Termopanel',
  'Cocina incorporada equipada con encimera, horno y campana',
  'Cubiertas de cuarzo',
  'Cerámica rectificada en baños y cocina',
  'Instalación para lavadora y agua caliente individual con termo eléctrico',
  'Ducha baño principal con mampara de vidrio',
  'Baños con mueble vanitorio',
];

const Characteristics = () => {
  return (
    <div className={styles.characteristics}>
      <div>
        <Carousel autoplay>
          <img src='/houses/house_1.jpg' />
          <img src='/houses/house_2.jpg' />
          <img src='/houses/house_3.jpg' />
        </Carousel>
      </div>
      <div className={stylesProjects.projectDescription}>
        <span>Características</span>
        <h2>Exclusividad y Diseño</h2>
        <p>
          Una distribución única de espacios con modernas terminaciones y calidad en cada detalle, con un diseño que
          permite disfrutar de cada espacio por su funcionalidad y armonía.
        </p>
        <br />
        <p>
          Enamórate de una terraza única, amplia y cómoda, diseñada para compartir en familia y disfrutar de la vida.
        </p>
        <br />
        <ul>
          {listItems.map((text, index) => (
            <li key={index}>
              <span>+</span> {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characteristics;
