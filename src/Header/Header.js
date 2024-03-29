/** @format */

import NavBar from './NavBar';
import NameLogo from './NameLogo';
import HamburgerButton from './HamburgerButton';
import { useState } from 'react';
import NavBarList from './NavBarList';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const MenuOpen = (data) => {
    setMenuOpen(data);
  };
  console.log(isMenuOpen);
  return (
    <div className='w-full'>
      <div className='flex justify-center mt-6 lg:mx-6'>
        <div className='flex-1 sm:3/4 sm:justify-start text-center w-1/2 ml-16 text-2xl font-bold '>
          <NameLogo />
        </div>
        <div className='justify-center w-1/2  content-center mr-10 text-lg hidden lg:flex 2xl:flex xl:flex'>
          <NavBar />
        </div>
        <div className='flex w-1/4  justify-end  content-center mr-10 text-lg 2xl:hidden xl:hidden lg:hidden '>
          <HamburgerButton MenuOpen={MenuOpen} />
        </div>
      </div>
      <div
        className={`w-full flex justify-center mt-6 border-slate-100  ${
          isMenuOpen ? 'border-b-2' : ''
        }`}>
        {isMenuOpen && <NavBarList />}
      </div>
    </div>
  );
};

export default Header;
