import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './Layouts/RootLayout/RootLayout';
import DashboardLayout from './Layouts/DashboardLayout/DashboardLayout';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Chat from './pages/Chat/Chat';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './App.css'

function App() {
  
  const Router = createBrowserRouter([
       /* {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home/> },
                {
                  path: 'dashboard',
                  element:<DashboardLayout/>,
                  children: [
                    { index: true, element: <Dashboard/> },
                    { path: 'dashboard/chats/:id', element: <Chat/> },
                  ]
                }
            ]
        }*/
      {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: "/",
            element: <Home/>
          },
          {
            element: <DashboardLayout />,
            children:[
              {
                path: "/dashboard",
                element: <Dashboard/>
              },
              {
                path: "/dashboard/chats/:id",
                element: <Chat/>
              }
            ]
          }
        ]
      } 
      ])
  return (
    <>
      
        <RouterProvider router={Router} />
    
      
    </>
  )
}

export default App
