import React, { useEffect, useState } from 'react';
import styles from './HeaderImage.module.scss';

const HeaderImage = () => {
  const [number, setNumber] = useState<number>(1);

  const sendEmail = () => {
    const email = 'ventas@ideuman.cl';
    const subject = 'Proyecto Arturo Prat Townhouse';
    const emailBody = 'Me interesa el proyecto%0A%0AFavor contactar';
    document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  };

  const handleBackgroundImage = () => {
    let div = document.getElementById('backgroundImage');
    if (div) div.style.backgroundImage = `url(/galery/${number}.png)`;
    setTimeout(() => {
      if (number < 6) {
        const n = number + 1;
        setNumber(n);
      } else {
        setNumber(1);
      }
    }, 5000);
  };

  useEffect(() => {
    handleBackgroundImage();
  }, [number]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBackground} id='backgroundImage'></div>
      <div className={styles.headerLayout}>
        <div className={styles.headerTitle}>
          <div>
            <img src='/dummies/logo2.png' />
            <div>
              <h1>Arturo Prat</h1>
              <h3>TOWNHOUSE</h3>
            </div>
          </div>
        </div>

        <div className={styles.headerSubtitle}>
          <h2>Toda la comodidad de una casa con la seguridad de un departamento</h2>
        </div>

        <div className={styles.headerList}>
          <ul>
            <li>
              <img
                width={35}
                style={{
                  marginRight: 16,
                  marginLeft: 6,
                }}
                height={35}
                src={'/houses/cama.svg'}
              />
              2 y 3 Dormitorios o home office{' '}
            </li>
            <li>
              {' '}
              <img
                width={45}
                style={{
                  marginRight: 5,
                }}
                height={45}
                src={'/houses/bano.svg'}
              />{' '}
              2 y 3 baños
            </li>
            <li>
              <img
                width={45}
                style={{
                  marginRight: 10,
                }}
                height={45}
                src={'/houses/dimencion.svg'}
              />
              Desde 86 ㎡ totales
            </li>
          </ul>
        </div>

        <div onClick={sendEmail} className={styles.headerReservation}>
          <div>
            <span>
              <p>RESERVA AHORA</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
