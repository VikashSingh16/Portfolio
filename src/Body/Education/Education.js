/** @format */
import { EducationData } from '../../Util/Utility';
import EducationLi from './EducationLi';
const Education = () => {
  return (
    <div id='education'>
      <span className='text-4xl font-bold flex justify-center mt-10'>
        Education
      </span>
      <div className='flex justify-evenly mt-16 m-3'>
        <ol class='relative border-s border-gray-300'>
          {EducationData.map((data) => (
            <EducationLi data={data} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
