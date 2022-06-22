import React, { ReactElement } from 'react';
import { ImageAnimation } from '../Types';
import styles from './ImageBackground.module.scss';

interface iProps {
  children: ReactElement;
  animation?: ImageAnimation;
}

const ImageBackground = ({ animation, children }: iProps) => {
  const getType = (): string => {
    switch (animation) {
      case ImageAnimation.movement:
        return styles.imageMovement;
      case ImageAnimation.zoomOut:
        return styles.imageZoomOut;
      default:
        return styles.imageZoomOut;
    }
  };

  return <div className={getType()}>{children}</div>;
};

export default ImageBackground;
