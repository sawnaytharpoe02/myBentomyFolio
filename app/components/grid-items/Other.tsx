import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';
import Game from './Game';
import Map from './Map';

const Other = ({ item }: { item: IGridItems }) => {
  console.log('di mhr pr', item);

  return item.tag === 'game' ? (
    <Game item={item} />
  ) : item.tag === 'map' ? (
    <Map item={item} />
  ) : (
    <div>I think this is someting</div>
  );
};

export default Other;
