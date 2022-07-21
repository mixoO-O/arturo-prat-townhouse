import type { NextPage } from 'next';
import LocationIcon from '@rsuite/icons/Location';
import EmailIcon from '@rsuite/icons/Email';
import PeoplesIcon from '@rsuite/icons/Peoples';
import PhoneIcon from '@rsuite/icons/Phone';
import AdminIcon from '@rsuite/icons/Admin';

import styles from './Styles.module.scss';

interface IItem {
  icon: JSX.Element;
  title: string;
  details: string;
  open?: string;
  openLink?: string;
  openEmail?: boolean;
}

const Footer: NextPage = () => {
  const sendEmail = () => {
    const email = 'ventas@ideuman.cl';
    const subject = 'Proyecto Arturo Prat Townhouse';
    const emailBody = 'Me interesa el proyecto%0A%0AFavor contactar';
    document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  };

  const Item = ({ icon, title, details, open, openLink, openEmail = false }: IItem) => (
    <div className={styles.item}>
      <div>{icon}</div>
      <span className={styles.title}>{title}</span>

      {open ? (
        <div onClick={() => (window.location.href = open)} className={styles.detailsLink}>
          {details}
        </div>
      ) : openLink ? (
        <div onClick={() => window.open(openLink)} className={styles.detailsLink}>
          {details}
        </div>
      ) : openEmail ? (
        <div onClick={() => sendEmail()} className={styles.detailsLink}>
          {details}
        </div>
      ) : (
        <div className={styles.details}>{details}</div>
      )}
    </div>
  );

  return (
    <div id='contacto'>
      <div className={styles.Footer}>
        <div className={styles.title}>
          <span>¿Tienes dudas?</span>
        </div>
        <div className={styles.detail}>
          <span>INFORMACIÓN DEL PROYECTO</span>
        </div>
        <div className={styles.contentItems}>
          <Item
            icon={<LocationIcon className={styles.icon} />}
            openLink='https://www.google.com/maps/place/Arturo+Prat+1497,+Santiago,+8361556,+Regi%C3%B3n+Metropolitana/@-33.4636825,-70.6533874,15.07z/data=!4m5!3m4!1s0x9662c5156a358c49:0x826cc57a38277297!8m2!3d-33.4657344!4d-70.6471692'
            title='Dirección'
            details='Arturo Prat N° 1497 Santiago'
          />

          <Item icon={<EmailIcon className={styles.icon} />} openEmail title='Email' details='Ventas@ideuman.cl' />

          <Item
            icon={<PhoneIcon className={styles.icon} />}
            open='tel:56932606098'
            title='Teléfono'
            details='+569 3260 6098'
          />

          <Item
            icon={<AdminIcon className={styles.icon} />}
            openLink='https://www.instagram.com/Cristianirarrazaval/'
            title='Arquitecto'
            details='@Cristianirarrazaval'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
