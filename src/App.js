import './App.css';
import Navbar from './Component/Navbar';
import React,{useEffect} from 'react';
import Home from './Pages/Home'
import About from './Pages/About';
import Service from './Pages/Service';
import Cards from './Pages/Cards';
import Error from './Pages/Error';
import Footer from './Component/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: 'cards',
      element: <Cards />
    },
    {
      path: '*',
      element: <Error/>
    }

  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
