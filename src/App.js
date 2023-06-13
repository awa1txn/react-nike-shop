import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

import Order from './components/Order/Order.js'

import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'


const App = () => {
  
    const routes = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
            <Route path='/order' element={<Order />} />
          </Route>
        )
      )
  
    return (
      <>
        <RouterProvider router={routes} />
      </>
    );
  }

const Home = () => {
    return (
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
    )
}

const Root = () => {
    return (
        <div className="container">
            <header>
            <div class="banner">
                
            </div>
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/order">My order</a></li>

            </ul>
            </nav>
        </header>
            <Outlet />
        </div>
    );
}

export default App;
