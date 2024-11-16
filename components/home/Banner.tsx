import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = ({ image, title, subTitle, link }: any) => {
  return (
    <div className="section-gap relative !mt-0 h-[calc(100vh-8rem)] w-full">
      <Image
        src={image}
        width={1024}
        height={1024}
        alt="banner"
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-6 pb-12 text-white">
        {subTitle && <h3 className="text-xs">{subTitle}</h3>}
        {title && <h2 className="text-3xl">{title}</h2>}
        {link && (
          <Link href={link} className="text-sm underline underline-offset-4">
            Discover the Collection
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
