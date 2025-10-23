import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routing/routing';
import { store } from './service/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />} />
        <Route path='/list/:id' element={<ItemDescription todos={todos}></ItemDescription>}></Route>
        <Route path='/todo' element={<App />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
