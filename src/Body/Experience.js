/** @format */

const Experience = () => {
  return (
    <div>
      <div className='mt-24'>
        <span className='text-4xl font-bold font-sans flex justify-center mt-9'>
          Experience
        </span>
      </div>
      <div className='flex justify-center flex-col'>
        <section>
          <div className='container max-w-5xl px-4 py-12 mx-auto'>
            <div className='grid gap-4 mx-4 sm:grid-cols-12'>
              <div className='col-span-12 sm:col-span-3'>
                <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600'>
                  <h3 className='text-3xl font-semibold'>
                    Optum Global Solution
                  </h3>
                  <span className='text-sm font-light tracking-wider dtext-gray-600'>
                    <time>Feb 2022 to Current</time>
                  </span>
                </div>
              </div>
              <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
                <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300'>
                  <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600'>
                    <h3 className='text-2xl font-semibold tracking-wide'>
                      Senior Software Engineer
                    </h3>
                    <time className='text-xs tracking-wide  text-gray-600'>
                      Jan 2019
                    </time>
                    <p className='mt-3 text-lg font-light'>
                      I am workiing on speciality drugs application as full
                      stack enginner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=''>
          <div className='container max-w-5xl px-4 py-12 mx-auto'>
            <div className='grid gap-4 mx-4 sm:grid-cols-12'>
              <div className='col-span-12 sm:col-span-3'>
                <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600'>
                  <h3 className='text-3xl font-semibold'>
                    Tata Consultancy Services Ltd
                  </h3>
                  <span className='text-sm font-light tracking-wider text-gray-600'>
                    <time>July 2018 to Feb 2022</time>
                  </span>
                </div>
              </div>
              <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
                <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300'>
                  <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600'>
                    <h3 className='text-2xl font-semibold tracking-wide'>
                      System Engineer
                    </h3>
                    <time className='text-xs tracking-wide text-gray-600'>
                      Jan 2019
                    </time>
                    <p className='mt-3  text-lg font-light'>
                      Worked as a Java developer in an Income Tax project where
                      I designed, developed, and deployed major features of
                      income tax. These features are currently being used by
                      more than 100k users Income Tax Officials .
                    </p>
                  </div>
                  <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600'>
                    <h3 className='text-2xl font-semibold tracking-wide'>
                      Trainee
                    </h3>
                    <time className='text-xs tracking-wide  text-gray-600'>
                      Jul 2018
                    </time>
                    <p className='mt-3  text-lg font-light'>
                      I was part of Release Management Software development team
                      .RMS maintains and tracks the development processess by
                      following particular steps for each development tasks till
                      it is deployed. The completion certificate and report is
                      submitted at the end of completion of each task
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
