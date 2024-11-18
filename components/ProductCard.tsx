import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Price from './price';
import { HeartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ image, title, price, currencyCode, link, height, textOverImage }: any) => {
  return (
    <div className="relative">
      <Link href={link}>
        <div className={`h-[${height}px] w-full`}>
          {image && (
            <Image
              src={image}
              width={720}
              height={720}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className={`${textOverImage ? 'absolute bottom-0 left-0 p-3 bg-gradient-to-t from-neutral-400 w-full to-transparent' : ''} `}>
          <p className="mb-1 mt-4 text-left text-sm">{title}</p>
          <Price
            className="text-xs text-neutral-500"
            amount={price}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
        </div>
      </Link>
      <div className="absolute right-4 top-4">
        <HeartIcon className="w-4" />
      </div>
    </div>
  );
};

export default ProductCard;
