import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AppartementsList from "../pages/AppartementsList"; 
import Navbar from "../components/Navbar";
import Footer from "../Layouts/Footer";
import Main from "../Layouts/Main";
import ErrorPage from '../pages/ErrorPage';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        {/* le contenu des routes enfants sera rendu ici */}
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
    // Le errorElement se déclenchera automatiquement pour les routes non définies
    children: [
      { path: "/", element: <Home /> },
      { path: "/AppartementsList/:id", element: <AppartementsList /> }, 
      { path: "/about", element: <About /> },
      { path: "*", element: <ErrorPage /> }, // Gère explicitement toutes les erreurs
    ]
  },
]);

export default router; 