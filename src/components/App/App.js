import React from 'react';
import './App.sass';
import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import OurCompany from '../OurCompany/OurCompany';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <OurCompany />
    </div>
    
  );
}

export default App;
