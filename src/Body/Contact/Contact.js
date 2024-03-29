/** @format */

import { Profile } from '../../Util/Utility';

const Contact = () => {
  return (
    <div className='flex justify-center mt-24' id='contact'>
      <div className='w-9/12 lg:flex 2xl:flex xl:flex  justify-center'>
        <div className='2xl:w-1/4 xl:w-2/5 lg:1/4 md:w-3/4 sm:w-full h-1/3 flex flex-col items-stretch bg-slate-700 text-white p-10'>
          <span className='text-2xl font-sans font-bold'>Say Hello @</span>
          <span className='text-lg font-sans '>{Profile.Contact.Email}</span>
        </div>
        <div className='2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full lg:mt-10 md:mt-10    2xL:flex  lg:flex xl:flex justify-center'>
          <div className=' flex flex-col  2xl:w-2/3  xl:w-2/3  lg:w-2/3 mt-10 2xl:m-0 xl:m-0 lg:m-0 '>
            <span className='text-4xl  font-sans font-bold'>
              Interested to work together?
            </span>
            <span className='text-4xl font-sans font-bold my-3'>
              Let's talk
            </span>
            <span>
              <span className='flex flex-row justify-between mt-7'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='border border-gray-400 h-10 w-5/12  placeholder:text-slate-500 placeholder:font-bold placeholder:px-2'></input>
                <input
                  type='email'
                  placeholder='Email'
                  className='border border-gray-400 h-10 w-5/12 placeholder:text-slate-500 placeholder:font-bold placeholder:px-2'></input>
              </span>
            </span>

            <span>
              <textarea
                placeholder='Message'
                rows='4'
                cols='50'
                className='border border-gray-400 h-32 w-full mt-7 placeholder:text-slate-500 placeholder:font-bold placeholder:px-2 placeholder:py-2'></textarea>
            </span>
            <button className='bg-yellow-400 rounded-full w-2/5 h-12 mt-10 text-white font-bold flex ml-auto justify-center pt-3 hover:bg-yellow-500'>
              Send Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
