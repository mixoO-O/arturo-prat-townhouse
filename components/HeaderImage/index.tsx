import React from 'react';
import Title from './Title';
import { HeaderType, ImageAnimation } from './Types';
import ImageBackground from './ImageBackground';

import styles from './HeaderImage.module.scss';

interface iProps {
  title: string;
  subtitle?: string;
  type?: HeaderType;
  animation?: ImageAnimation;
}

const HeaderImage = (props: iProps) => {
  const getType = (): string => {
    switch (props.type) {
      case HeaderType.full:
        return styles.headerFull;
      case HeaderType.medium:
        return styles.headerMid;
      default:
        return styles.headerFull;
    }
  }

  return (
    <div className={getType()}>
      <ImageBackground animation={props.animation}>
        <Title text={props.title} subtitle={props.subtitle} />
      </ImageBackground>
    </div>
  );
};

export default HeaderImage;
