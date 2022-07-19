import type { NextPage } from 'next';
import { useState } from 'react';
import { useModal } from '../context/modal/modal.provider';

import styles from './Styles.module.scss';

const ImageItem = ({ uri, className }: { uri: string; className?: string }) => {
  const { openModal } = useModal();

  const handleImage = (img: string) => {
    openModal({
      size: 'lg',
      modalComponent: (
        <div
          style={{
            margin: -20,
          }}
        >
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

  return (
    <div className={styles.contentDiv}>
      <img className={className} onClick={() => handleImage(uri)} src={uri} />
    </div>
  );
};

export default ImageItem;
