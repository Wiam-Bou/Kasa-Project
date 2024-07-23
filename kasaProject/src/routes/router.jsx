import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar";
import Footer from "../Layouts/Footer"; 
import Main from "../Layouts/Main";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
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
    errorElement: <h1>404 NOT FOUND</h1>,
    children: [
      { path: "/", element: <App /> }, // Ce rendra le composant App sans Navbar et Footer
      { path: "/flat", element: <h1>Les Appartements</h1> },
      { path: "/about", element: <h1>A propos de nous</h1> },
      { path: "/contact", element: <h1>Contact</h1> },
    ],
  },
]);

export default router;