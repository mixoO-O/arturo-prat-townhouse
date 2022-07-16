import type { NextPage } from 'next';
import { useModal } from '../../context/modal/modal.provider';

import styles from './Styles.module.scss';

const Galery: NextPage = () => {
  const { openModal } = useModal();

  const handleImage = (img: string) => {
    openModal({
      size: 'lg',
      modalComponent: (
        <div>
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            src={img}
          />
        </div>
      ),
    });
  };

  const ImageItem = ({ uri }: { uri: string }) => (
    <div className={styles.contentDiv}>
      <img onClick={() => handleImage(uri)} src={uri} />
    </div>
  );

  return (
    <>
      <div id='galeria' className={styles.Title}>
        <div className={styles.contentTitle}>
          <span>GALERÍA</span>
        </div>
        <div className={styles.imgContent}>
          <div className={styles.contentImg}>
            <ImageItem uri='/galery/1.png' />
            <ImageItem uri='/galery/2.png' />
            <ImageItem uri='/galery/3.png' />
          </div>
          <div className={styles.contentImg}>
            <ImageItem uri='/galery/4.png' />
            <ImageItem uri='/galery/5.png' />
            <ImageItem uri='/galery/6.png' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Galery;
