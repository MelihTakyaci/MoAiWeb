import React from 'react';
import '../assets/styles/global.css';

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624559588776-7a60e16ec124')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              $MoAI🗿
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic">
              The Rock You Can<br />Bank On
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              For centuries, I stood unshaken. Now, I'm here to outsmart the blockchain.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center floating-ani">
            <img 
              src="/images/about.png"
              alt="Moai Statue"
              className="w-fit h-fit object-cover rounded-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;