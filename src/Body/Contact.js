/** @format */

const Contact = () => {
  return (
    <div className='flex justify-center mt-24'>
      <div className='w-9/12 flex justify-center'>
        <div className='w-1/4 h-1/3 flex flex-col items-stretch bg-slate-700 text-white p-10'>
          <span className='text-2xl font-sans font-bold'>Say Hello @</span>
          <span className='text-lg font-sans '>progvikashsingh@gmail.com</span>
        </div>
        <div className='w-2/3 flex justify-center'>
          <div className=' flex flex-col  w-2/3'>
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
            <button className='bg-yellow-400 rounded-full w-2/5 h-12 mt-10 text-white font-bold flex ml-auto justify-center pt-3'>
              Send Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
