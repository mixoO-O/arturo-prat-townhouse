import React, { useState, useEffect, MutableRefObject, useRef } from 'react';
import MenuIcon from '@rsuite/icons/Menu';
import styles from './Navbar.module.scss';

interface Items {
  text: string;
  link: string;
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
    text: 'Plantas',
    link: '#plantas',
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
  bodyRef: MutableRefObject<null>
}

const Navbar = ({ bodyRef }: iProps) => {
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
  }, [bodyRef])

  useEffect(() => {
    if (window) {
      const setClass = () => {
        const navbar: HTMLElement = navbarRef.current as unknown as HTMLElement;
        const sticky = navbar.offsetTop - 35;
        const isMobile = window.innerWidth <= 900;

        if (window.pageYOffset >= sticky) {
          setNavbarClass(isMobile ? styles.mobileNavbarFixed : styles.desktopNavbarFixed);
        } else {
          setNavbarClass(isMobile ? styles.mobileNavbar : styles.desktopNavbar);
        }
      };

      // First render
      setClass();

      // Scrol and resize events
      window.onresize = setClass;
      window.onscroll = setClass;
    }
  }, [window]);

  return (
    <>
      <div className={navbarClass}>
        <div>
          <MenuIcon onClick={() => setMenuDisplayed(!menuDisplayed)} />
        </div>
        <ul className={menuDisplayed ? styles.displayed : ''}>
          {items.map((item, index) => (
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
