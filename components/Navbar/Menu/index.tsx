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
      <div className={styles.contentImg}>
        <img src='/dummies/logo2.png' />
      </div>
      <div className={styles.title}>
        <h1>Arturo Prat</h1>
        <h3>TOWNHOUSE</h3>
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
