import './App.css';
import Navbar from './Component/Navbar';
import React,{useEffect} from 'react';
import Home from './Pages/Home'
import About from './Pages/About';
import Service from './Pages/Service';
import Cards from './Pages/Cards';
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
    }

  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
