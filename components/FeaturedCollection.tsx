import { getCollectionProducts } from 'lib/shopify';
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedCollection = async ({ collectionName }: { collectionName: string }) => {
  const homepageItems = await getCollectionProducts({
    collection: collectionName
  });

  return (
    <section className="section-gap">
      <div className="text-center">
        <p className="text-xs">NEW</p>
        <h3 className="mt-4 text-2xl">Louis Vuitton Colormania</h3>
      </div>
      <div className="mx-40 mt-10 grid grid-cols-4 gap-5">
        {homepageItems
          ?.slice(0, 4)
          .map((item) => (
            <ProductCard
              key={item.id}
              image={item.featuredImage.url}
              title={item.title}
              price={item.priceRange.maxVariantPrice.amount}
              currencyCode={item.priceRange.maxVariantPrice.currencyCode}
              link={`/product/${item.handle}`}
            />
          ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="rounded-full border border-black p-4 px-10 text-center text-sm transition-all ease-in hover:border-2">
          Discover the Collection
        </button>
      </div>
    </section>
  );
};

export default FeaturedCollection;
