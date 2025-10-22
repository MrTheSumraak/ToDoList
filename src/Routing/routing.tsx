import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import { todos } from '../data/data';
import { Layout } from '../Layouts/layouts';
import { HomePage } from '../Pages/HomePage';
import { ItemDescription } from '../Pages/itemDescription';
import { NotFound } from '../Pages/notFound';

export const route = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage todos={todos} />
        },
        {
          path: '/todo',
          element: <App />
        },
        {
          path: '/list/:id',
          element: <ItemDescription todos={todos} />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ],
  { basename: '/app' }
);
