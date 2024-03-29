/** @format */
import { Profile } from '../Util/Utility';
const NameLogo = () => {
  return (
    <>
      {Profile.Name}
      <span className='flex-1 font-normal text-xl items-end'>
        &nbsp; {'/ ' + Profile.Designation}
      </span>
    </>
  );
};

export default NameLogo;
