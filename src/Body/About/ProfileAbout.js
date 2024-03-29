/** @format */
import * as image from '../../../Assets/1689765629196-Photoroom.png-Photoroom.png';
import { Profile } from '../../Util/Utility';

const ProfileLogo = () => {
  return (
    <div className='m-6 px-10'>
      <div className=' flex justify-center my-10'>
        <img className=' rounded-full h-52' src={image} />
      </div>
      <div className='lg:m-6 2xl:m-6 xl:m-6 md:m-6'>
        <h1 className='text-3xl font-bold font-sans flex justify-center'>
          {Profile.Name}
        </h1>
        <div class='flex-grow border-t border-2 border-yellow-200 my-3  '></div>
        <h1 className='text-lg  flex justify-center '>{Profile.Designation}</h1>
      </div>
    </div>
  );
};

export default ProfileLogo;
