/** @format */

import { Skills as SkillJson } from '../../Util/Utility';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className='flex flex-col items-center flex-wrap' id='skills'>
      <span className='text-4xl font-bold '>My Skills</span>
      <div className='lg:w-3/4 2xl:w-1/2 xl:w-1/2  m-5 flex flex-row justify-center flex-wrap'>
        {SkillJson.FrontEnd.map((fe) => (
          <Skill data={fe} />
        ))}
        {SkillJson.BackEnd.map((fe) => (
          <Skill data={fe} />
        ))}
        {SkillJson.DevOps.map((fe) => (
          <Skill data={fe} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
