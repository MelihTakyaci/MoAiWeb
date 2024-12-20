import React, { useState } from 'react';
import { Monitor, Wallet, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: <Monitor className="w-8 md:w-12 h-8 md:h-12" />,
    number: 1,
    title: "Set Up Your Wallet",
    description: "Download and set up a Solana-compatible wallet like Phantom. It's your gateway to the MoAI realm. Secure your keys—MoAI doesn't save tools."
  },
  {
    icon: <Wallet className="w-8 md:w-12 h-8 md:h-12" />,
    title: "Load Your Wallet with SOL",
    number: 2,
    description: "Buy or transfer SOL into your wallet. Think of it as fueling your ship to explore the MoAI universe."
  },
  {
    icon: <ShoppingCart className="w-8 md:w-12 h-8 md:h-12" />,
    title: "Trade for $MoAI on Raydium",
    number: 3,
    description: "Head to Raydium, connect your wallet, and swap your SOL for $MoAI using our contract address. Welcome to the tribe. 🗿"
  }
];

function BuySteps() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const contractAddress = "2GbF1pq8GlwpHhdGWXUBLXJfBKvKLoNWelE4KPbED2M";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000); // Tooltip 2 saniye görünür.
  };

  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-400 mb-2">How To Start</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How To Buy $MoAI?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 relative group hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="absolute -top-3 -right-3 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="text-blue-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <span className="text-gray-400 text-sm md:text-base">Smart Contract Address:</span>
              <code className="block md:inline ml-0 md:ml-2 text-blue-400 text-xs md:text-base break-all">
                {contractAddress}
              </code>
            </div>
            <img src='/images/MoAi.jpg' className='w-12 h-12 rounded-full'/>
            <div className="relative">
              <button
                onClick={copyToClipboard}
                className="text-blue-400 hover:text-blue-300 transition relative"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              {tooltipVisible && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md">
                  Copied to clipboard!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuySteps;