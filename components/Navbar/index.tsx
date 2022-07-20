import React, { useState, useEffect, MutableRefObject, useRef } from 'react';
import MenuIcon from '@rsuite/icons/Menu';
import styles from './Navbar.module.scss';
import Menu from './Menu';
import { useDrawer } from '../context/drawer/drawer.provider';

interface Items {
  text: string;
  link: string;
}

export const ItemsMenu: Items[] = [
  {
    text: 'Proyecto',
    link: '#proyecto',
  },
  {
    text: 'Características',
    link: '#caracteristicas',
  },

  {
    text: 'Townhouse',
    link: '#tower',
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
];

interface iProps {
  bodyRef: MutableRefObject<null>;
}

const Navbar = ({ bodyRef }: iProps) => {
  const { openDrawer } = useDrawer();
  const navbarRef = useRef(null);
  const [menuDisplayed, setMenuDisplayed] = useState<boolean>(false);
  const [navbarClass, setNavbarClass] = useState<string>(styles.desktopNavbar);

  useEffect(() => {
    if (bodyRef && bodyRef.current) {
      const bodyContent = bodyRef.current as HTMLElement;
      bodyContent.addEventListener('click', () => {
        setMenuDisplayed(false);
      });
    }
  }, [bodyRef]);

  useEffect(() => {
    if (window) {
      const setClass = () => {
        const navbar: HTMLElement = navbarRef.current as unknown as HTMLElement;
        const sticky = navbar.offsetTop - 35;
        const isMobile = window.innerWidth <= 900;

        if (window.pageYOffset >= sticky) {
          setNavbarClass(isMobile ? styles.mobileNavbarFixed : styles.desktopNavbarFixed);
        } else {
          setNavbarClass(isMobile ? styles.mobileNavbarFixed : styles.desktopNavbar);
        }
      };

      // First render
      setClass();

      // Scrol and resize events
      window.onresize = setClass;
      window.onscroll = setClass;
    }
  }, [window]);

  const handleMenu = () => {
    openDrawer({
      drawerComponent: <Menu />,
    });
  };

  return (
    <>
      <div className={navbarClass}>
        <div>
          <MenuIcon onClick={handleMenu} />
        </div>
        <ul className={menuDisplayed ? styles.displayed : ''}>
          {ItemsMenu.map((item, index) => (
            <li key={index}>
              <a href={item.link} onClick={() => setMenuDisplayed(false)}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <span>
          <img src='/dummies/logo2.png' />
        </span>
      </div>

      <div ref={navbarRef}></div>
    </>
  );
};

export default Navbar;
