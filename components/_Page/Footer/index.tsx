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
}

const Footer: NextPage = () => {
  const Item = ({ icon, title, details }: IItem) => (
    <div className={styles.item}>
      <div>{icon}</div>
      <span className={styles.title}>{title}</span>
      <div className={styles.details}>{details}</div>
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
            title='Dirección'
            details='Arturo Prat N° 1497 Santiago'
          />

          <Item icon={<EmailIcon className={styles.icon} />} title='Email' details='Ventas@ideuman.cl' />

          <Item
            icon={<PeoplesIcon className={styles.icon} />}
            title='Asesoría en línea'
            details='lun a Vie 09:00 a 19:00, sáb a dom 11:00 a 18:00'
          />

          <Item icon={<PhoneIcon className={styles.icon} />} title='Teléfono' details='+569 3260 6098' />

          <Item icon={<AdminIcon className={styles.icon} />} title='Adquitecto' details='@Cristianirarrazaval' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
