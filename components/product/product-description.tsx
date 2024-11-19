import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';
import { HeartIcon } from '@heroicons/react/24/outline';

export function ProductDescription({ product }: { product: Product }) {

  return (
    <>
      <div className="mb-16 flex flex-col">
        <div className='flex items-center justify-between mb-4'>
          <p className='text-xs'>{product.variants[0]?.sku}</p>
          <HeartIcon className='w-4' />
        </div>
        <h1 className="mb-0.5 text-lg font-medium">{product.title}</h1>
        <div className="mr-auto w-auto text-sm">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <div className='mb-5'>
        <VariantSelector options={product.options} variants={product.variants} />
      </div>
      <AddToCart product={product} />

      {product.descriptionHtml  ? (
        <>
          <div className='relative max-h-[60px] w-full overflow-hidden mt-10'>
            <Prose
              className=" text-sm leading-tight !text-black "
              html={product.descriptionHtml}
            />
            <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white'></div>
          </div>
          <button className='text-black mb-4 text-xs underline underline-offset-4'>See More</button>
        </>
      ) : null}
    </>
  );
}

