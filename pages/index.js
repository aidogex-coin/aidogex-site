import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

export default function AIDOGEXSite() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white p-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Logo */}
          <div className="flex justify-center">
            <Image src="/aidogex-logo.png" alt="AI DOGE X Logo" width={180} height={180} className="rounded-full shadow-lg" />
          </div>

          {/* Hero Section */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">AI DOGE X — When Doge Meets AI</h1>
            <p className="text-lg md:text-xl text-gray-300">
              The ultimate memecoin fusion between Artificial Intelligence and DOGE culture. Built for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                  href="https://dexscreener.com/solana/DZ5QBCgyyz1jr6tdXGphs7tdDZTTofgsuToYfdCHL2Dt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white text-lg px-6 py-3 rounded-full"
              >
                View Chart
              </a>
              <a
                  href="https://t.me/AIDOGEX2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full"
              >
                Join Telegram
              </a>
            </div>
          </header>

          {/* Why AIDX & How to Buy */}
          <section className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Why AIDX?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  <li>AI-powered narrative</li>
                  <li>Deflationary tokenomics</li>
                  <li>Fair, public launch</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">How to Buy</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-200">
                  <li>Connect Phantom Wallet</li>
                  <li>Search for AIDX on DEX</li>
                  <li>Trade SOL for AIDX</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Tokenomics */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>1B Total Supply</li>
                <li>100% Public Sale</li>
                <li>No team tokens</li>
                <li>Liquidity locked</li>
              </ul>
            </CardContent>
          </Card>

          {/* Live Chart Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Live Price Chart</h2>
              <iframe
                  src="https://dexscreener.com/solana/DZ5QBCgyyz1jr6tdXGphs7tdDZTTofgsuToYfdCHL2Dt"
                  className="w-full h-[500px] rounded-lg border border-gray-700"
                  title="Live Chart"
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-400 mt-2">Chart powered by DexScreener</p>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="text-center pt-10 space-y-2 text-gray-400 text-sm">
            <p>Follow us:</p>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/AIDOGEX_Coin" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
              <a href="https://t.me/AIDOGEX2025" target="_blank" rel="noopener noreferrer" className="hover:text-white">Telegram</a>
              <a href="https://dexscreener.com/solana/DZ5QBCgyyz1jr6tdXGphs7tdDZTTofgsuToYfdCHL2Dt" target="_blank" rel="noopener noreferrer" className="hover:text-white">Dex Chart</a>
            </div>
          </footer>
        </div>
      </div>
  );
}