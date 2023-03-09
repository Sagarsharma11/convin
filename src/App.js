import './App.css';
import Navbar from './Component/Navbar';
import React from 'react';
import Home from './Pages/Home'
import About from './Pages/About';
import Service from './Pages/Service';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/service",
      element: <Service/>,
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
