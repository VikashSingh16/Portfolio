import ReactIcon  from '../../Assets/ReactIcon.png';
import JS  from '../../Assets/JS.png';
import TS from '../../Assets/TS.png';
import NextJS from '../../Assets/NextJs.png';
import HTML  from '../../Assets/html.png';
import CSS from '../../Assets/css.jpeg';
import Tailwind from '../../Assets/Tailwindcss.png';

import JAVA  from '../../Assets/java.png';
import SB  from '../../Assets/springboot.png';
import SBS from '../../Assets/SBS.png';
import SQL from '../../Assets/SQL.png';
import KAfKA  from '../../Assets/Kafka.png';
import Go from '../../Assets/go.png';
import docker from '../../Assets/docker.png';
import Kub from '../../Assets/kub.png';
import GithubAction from '../../Assets/GitHubActions.png';
import Teraform from '../../Assets/teraform.png';
import Azure from '../../Assets/Azure.png';


const Skills = () => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold ">My Skills</span>
            <div className=" w-2/3 m-5 flex flex-row justify-center">
                <div className="m-3">
                    <img className="h-24" src={HTML}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>HTML</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={CSS}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>CSS</span>
                </div>
                <div className=" m-3">
                    <img className="h-24 w-32" src={Tailwind}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Tailwind CSS</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={JS}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>JavaScript</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={TS}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Typescipt</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={ReactIcon}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>React</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={NextJS}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Next Js</span>
                </div>
            </div>
            <div className=" w-2/3 m-5 flex flex-row justify-center">
                <div className=" m-3">
                    <img className="h-24" src={JAVA}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>JAVA</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={SB}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Spring Boot 6</span>
                </div>
                <div className=" m-3">
                    <img className="h-24 w-32" src={SBS}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Spring Security
                    </span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={SQL}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>SQL</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={KAfKA}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Apache Kafka</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={Go}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Go Lang</span>
                </div>
            </div>
            <div className="w-2/3 m-5 flex flex-row justify-center">
                <div className=" m-3">
                    <img className="h-24" src={docker}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Docker</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={Kub}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Kubernetes</span>
                </div>
                <div className=" m-3">
                    <img className="h-24 w-32" src={GithubAction}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>GitHub Actions</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={Teraform}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Teraform</span>
                </div>
                <div className=" m-3">
                    <img className="h-24" src={Azure}/>
                    <span className='text-lg font-semibold font-sans flex justify-center mt-2'>Azure</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;