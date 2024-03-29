/** @format */
import { Profile } from '../../Util/Utility';
const AboutDesc = () => {
  return (
    <>
      <div className='text-4xl font-sans font-bold my-2'>
        Hey folks, I'm{' '}
        <span className='text-yellow-400'>{Profile.OtherName[0]}</span>{' '}
      </div>

      <div className='text-2xl font-semibold my-3'>
        Here's who I am & what I do
      </div>

      <button className='bg-slate-600 text-white rounded-3xl w-40 p-2 font-bold my-3 hover:bg-slate-800'>
        <a href='#contact'>Get a free quote</a>
      </button>
      <p className='text-xl font-sans font-light'>
        Software engineer with a full stack profile and proven ability to
        efficiently solve problems and collaborate with teams to deliver
        high-quality creative solutions in a timely manner. As a dedicated
        lifelong learner, worked  extensively in development projects wherein{' '}
        <span className='font-semibold'>
          {' '}
          I  worked in HTML, CSS, JS, Typescipt, React, NextJS, Java, Go Lang,
          Spring boot 6, SQL, OAuth2, Kafka, Azure Cloud and DevOps Seeking to
          add value, grow my skillset, and participate in meaningful work.{' '}
        </span>
      </p>
    </>
  );
};

export default AboutDesc;
