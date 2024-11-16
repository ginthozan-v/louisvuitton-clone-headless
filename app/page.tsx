import { Carousel } from 'components/carousel';
import FeaturedCollection from 'components/FeaturedCollection';
import { ThreeItemGrid } from 'components/grid/three-items';
import Banner from 'components/home/Banner';
import CollectionsGrid from 'components/home/CollectionsGrid';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Banner
        image="https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Cruise 2025"
        subTitle="WOMEN"
        link="/"
      />
      <CollectionsGrid />
      <Banner image="https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <FeaturedCollection collectionName="new-collection" />
      <Banner image="https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <FeaturedCollection collectionName="frontpage" />
      {/* <ThreeItemGrid />
      <Carousel />
      <Footer /> */}
    </>
  );
}
