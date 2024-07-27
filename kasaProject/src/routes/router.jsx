import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AppartementsList from "../pages/AppartementsList"; 
import Navbar from "../components/Navbar";
import Footer from "../Layouts/Footer";
import Main from "../Layouts/Main";
import ErrorPage from '../components/errorPage';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        {/* le contenu des routes enfants sera rendu ici  */}
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
      { path: "/AppartementsList", element: <AppartementsList /> }, 
      { path: "/about", element: <About/> },
      { path: "/contact", element: <h1>Contact</h1> },
      {path:"/*", element:<ErrorPage/>},
    ]
  },
]);

export default router;