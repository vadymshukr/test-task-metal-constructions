import React from 'react';
import './App.sass';
import Header from '../Header/Header'
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import OurCompany from '../OurCompany/OurCompany';
import Footer from '../Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <OurCompany />
      <Footer />
    </div>
    
  );
}

export default App;
