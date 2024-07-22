import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 
  {
    path: "/flat",
    element: <h1>Les appartements</h1>,
  },
  {
    path: "/about",
    element: <h1>A propos de notre page</h1>,
  },
  {
    path: "/404",
    element: <h1>404 NOT FOUND</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
