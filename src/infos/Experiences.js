import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

function VerticalTimelineElementData({ since, until, icon, ...props }) {
  return {
    elementProps: {
      date: [since, until].filter(Boolean).join(' - '),
      contentStyle: {
        background: 'rgba(33, 33, 33, 0.5)',
        color: '#ddd',
      },
      contentArrowStyle: {
        borderRight: '10px solid #ccc',
      },
      iconStyle: {
        background: '#2d1950',
      },
      icon: icon,
    },
    ...props,
  };
}

export const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2008.10',
    until: '2014.3',
    title: 'Bachelor in Computer Science',
    company: 'Osaka University Venture Capital',
    address: 'Osaka, Japan',
    site: 'https://www.osaka-u.ac.jp/en',
    details: ['Computer Science', 'Web Programming'],
  }),

  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2014.4',
    until: '2016.6',
    title: 'Frontend Developer',
    company: 'Rikkeisoft',
    address: 'Osaka, Japan(on-site)',
    site: 'https://rikkeisoft.com/',
    details: [
      'Managed code for both in-house and client websites, achieving a 10% increase in page loading speed using HTML, CSS, JavaScript, and jQuery.',
      'Conducted comprehensive testing, ensuring a 20% improvement in cross-browser compatibility and mobile responsiveness with tools like Cypress.',
      'Utilized React to implement interactive user-facing features, contributing to a substantial 25% boost in user engagement. Employed React Hooks and Redux to optimize functionality and enhance overall user experience.',
      'Significantly improved the organizations page speed and scalability, resulting in a 30% reduction in loading times through innovative use of HTML, JavaScript, and AJAX.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2016.8',
    until: '2017.12',
    title: 'Freelance Developer',
    company: 'Upwork',
    address: 'Serbia(remote)',
    details: [
      'Engaged with a diverse client base on Upwork to develop customized and innovative full-stack solutions, utilizing the MERN stack. Demonstrated adaptability and versatile skill application to deliver high-impact results.',
      'Engineered and meticulously maintained web applications, ensuring precision in translating client specifications into high-performing solutions. Achieved a noteworthy 15% boost in client satisfaction, reflected in positive reviews and repeat business.',
      'Executed visually appealing and responsive designs, surpassing client expectations and resulting in a notable 15% enhancement in user satisfaction. Received positive feedback, contributing to the overall success of the project.',
      'Demonstrated proficiency in implementing robust code testing strategies and efficient DevOps practices within independent project environments. Achieved consistently high-quality deliverables, reinforcing a commitment to excellence and client satisfaction.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2018.2',
    until: '2020.7',
    title: 'Full Stack Developer',
    company: 'Kickfin',
    address: 'Austin, USA(remote)',
    site: 'https://www.kickfin.com/',
    details: [
      'Upgraded the state management system with Redux Toolkit, resulting in a significant 27% reduction in front-end code and expediting developer onboarding.',
      'Dramatically increased TypeScript coverage by 80%, fortifying compile-time type safety, preventing runtime errors, and simplifying debugging for improved code quality.',
      'Enhanced order processing speed by 25% through the implementation of optimized algorithms in a server-side environment using Node.js, ensuring significantly quicker checkout experiences. ',
      'Strengthened access controls on the site, mitigating unauthorized access attempts by 25% through strategic measures and advanced security protocols with Node.js and Express.js.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2020.9',
    until: '2023.12',
    title: 'Senior Full Stack Developer',
    company: 'PlusPlus NT',
    address: 'Serbia(hybrid)',
    site: 'https://plusplusnt.rs/',
    details: [
      'Successfully implemented React, optimizing development efficiency by 20% as our application scaled.',
      'Configured DynamoDB, reducing communication latency by 30% for better scalability.',
      'Engineered a high-performance RESTful application, enhancing real-time data streaming by 25% to meet project goals.',
      'Used Tailwind CSS, cutting styling time by 15% for quicker development cycles.',
      'Played a key role in client projects by instituting standards and processes, leading to a 20% enhancement in team fficiency.',
      'Elevated overall platform responsiveness by 20%, implementing backend optimizations with JavaScript technologies, including Node.js for server-side logic and PostgreSQL for data storage, ensuring a smoother and more enjoyable ecommerce journey for users.',
    ],
  }),
].sort(({ since: as, until: au }, { since: bs, until: bu }) => (as < bs || au < bu ? 1 : -1));
