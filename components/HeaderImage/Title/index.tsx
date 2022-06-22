import React from 'react';
import Image from 'next/image'
import style from './Title.module.scss';
import { TitlePosition } from '../Types';

interface iProps {
  text: string;
  subtitle?: string;
  position?: TitlePosition;
}

const Title = ({ text, subtitle, position }: iProps) => {
  const getPosition = (): string => {
    switch (position) {
      case TitlePosition.topRight:
        return style.titleTopRight;
      case TitlePosition.topLeft:
        return style.titleTopLeft;
      case TitlePosition.centerRight:
        return style.titleCenterRight;
      case TitlePosition.centerLeft:
        return style.titleCenterLeft;
      case TitlePosition.bottomRight:
        return style.titleBottomRight;
      case TitlePosition.bottomLeft:
        return style.titleBottomLeft;
      default:
        return style.titleCenterRight;
    }
  };

  return (
    <div className={getPosition()}>
      <div className={style.logo}>
        <Image src="/home.svg?fill=#FFF" alt="Logo" width={90} height={90} style={{ fill: '#FFF'}}  />
      </div>
      <div>
        <h1>
          {text}
        </h1>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

export default Title;
