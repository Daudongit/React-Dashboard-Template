import React from 'react';

import { default as routes } from './routes';
import { Header, Navigation,Footer } from './layout/components';
import ProtectedRoute from './ProtectedRoute';


function Contentboard() {
  console.log(routes)
  return (
    <section id="container" className="">
        <Header/>
        <Navigation/>
        {
          routes.map((route, index) => (
              <ProtectedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
          ))
        }
        <Footer/>
    </section>
  );
}

export default Contentboard;
