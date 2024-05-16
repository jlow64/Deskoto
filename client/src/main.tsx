import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Error from 'pages/Error';
import Shop from './pages/Shop';
import Register from 'pages/auth/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
