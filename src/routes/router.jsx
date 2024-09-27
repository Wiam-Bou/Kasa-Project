import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AppartementsList from '../pages/AppartementsList';
import Navbar from '../components/Navbar';
import Footer from '../Layouts/Footer';
import Main from '../Layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        {/* Le contenu des routes enfants sera rendu ici */}
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AppartementsList/:id", element: <AppartementsList /> },
      { path: "/about", element: <About /> },
      { path: "/404", element: <ErrorPage /> }, // Page d'erreur explicitement configurée
      { path: "*", element: <ErrorPage /> }, // Gère toutes les autres routes non définies
    ]
  },
]);

export default router;