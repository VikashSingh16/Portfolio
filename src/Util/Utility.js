/** @format */
import ReactIcon from '../../Assets/ReactIcon.png';
import JS from '../../Assets/JS.png';
import TS from '../../Assets/TS.png';
import NextJS from '../../Assets/NextJs.png';
import HTML from '../../Assets/html.png';
import CSS from '../../Assets/css.jpeg';
import Tailwind from '../../Assets/Tailwindcss.png';

import JAVA from '../../Assets/java.png';
import SB from '../../Assets/springboot.png';
import SBS from '../../Assets/SBS.png';
import SQL from '../../Assets/SQL.png';
import KAfKA from '../../Assets/Kafka.png';
import Go from '../../Assets/go.png';
import docker from '../../Assets/docker.png';
import Kub from '../../Assets/kub.png';
import GithubAction from '../../Assets/GitHubActions.png';
import Teraform from '../../Assets/teraform.png';
import Azure from '../../Assets/Azure.png';

export const Profile = {
  Name: 'Vikash Singh',
  Designation: 'Sr Full Stack Engineer',
  OtherName: ['Developer'],
  Contact: {
    Email: 'progvikashsingh@gmail.com',
  },
};

export const NavBarJson = [
  {
    label: 'About',
    link: '#about',
  },
  ,
  {
    label: 'Skills',
    link: '#skills',
  },
  {
    label: 'Experience',
    link: '#experience',
  },
  {
    label: 'Education',
    link: '#education',
  },
  {
    label: 'Contact',
    link: '#contact',
  },
];

export const Skills = {
  FrontEnd: [
    {
      skill: 'HTML',
      photo: HTML,
    },
    {
      skill: 'CSS',
      photo: CSS,
    },
    {
      skill: 'Talwind CSS',
      photo: Tailwind,
    },
    {
      skill: 'JavaScript',
      photo: JS,
    },
    {
      skill: 'TypeScript',
      photo: TS,
    },
    {
      skill: 'React',
      photo: ReactIcon,
    },
    ,
    {
      skill: 'Next Js',
      photo: NextJS,
    },
  ],
  BackEnd: [
    {
      skill: 'JAVA',
      photo: JAVA,
    },
    {
      skill: 'Go Lang',
      photo: Go,
    },
    {
      skill: 'Spring Boot 6',
      photo: SB,
    },
    {
      skill: 'Spring Security',
      photo: SBS,
    },
    {
      skill: 'SQL',
      photo: SQL,
    },
    {
      skill: 'Apache Kafka',
      photo: KAfKA,
    },
  ],
  DevOps: [
    {
      skill: 'Docker',
      photo: docker,
    },
    {
      skill: 'Kubernetes',
      photo: Kub,
    },
    {
      skill: 'GitHub Actions',
      photo: GithubAction,
    },
    {
      skill: 'Teraform',
      photo: Teraform,
    },
    {
      skill: 'Azure',
      photo: Azure,
    },
  ],
};

export const Experience = [
  {
    Company: 'Optum Global Solution',
    Year: 'Feb 2022 to Current',
    Projects: [
      {
        Designation: 'Senior Software Engineer',
        ProjectYear: 'Feb 2022',
        Desc: ' I am workiing on speciality drugs application as full stack enginner.',
      },
    ],
  },
  {
    Company: 'Tata Consultancy Services Ltd',
    Year: 'July 2018 to Feb 2022',
    Projects: [
      {
        Designation: 'System Engineer',
        ProjectYear: 'Jan 2019',
        Desc: ` Worked as a Java developer in an Income Tax project where
        I designed, developed, and deployed major features of
        income tax. These features are currently being used by
        more than 100k users Income Tax Officials.`,
      },
      {
        Designation: 'Trainee',
        ProjectYear: 'Jul 2018',
        Desc: `    I was part of Release Management Software development team
        .RMS maintains and tracks the development processess by
        following particular steps for each development tasks till
        it is deployed. The completion certificate and report is
        submitted at the end of completion of each task.`,
      },
    ],
  },
];

export const EducationData = [
  {
    degree: 'Master of Computer Application',
    year: 'Octocber 2021',
    desc: 'Completed Masters in Computer Applications from SASTRA University,Chennai, INDIA',
  },
  {
    degree: 'Bachelor of Computer Application',
    year: 'May 2018',
    desc: 'Finished Bachelor in Computer Applications in 2018 from DAV Centnary College, Faridabad, INDIA',
  },
];
