/** @format */
import { NavBarJson } from '../Util/Utility';
const NavBarList = (props) => {
  const onMenuClick = () => {
    props.MenuOpen(false);
  };
  return (
    <div>
      <ul>
        {NavBarJson.map((nav) => (
          <a href={nav.link}>
            <li
              className='mr-4 hover:text-yellow-500 font-sans font-semibold mt-2 text-lg'
              key={nav.label}
              onClick={onMenuClick}>
              {nav.label}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
export default NavBarList;
