import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import { HeartIcon, UserIcon } from '@heroicons/react/24/outline';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('main-menu');

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-12 lg:py-5">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
          {/* <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense> */}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div className="ml-2 flex-none text-3xl font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="hidden justify-end md:flex items-center md:w-1/3 gap-4">
          <HeartIcon className='h-5' />
          <UserIcon className='h-5' />
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
