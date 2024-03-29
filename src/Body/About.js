import * as image from '../../Assets/1689765629196-Photoroom.png-Photoroom.png'
const About = () => {
    return (
        <div className="flex justify-center m-10 mt-20">
            <div className="m-6 px-10">
                <div className=" flex justify-center my-10">
                    <img className=" rounded-full h-52" src={image}/>
                </div>
                <div className='m-6'>
                    <h1 className='text-3xl font-bold font-sans'>Vikash Singh</h1>
                    <div class="flex-grow border-t border-2 border-yellow-200 my-3"></div>
                    <h1 className='text-lg'>Sr Full Stack Enginner</h1>
                </div>
            </div>
            <div className="w-1/2 m-6 flex flex-col justify-center">
                <div className='text-4xl font-sans font-bold my-2'>Hey folks, I'm <span className='text-yellow-400'>Developer</span> </div>
                
                <div className='text-2xl font-semibold my-3'>Here's who I am & what I do</div>
                
                <button className='bg-slate-600 text-white rounded-3xl w-40 p-2 font-bold my-3'>Get a free quote</button>
                <p className='text-xl font-sans font-light'>
                    Software engineer with a full stack profile and proven ability to efficiently 
                    solve problems and collaborate with teams to deliver high-quality creative 
                    solutions in a timely manner. As a dedicated lifelong learner, 
                    worked  extensively in development projects wherein <span className='font-semibold'> I  worked in React, JS, Typescipt,
                     NextJS, Java, Spring boot, SQL, OAuth2, Kafka, Azure Cloud and DevOps Seeking to add value, 
                    grow my skillset, and participate in meaningful work. </span></p>
                    
            </div>
        </div>
    );
}

export default About;