import React from 'react';
import { ItemsMenu } from '..';
import { useDrawer } from '../../context/drawer/drawer.provider';

import styles from './Menu.module.scss';

const Menu = () => {
  const { closeDrawer } = useDrawer();

  const hableClick = () => {
    closeDrawer();
  };

  return (
    <div className={styles.content}>
      <img src='/dummies/logo2.png' />
      <div className={styles.title}>
        <h2>TOWNHOUSE</h2>
        <h1>Arturo Prat</h1>
      </div>
      <div>
        <ul>
          {ItemsMenu.map((item, index) => (
            <li key={index}>
              <a onClick={hableClick} href={item.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
