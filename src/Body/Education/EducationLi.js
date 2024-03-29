/** @format */

const EducationLi = (props) => {
  return (
    <li class='mb-10 ms-4'>
      <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-violet-700'></div>
      <time class='mb-1 text-lg font-light leading-none text-gray-500'>
        {props.data.year}
      </time>
      <h3 class='text-3xl font-bold  text-gray-900 '>{props.data.degree}</h3>
      <p class='text-lg font-normal text-gray-600'>{props.data.desc}</p>
    </li>
  );
};
export default EducationLi;
