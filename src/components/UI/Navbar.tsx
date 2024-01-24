import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import NavbarElemsList from "@/components/UI/NavbarElems/NavbarElemsList";
import NavbarElemsIcons from "@/components/UI/NavbarElems/NavbarElemsIcons";
import Bars from '@/assets/img/icons/bars.svg'
const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
      <div className={'top-0 w-full fixed z-20 bg-white border-b max-md:flex max-md:justify-around max-md:items-center max-md:h-20 max-md:'}>
        <div className={'hover:scale-105 transition-all max-md:block hidden '}>
          <Link to={'/'} className={'text-xl font-bold font-montserratBold '}>Bookshop</Link>
        </div>
        <div className={ !isActive
          ? 'max-md:hidden flex justify-around items-center h-20 max-md:justify-center max-md:px-4 max-md:gap-y-4 max-md:rounded-b-full max-md:mx-20 max-md:bg-gray-100 max-md:fixed max-md:flex-col max-md:items-center top-20 max-md:z-0'
          : 'flex justify-around items-center h-20 max-md:justify-center max-md:px-4 max-md:gap-y-4 max-md:rounded-b-full max-md:mx-20 max-md:bg-gray-100 max-md:fixed max-md:flex-col max-md:items-center top-20 max-md:z-0'
        }>
          <div className={'hover:scale-105 transition-all max-md:hidden'}>
            <Link to={'/'} className={'text-xl font-bold font-montserratBold '}>Bookshop</Link>
          </div>
          <div className={''}>
            <NavbarElemsList/>
          </div>
          <div className={''}>
            <NavbarElemsIcons />
          </div>
        </div>
        <button onClick={()=>{setIsActive(!isActive)}} className={'hidden max-md:block max-md:rotate-180'} >
          <Bars width={30} height={30} color={'black'}/>
        </button>
      </div>
  );
};

export default Navbar;