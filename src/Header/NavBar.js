/** @format */

import { NavBarJson } from '../Util/Utility';
const NavBar = () => {
  return (
    <div>
      <ul className='flex '>
        {NavBarJson.map((nav) => (
          <a href={nav.link}>
            <li
              className='mr-4 hover:text-yellow-500 font-sans font-semibold'
              key={nav.label}>
              {nav.label}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
