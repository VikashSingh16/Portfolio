/** @format */

const Skill = (props) => {
  return (
    <div className='m-3'>
      <img className='h-24' src={props.data.photo} />
      <span className='text-lg font-semibold font-sans flex justify-center mt-2'>
        {props.data.skill}
      </span>
    </div>
  );
};

export default Skill;
