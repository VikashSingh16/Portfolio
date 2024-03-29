/** @format */
import { useState } from 'react';
const HamburgerButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  const MenuOpen = () => {
    setIsOpen(!isOpen);
    props.MenuOpen(!isOpen);
  };
  return (
    <div>
      <button
        className='flex flex-col h-14 w-14 bg-slate-600 rounded-full justify-center items-center groupl'
        onClick={() => MenuOpen()}>
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
};

export default HamburgerButton;
