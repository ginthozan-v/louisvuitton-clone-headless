import { getCollections } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CollectionsGrid = async () => {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homeCollections = await getCollections();

  return (
    <section className="section-gap">
      <h2 className="text-center text-3xl">Explore a Selection of the Maison's Creations</h2>
      <div className="mx-40 mt-10 grid grid-cols-4 gap-5">
        {homeCollections
          .slice(0, 8).filter(x => x.title !== 'All')
          ?.map((item) => (
            <CollectionItem
              key={item.handle}
              image={item.image.src}
              link={`collections/${item.handle}`}
              title={item.title}
            />
          ))}
      </div>
    </section>
  );
};

export default CollectionsGrid;

const CollectionItem = ({ image, link, title }: any) => {
  return (
    <div>
      <Link href={link}>
        <div className="h-[350px] w-full">
          <Image
            src={image}
            width={720}
            height={720}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-4 text-center text-sm">{title}</p>
      </Link>
    </div>
  );
};
