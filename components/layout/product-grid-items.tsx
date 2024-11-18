import Grid from 'components/grid';
import ProductCard from 'components/ProductCard';
import { Product } from 'lib/shopify/types';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <ProductCard
            key={product.id}
            image={product.featuredImage?.url}
            title={product.title}
            price={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            link={`/product/${product.handle}`}
            height="450"
            textOverImage
          />
        </Grid.Item>
      ))}
    </>
  );
}
