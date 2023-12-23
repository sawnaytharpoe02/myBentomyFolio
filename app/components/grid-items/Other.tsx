import React from 'react';
import { IGridItems } from '@/config/siteConfig';
import Image from 'next/image';
import Game from './Game';
import Map from './Map';
import Book from './Book';
import Art from './Art';

const Other = ({ item }: { item: IGridItems }) => {

  return item.tag === 'game' ? (
    <Game item={item} />
  ) : item.tag === 'map' ? (
    <Map item={item} />
  ) : item.tag === 'book' ? (
    <Book item={item} />
  ) : item.tag === 'art' ? (
    <Art item={item} />
  ) : (
    <div>Some awesome things</div>
  );
};

export default Other;
