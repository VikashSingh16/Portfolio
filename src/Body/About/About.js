/** @format */

import AboutDesc from './AboutDesc';
import ProfileLogo from './ProfileAbout';

const About = () => {
  return (
    <div
      className='2xl:flex xl:flex lg:flex justify-center m-2 mt-20'
      id='about'>
      <ProfileLogo />
      <div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full  m-6 2xl:flex xl:flex md:flex flex-col justify-center'>
        <AboutDesc />
      </div>
    </div>
  );
};

export default About;
