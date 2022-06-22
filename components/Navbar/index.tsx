import React from 'react';
import styles from './Navbar.module.scss';

interface Items {
  text: string,
  link: string,
}

const items: Items[] = [
  {
    text: 'Proyecto',
    link: '#proyecto',
  },
  {
    text: 'Galería',
    link: '#galeria',
  },
  {
    text: 'Entorno',
    link: '#entorno',
  },
  {
    text: 'Contacto',
    link: '#contacto',
  },
]

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
