import { CgGitFork } from 'react-icons/cg';
import About from '../components/About/About';
import Home from '../components/Home/Home';
import { AiFillStar } from 'react-icons/ai';
import Experience from '../components/Experience/Experience';

export const MainRoutes = [
  {
    label: 'Home',
    route: '/',
    element: <Home />,
  },
  {
    label: 'About',
    route: '/about',
    element: <About />,
  },
  {
    label: 'Experience',
    route: '/experience',
    element: <Experience />,
  },
  {
    className: 'fork-btn-inner',
    href: 'https://github.com/lazar59',
    icon: () => (
      <>
        <CgGitFork style={{ fontSize: '1.2em' }} /> <AiFillStar style={{ fontSize: '1.1em' }} />
      </>
    ),
    target: '_blank',
  },
];
