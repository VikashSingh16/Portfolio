/** @format */
import { Experience as data } from '../../Util/Utility';
import ExperienceData from './ExperiencData';
const Experience = () => {
  return (
    <div id='experience'>
      <div className='mt-24'>
        <span className='text-4xl font-bold font-sans flex justify-center mt-9'>
          Experience
        </span>
      </div>
      <div className='flex justify-center flex-col'>
        {data.map((data) => (
          <ExperienceData data={data} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
