import React from 'react';
import {NavLink} from "react-router-dom";

const navList = [
  {
    id: 0,
    name: 'Books',
    link: '/',
  },
  {
    id: 1,
    name: 'Audiobooks',
    link: '/audiobooks',
  },
  {
    id: 2,
    name: 'Stationery & gifts',
    link: '/cart',
  },
  {
    id: 3,
    name: 'blog',
    link: '/blog',
  },
]
const NavbarElemsList = () => {
  return (
    <nav id='sidebar' className={'flex font-montserratBold uppercase text-[11px] max-[375px]:text-[9px] max-[375px]:text-center gap-x-10'}>
      {
        navList.map((item, id) => (
          <NavLink to={item.link}
                   key={id}
                   className={'text-gray-400 hover:text-black hover:underline transition-all  '}
          >
            {item.name}
          </NavLink>
        ))
      }
    </nav>
  );
};

export default NavbarElemsList;