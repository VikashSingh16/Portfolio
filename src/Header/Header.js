/** @format */

import NavBar from './NavBar';
import { Profile } from '../Util/Utility';

const Header = () => {
  return (
    <div className='w-full h-20'>
      <div className='flex justify-center mt-6 mx-6'>
        <div className='flex justify-end w-1/3 ml-10 text-2xl font-bold'>
          {Profile.Name}
          <span className='font-normal text-lg'>
            &nbsp; {'/ ' + Profile.Designation}
          </span>
        </div>
        <div className='flex justify-center w-2/3  content-center mr-10 text-lg'>
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
