import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; // Importa jQuery si es necesario
// import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import AboutPage from './components/pages/aboutPage.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // errorElement:<NotFound/>,
  },
  {
    path:"/about",
    element:<AboutPage/>,
  }
  // {
  //   path:"/inicio",
  //   element:<Inicio/>,
  // },
  // {
  //   path: "/planes",
  //   element: <Planes/>,
  // },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
