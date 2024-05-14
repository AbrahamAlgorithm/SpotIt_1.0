import React from 'react';

import { Footer, Header, Map, Contact } from './containers';
import { Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
      </div>
      <Map />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
