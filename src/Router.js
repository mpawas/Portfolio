import { useRoutes } from 'react-router-dom';
import Loading from './Components/loadingComponent';
import About from './Page/About';
import Contact from './Page/Contact';
import Experience from './Page/Experience';
import Home from './Page/Home';
import Projects from './Page/Projects';

function Router() {
    const element = useRoutes([
        { path: '/', element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/projects", element: <Projects /> },
        { path: "/experience", element: <Experience /> },
        { path: "/loading", element: <Loading /> },
    ]);

    return element;
}
export default Router;