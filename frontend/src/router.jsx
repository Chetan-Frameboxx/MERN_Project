import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ProductCreate from './pages/ProductCreate';
import ProductEdit from './pages/ProductEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/create', element: <ProductCreate /> },
      { path: 'products/edit/:id', element: <ProductEdit /> },
      { path: 'products/:id', element: <ProductDetails /> },
    ],
  },
 
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}