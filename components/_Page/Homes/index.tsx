import type { NextPage } from 'next';
import { useState } from 'react';
import { Carousel, Nav } from 'rsuite';
import ItemImg from '../../ItemImg';

import styles from './Styles.module.scss';

type house = 'casaA' | 'casaB' | 'casaC';

const CASAA = [
  '2 dormitorios',
  '3er dormitorio o home office',
  '3 baños – terraza 4to piso',
  'Superficie total.: 105m2',
];

const CASAB = ['2 dormitorios', '2 baños – terraza 4to piso', 'Superficie total.: 97m2'];

const CASAC = ['2 dormitorios', '2 baños – terraza 4to piso', 'Superficie total.: 85m2'];

interface IItemHouse {
  title: string;
  details: string[];
  children: JSX.Element;
}

const Homes: NextPage = () => {
  const [tabActive, setTabActive] = useState<house>('casaA');

  const ItemHouse = ({ title, details, children }: IItemHouse) => (
    <div className={styles.contentHouse}>
      <div className={styles.titleHouse}>
        <span>{title}</span>
        {details.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className={styles.carousel}>{children}</div>
    </div>
  );

  return (
    <>
      <div id='tower' className={styles.container}>
        <div className={styles.title}>
          <span>Townhouse</span>
          <h2>Tu espacio para soñar</h2>
        </div>
        <div>
          <Nav appearance='subtle' justified onSelect={setTabActive} activeKey={tabActive}>
            <Nav.Item eventKey='casaA'>Casa A</Nav.Item>
            <Nav.Item eventKey='casaB'>Casa B</Nav.Item>
            <Nav.Item eventKey='casaC'>Casa C</Nav.Item>
          </Nav>
        </div>
        <div className={styles.imgContent}>
          {tabActive === 'casaA' && (
            <ItemHouse title='Casa A' details={CASAA}>
              <ItemImg uri='/houses/TIPOLOGIA_A.png' />
            </ItemHouse>
          )}
          {tabActive === 'casaB' && (
            <ItemHouse title='Casa B' details={CASAB}>
              <ItemImg uri='/houses/TIPOLOGIA_B.png' />
            </ItemHouse>
          )}
          {tabActive === 'casaC' && (
            <ItemHouse title='Casa C' details={CASAC}>
              <ItemImg uri='/houses/TIPOLOGIA_C.png' />
            </ItemHouse>
          )}
        </div>
      </div>
    </>
  );
};

export default Homes;
