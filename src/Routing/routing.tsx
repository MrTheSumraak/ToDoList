import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App/App';
import { todos } from '../data/data';
import { Layout } from '../Layouts/layouts';

import { NotFound } from '../Pages/notFound';
import { ViewListItem } from '../Pages/viewListItem';
import { ViewListPage } from '../Pages/ViewListPage';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/list',
        element: <ViewListPage/>
      },
      {
        path: '/list/:id',
        element: <ViewListItem/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
