import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';
import CollectionBanner from 'components/CollectionBanner';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CollectionBanner
        image="https://images.unsplash.com/photo-1731497772437-85ca41490c6c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="All Wallets and Small Leather Goods"
        description="Showcasing the Maison’s heritage craftsmanship, Louis Vuitton presents a myriad of small leather goods – from wallets and card holders to passport covers and purses. Imbued with signature details, this collection of contemporary essentials offers everyday versatility across a range of functional silhouettes."
      />
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 text-black md:flex-row">
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </div>
      {/* <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-4 text-black md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div> */}
    </>
  );
}
