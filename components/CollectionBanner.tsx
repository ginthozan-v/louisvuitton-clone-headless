import Image from 'next/image';
import React from 'react';

const CollectionBanner = ({ image, title, description }: any) => {
  return (
    <div className="relative h-[calc(100vh+5rem)] w-full">
      {image && (
        <Image
          src={image}
          width={1024}
          height={1024}
          alt="banner"
          className="h-full w-full object-cover object-top"
        />
      )}
      <div className="absolute bottom-0 left-0 flex w-full flex-col items-start gap-3 p-6 md:p-12 max-w-sm text-white">
        {title && <h2 className="text-2xl">{title}</h2>}
        {description && <p className="text-xs font-thin leading-5">{description}</p>}
      </div>
    </div>
  );
};

export default CollectionBanner;
