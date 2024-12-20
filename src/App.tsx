import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BuySteps from './components/BuySteps';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <BuySteps />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;