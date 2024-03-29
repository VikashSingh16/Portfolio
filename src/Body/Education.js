/** @format */

const Education = () => {
  return (
    <div className=''>
      <span className='text-4xl font-bold flex justify-center mt-10'>
        Education
      </span>
      <div className='flex justify-evenly mt-16 m-3'>
        <ol class='relative border-s border-gray-300'>
          <li class='mb-10 ms-4'>
            <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-violet-700'></div>
            <time class='mb-1 text-lg font-light leading-none text-gray-500 '>
              Octocber 2021
            </time>
            <h3 class='text-3xl font-bold text-gray-900'>
              Master of Computer Application
            </h3>
            <p class='text-lg font-normal text-gray-600'>
              Completed Masters in Computer Applications from SASTRA, Chennai,
              INDIA
            </p>
          </li>
          <li class='mb-10 ms-4'>
            <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-violet-700'></div>
            <time class='mb-1 text-lg font-light leading-none text-gray-500'>
              May 2018
            </time>
            <h3 class='text-3xl font-bold  text-gray-900 '>
              Bachelor of Computer Application
            </h3>
            <p class='text-lg font-normal text-gray-600'>
              Finished Bachelor in Computer Applications in 2018 from DAV
              Centnary College, Faridabad, INDIA
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
