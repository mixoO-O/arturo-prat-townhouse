import React from 'react';
import { Carousel } from 'rsuite';
import styles from './Characteristics.module.scss';
import stylesProjects from '../Projects/Principal/Principal.module.scss';

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
          <li>
            <span>+</span> Pisos con porcelanato
          </li>
          <li>
            <span>+</span> Muros de hormigón visto
          </li>
          <li>
            <span>+</span> Ventanas de aluminio Termopanel
          </li>
          <li>
            <span>+</span> Cocina incorporada equipada con encimera, horno y campana
          </li>
          <li>
            <span>+</span> Cubiertas de cuarzo
          </li>
          <li>
            <span>+</span> Cerámica rectificada en baños y cocina
          </li>
          <li>
            <span>+</span> Instalación para lavadora y agua caliente individual con termo eléctrico
          </li>
          <li>
            <span>+</span> Ducha baño principal con mampara de vidrio
          </li>
          <li>
            <span>+</span> Baños con mueble vanitorio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Characteristics;
