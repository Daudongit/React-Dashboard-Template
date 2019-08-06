import React from 'react';

import { Header, Navigation,Footer } from './components';


function Base(props) {
  return (
    <section id="container" className="">
        <Header/>
        <Navigation/>
        {props.children}
        <Footer/>
    </section>
  );
}

export default Base;
