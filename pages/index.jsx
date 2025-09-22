// BuffaloCoin - One-page Next.js (pages/index.jsx)
// DARK / WILD WEST redesign — earthy palette, rugged typography, lore-forward.
// Usage:
// 1) Save as `pages/index.jsx` in a Next.js app (pages router).
// 2) Place your logo at /public/logo.png. Replace TOKEN constants below.
// 3) Tailwind should be configured (tailwind.config.js present). This file uses plain Tailwind classes.

import Head from 'next/head';
import Image from 'next/image';

const TOKEN = {
  name: 'BuffaloCoin',
  ticker: 'BUFFALO',
  totalSupply: '1,000,000,000',
  network: 'Solana / Any',
  contractAddress: '0xYOUR_CONTRACT_ADDRESS',
};

export default function Home(){
  return (
    <>
      <Head>
        <title>{TOKEN.name} — {TOKEN.ticker}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="BuffaloCoin — memecoin with a wild west soul. Strength, pride, and absurd humor from the plains." />
        {/* Optional: include a rugged display font via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-900 to-slate-800 text-amber-50 antialiased font-sans">
        {/* Top bar */}
        <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-sm border-b border-slate-800">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-14 h-14 relative rounded-full overflow-hidden ring-2 ring-amber-700">
                <Image src="/logo.png" alt="BuffaloCoin logo" fill style={{objectFit:'cover'}} sizes="56px"/>
              </div>
              <div>
                <div className="font-extrabold text-lg tracking-tight" style={{fontFamily:'Roboto Slab, serif'}}>{TOKEN.name}</div>
                <div className="text-xs text-amber-300 uppercase">{TOKEN.ticker} — The Herd Token</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-amber-200">
              <a href="#lore" className="hover:text-white">Lore</a>
              <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
              <a href="#stunts" className="hover:text-white">Stunts</a>
              <a href="#buy" className="bg-amber-700 text-slate-900 px-3 py-2 rounded-md shadow">Join Herd</a>
            </nav>

            <div className="md:hidden">
              <a href="#buy" className="bg-amber-700 text-slate-900 px-3 py-2 rounded-md shadow">Join Herd</a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight" style={{fontFamily:'Roboto Slab, serif'}}>
                BuffaloCoin <span className="text-amber-300">{TOKEN.ticker}</span>
              </h1>

              <p className="mt-6 text-amber-200 max-w-lg">A memecoin forged from plains dust and stubborn horns. Think wild west banners, absurd lore, and hard-headed community stunts. Not financial advice — just very committed memetics.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#buy" className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-lg shadow">Buy BUFFALO</a>
                <a href="#lore" className="inline-flex items-center gap-2 border border-amber-700 px-4 py-2 rounded-lg">Read Lore</a>
                <a href="#stunts" className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-lg">Stunts & Drops</a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <SmallStat label="Ticker" value={TOKEN.ticker} />
                <SmallStat label="Supply" value={TOKEN.totalSupply} />
                <SmallStat label="Network" value={TOKEN.network} />
                <SmallStat label="Contract" value={shorten(TOKEN.contractAddress)} />
              </div>

              <div className="mt-6 text-sm text-amber-300 max-w-md">Heads up: BuffaloCoin is community-first. We plan transparent liquidity beats, public dev-share usage, and ritualistic meme drops (prizes included). Watch socials for the "Herd Hunt" events.</div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-gradient-to-br from-slate-800 to-amber-900/10 rounded-2xl p-6 shadow-xl ring-1 ring-slate-700">
                <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden bg-slate-800/60">
                  <Image src="/logo.png" alt="Buffalo logo" fill style={{objectFit:'contain'}} sizes="(max-width: 768px) 300px, 400px"/>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-amber-100">The Herd</h3>
                  <p className="mt-2 text-sm text-amber-200">Join a playful community that honors the buffalo: tough, lumbering, and impossible to ignore. Expect memes, merch, and IRL stunts that make people laugh and scratch their heads.</p>

                  <div className="mt-4 flex gap-3">
                    <a href="#community" className="text-sm px-3 py-2 border rounded-md">Discord</a>
                    <a href="#community" className="text-sm px-3 py-2 border rounded-md">X</a>
                    <a href="#community" className="text-sm px-3 py-2 border rounded-md">Telegram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lore - Wild West style + humor */}
        <section id="lore" className="container mx-auto px-6 py-12 bg-slate-900/40 border-t border-slate-800">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold" style={{fontFamily:'Roboto Slab, serif'}}>Lore: Horns, Dust, and Ledger Tales</h2>
              <p className="mt-4 text-amber-200">Long ago, on digital plains where pumps roam free, a legendary bison stomped the order book and left a hoof print on the blockchain. That hoof print became BuffaloCoin — equal parts frontier bravado and ridiculous meme theater.</p>

              <p className="mt-3 text-amber-200">We honor buffalo history: their survival against extinction, their role in indigenous cultures, and their image stamped on tokens of pride. We poke fun at ourselves, throw wild stunts, and keep dev rewards transparent.</p>

              <div className="mt-6 space-y-3 text-amber-300">
                <div className="font-semibold">Rituals</div>
                <ul className="list-disc pl-5">
                  <li>Herd Hunt — social treasure hunts with token prizes.</li>
                  <li>Buffalo Roast — weekly AMA where bad puns are mandatory.</li>
                  <li>Horn Drop — surprise art/meme airdrops for holders.</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-inner">
              <h4 className="font-bold text-amber-300">Design notes</h4>
              <p className="mt-2 text-amber-200 text-sm">Palette inspired by your logo: deep golds for accents, dark brown/espresso for backgrounds, dusty amber highlights. Use gritty paper textures, western wood grain patterns, and tough serif headings for the wild west feel.</p>

              <div className="mt-4">
                <div className="font-semibold text-amber-200">Hero / Banner prompt</div>
                <div className="mt-2 text-sm text-amber-300">"Create a 1500×500 wide hero banner: cinematic buffalo portrait in dark brown tones on a dusty golden field, cinematic west lighting, aged paper texture overlay, subtle gold rim circling the buffalo, typography space on left for logo and bold title. Style: gritty western poster, high detail, 4K."</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto bg-slate-800/60 p-6 rounded-xl shadow-md border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-100">Tokenomics</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-amber-200">
                <div><strong>Supply:</strong> {TOKEN.totalSupply}</div>
                <div><strong>Dev Reward:</strong> 2% (configurable)</div>
                <div><strong>Liquidity Lock:</strong> Target 6 months (snapshot & proof to be published)</div>
                <div><strong>Burn Mechanic:</strong> Optional community proposals for ritual burns.</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <div className="font-semibold text-amber-300">Security</div>
                <p className="text-amber-200 mt-2 text-sm">Plan: publish contract, supply proof, and a simple audit summary. Verify swap links on official socials. We will never ask for private keys.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stunts / Roadmap */}
        <section id="stunts" className="container mx-auto px-6 py-12 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-100">Roadmap & Stunts</h3>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <Card title="Phase 1" subtitle="Launch & Herd">
                Launch token, socials, first meme contest, liquidity proof.
              </Card>
              <Card title="Phase 2" subtitle="Verify & Build Trust">
                Get verified, publish audit summary, early merch drop.
              </Card>
              <Card title="Phase 3" subtitle="Lore & IRL Stunts">
                Herd Hunts, pop-up buffalo posters, collab merch.
              </Card>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-amber-100">Join the Herd & Get Weird</h3>
            <p className="mt-4 text-amber-200">Memes, art, debate, and the occasional tasteful chaos. We reward creativity and attitude. Bring your horns (metaphorically).</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="px-4 py-2 border border-amber-600 rounded-md">Discord</a>
              <a href="#" className="px-4 py-2 border border-amber-600 rounded-md">X</a>
              <a href="#" className="px-4 py-2 border border-amber-600 rounded-md">Telegram</a>
            </div>
          </div>
        </section>

        {/* Buy CTA */}
        <section id="buy" className="container mx-auto px-6 py-12 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-3xl mx-auto text-center bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-100">Ready to Join the Herd?</h3>
            <p className="mt-3 text-amber-200">Always verify contract address before buying. Official contract shown below — do not trust copycats.</p>

            <div className="mt-6 flex justify-center gap-3">
              <a href="#" className="px-6 py-3 bg-amber-600 text-slate-900 rounded-lg font-semibold">Swap on DEX</a>
              <a href="#" className="px-6 py-3 border border-amber-600 rounded-lg">Add to Wallet</a>
            </div>

            <div className="mt-4 text-xs text-amber-300">Official contract: <code className="bg-slate-900/40 px-2 py-1 rounded">{TOKEN.contractAddress}</code></div>
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-800 py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-full overflow-hidden ring-1 ring-amber-600">
                <Image src="/logo.png" alt="logo" fill style={{objectFit:'cover'}} sizes="40px"/>
              </div>
              <div>
                <div className="font-bold">BuffaloCoin</div>
                <div className="text-sm text-amber-300">Wild west vibes • Not financial advice</div>
              </div>
            </div>

            <div className="text-sm text-amber-300">© {new Date().getFullYear()} BuffaloCoin — verify everything.</div>
          </div>
        </footer>
      </main>
    </>
  );
}

function SmallStat({ label, value }){
  return (
    <div className="bg-slate-900/50 p-3 rounded-lg">
      <div className="text-xs text-amber-300">{label}</div>
      <div className="font-bold mt-1">{value}</div>
    </div>
  );
}

function Card({ title, subtitle, children }){
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <div className="font-semibold text-amber-200">{title}</div>
      <div className="text-xs text-amber-300 mb-2">{subtitle}</div>
      <div className="text-sm text-amber-200">{children}</div>
    </div>
  );
}

function shorten(addr){
  if(!addr) return '—';
  if(addr.length > 12) return addr.slice(0,6) + '...' + addr.slice(-4);
  return addr;
}
