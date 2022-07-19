import type { NextPage } from 'next';
import ImageItem from '../../ItemImg';

import styles from './Styles.module.scss';

const Galery: NextPage = () => {
  return (
    <>
      <div id='galeria' className={styles.Title}>
        <div className={styles.contentTitle}>
          <span>Galería</span>
        </div>
        <div className={styles.imgContent}>
          <div className={styles.contentImg}>
            <ImageItem className={styles.imgClass} uri='/galery/1.png' />
            <ImageItem className={styles.imgClass} uri='/galery/2.png' />
            <ImageItem className={styles.imgClass} uri='/galery/3.png' />
          </div>
          <div className={styles.contentImg}>
            <ImageItem className={styles.imgClass} uri='/galery/4.png' />
            <ImageItem className={styles.imgClass} uri='/galery/5.png' />
            <ImageItem className={styles.imgClass} uri='/galery/6.png' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Galery;
