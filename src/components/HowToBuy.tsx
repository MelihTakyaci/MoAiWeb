import React, { useState } from 'react';
import { Laptop, Wallet, ShoppingCart, Copy } from 'lucide-react';

const steps = [
  {
    icon: <Laptop />,
    number: 1,
    title: "Step 1: Set Up Your Wallet",
    description: "Download and set up a Solana-compatible wallet like Phantom. It's your gateway to the MoAI realm. Secure your keys—MoAI doesn't save tools."
  },
  {
    icon: <Wallet />,
    number: 2,
    title: "Load Your Wallet with SOL",
    description: "Buy or transfer SOL into your wallet. Think of it as fueling your ship to explore the MoAI universe."
  },
  {
    icon: <ShoppingCart />,
    number: 3,
    title: "Trade for $MoAI on Raydium",
    description: "Head to Raydium, connect your wallet, and swap your SOL for $MoAI using our contract address. Welcome to the tribe. 🗿"
  }
];

function HowToBuy() {
  const contractAddress = "2GbF1pq8GlwpHhdGWXUBLXJfBKvKLoNWelE4KPbED2M";
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000); // Tooltip 2 saniye görünür
  };

  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-2">How To Buy $MoAI?</h2>
        <p className="text-center text-gray-400 mb-12">How To Start</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="bg-gray-800 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="text-blue-400 mb-4">
                {React.cloneElement(step.icon, { className: "h-12 w-12" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-4 max-w-2xl mx-auto flex items-center justify-between relative">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Smart Contract Address:</span>
            <span className="font-mono">{contractAddress}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-blue-400 hover:text-blue-300 transition relative"
          >
            <Copy className="h-5 w-5" />
            {tooltipVisible && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-md">
                Copied to clipboard!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;