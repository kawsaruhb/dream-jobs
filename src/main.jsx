import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import JobDetail from './components/JobDetail/JobDetail';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFound/NotFound';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: 'jobdetail/:jobId',
        element: <JobDetail></JobDetail>,
        loader: ({params}) => fetch(`/featuredJobs.json`)
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
