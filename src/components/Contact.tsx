import React from 'react';
import { Mail, Twitter, Instagram, Wallet, CandlestickChart } from 'lucide-react';
import DexerIcon from './DexerIcon';

function Contact() {
  return (
    <section className="px-4 md:px-6 py-16 md:py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact With Us</h2>
        <p className="text-gray-400 mb-8">Contact us</p>
        
        <div className="bg-gray-800 rounded-xl p-6 md:p-8">
          <p className="text-gray-400 mb-6 break-all">justawiserock@gmail.com</p>
          <div className="flex justify-center space-x-6">
            <a href="https://dexscreener.com/solana/bqn4vvy7mshha9x7lthr6rnpz6bvwp6nkrta3zc7evx1" className="text-gray-400 hover:text-blue-400 transition">
              {/* <DexerIcon className="h-5 md:h-6 w-5 md:w-6"/> */}
              <CandlestickChart className='h-5 md:h-6 w-5 md:w-6' />
            </a>
            <a href="https://x.com/moAI_Agent" className="text-gray-400 hover:text-blue-400 transition">
              <Twitter className="h-5 md:h-6 w-5 md:w-6"/>
            </a>
            <a href="https://www.instagram.com/justawiserock/" className="text-gray-400 hover:text-blue-400 transition">
              <Instagram className="h-5 md:h-6 w-5 md:w-6" />
            </a>
            <a href="mailto:justawiserock@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
              <Mail className="h-5 md:h-6 w-5 md:w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;