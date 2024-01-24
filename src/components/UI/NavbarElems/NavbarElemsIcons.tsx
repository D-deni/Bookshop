import React, {useEffect} from 'react';

import UserIcon from '@/assets/img/icons/user.svg'
import SearchIcon from '@/assets/img/icons/search.svg'
import ShopIcon from '@/assets/img/icons/shop-bag.svg'

const Icons = [UserIcon, SearchIcon, ShopIcon]
const width = 20
const height = 20
const NavbarElemsIcons = () => {
  return (
    <div className={'flex gap-x-10 '}>
      <UserIcon className={'cursor-pointer'} width={width} height={height}/>
      <SearchIcon className={'cursor-pointer'} width={width} height={height}/>
      <div className={'relative'}>
        <ShopIcon className={'cursor-pointer'} width={width} height={height}/>
        <div className={'absolute rounded-full w-[15px] bg-red-500 top-3 -right-1'}>
          <p className={'text-[11px] text-white flex justify-center items-center'}></p>
        </div>
      </div>
    </div>
  );
};

export default NavbarElemsIcons;