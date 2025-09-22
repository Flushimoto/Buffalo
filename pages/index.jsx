// BuffaloCoin - One-page Next.js (pages/index.jsx)
// Usage notes:
// 1) Save this file as `pages/index.jsx` in a Next.js app (pages router).
// 2) Put your logo image at `/public/logo.png` (your uploaded file). Replace paths as needed.
// 3) Ensure Tailwind CSS is configured. This uses only Tailwind classes (no extra deps).
// 4) Edit the TOKEN constants below (CONTRACT_ADDRESS, TOTAL_SUPPLY, etc.).

import Head from 'next/head';
import Image from 'next/image';

const TOKEN = {
  name: 'BuffaloCoin',
  ticker: 'BUFFALO',
  totalSupply: '1,000,000,000',
  network: 'Solana / Any',
  contractAddress: '0xYOUR_CONTRACT_ADDRESS',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TOKEN.name} — {TOKEN.ticker}</title>
        <meta name="description" content="BuffaloCoin (BUFFALO) — memecoin inspired by the American buffalo: strength, pride, and community." />
        <meta property="og:title" content={`${TOKEN.name} — ${TOKEN.ticker}`} />
        <meta property="og:description" content="BuffaloCoin: a memecoin with lore, community, and the spirit of the plains." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-white text-slate-900 antialiased">
        <header className="backdrop-blur-sm sticky top-0 z-50 bg-white/70">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-amber-400">
                {/* Place your logo at public/logo.png */}
                <Image src="/logo.png" alt="BuffaloCoin logo" fill sizes="(max-width: 640px) 48px, 96px" style={{objectFit:'cover'}} />
              </div>
              <div>
                <div className="font-extrabold text-lg tracking-tight">{TOKEN.name}</div>
                <div className="text-xs text-slate-600 uppercase">Ticker: <span className="font-bold">{TOKEN.ticker}</span></div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
              <a href="#about" className="hover:text-amber-700">About</a>
              <a href="#tokenomics" className="hover:text-amber-700">Tokenomics</a>
              <a href="#roadmap" className="hover:text-amber-700">Roadmap</a>
              <a href="#community" className="hover:text-amber-700">Community</a>
              <a href="#buy" className="bg-amber-500 text-white px-3 py-2 rounded-md shadow hover:bg-amber-600">Buy</a>
            </nav>

            <div className="md:hidden">
              <a href="#buy" className="bg-amber-500 text-white px-3 py-2 rounded-md shadow">Buy</a>
            </div>
          </div>
        </header>

        <section id="home" className="container mx-auto px-6 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-amber-900">BuffaloCoin <span className="text-slate-700">{TOKEN.ticker}</span></h1>
              <p className="mt-4 text-lg text-slate-700">Born from the plains — a memecoin celebrating resilience, heritage, and the raw memetic power of the American buffalo. Community-led. Lore-rich. Built to entertain and unite degens with pride.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#buy" className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95">Buy BUFFALO</a>
                <a href="#tokenomics" className="inline-flex items-center gap-2 border border-amber-300 px-4 py-2 rounded-lg">Tokenomics</a>
                <a href="#roadmap" className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg">Roadmap</a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat label="Ticker" value={TOKEN.ticker} />
                <Stat label="Supply" value={TOKEN.totalSupply} />
                <Stat label="Network" value={TOKEN.network} />
                <Stat label="Contract" value={shorten(TOKEN.contractAddress)} />
              </div>

              <div className="mt-8 text-sm text-slate-600">Pro tip: Connect your wallet and check the official swap link in the footer. Beware of imposters — only buy from verified sources.</div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md bg-white/80 rounded-2xl p-6 shadow-lg ring-1 ring-amber-100">
                <div className="relative w-full h-64 md:h-80">
                  <Image src="/logo.png" alt="Buffalo logo" fill style={{objectFit:'contain'}} sizes="(max-width: 768px) 300px, 400px"/>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold">Join the Herd</h3>
                  <p className="mt-2 text-sm text-slate-600">BuffaloCoin is a community-first memecoin. Stories, lore, merch drops, and wild social stunts coming — ride with us.</p>

                  <div className="mt-4 flex gap-3">
                    <a href="#community" className="text-sm px-3 py-2 border rounded-md">Discord</a>
                    <a href="#community" className="text-sm px-3 py-2 border rounded-md">Twitter</a>
                    <a href="#community" className="text-sm px-3 py-2 border rounded-md">Telegram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-12 bg-amber-50">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2>About the Buffalo</h2>
            <p>
              The American buffalo (bison) has been a symbol of strength, abundance, and survival through centuries. From the Great Plains to proud emblems across badges and seals, the buffalo endured hardship and became a cultural icon.
            </p>
            <p>
              BuffaloCoin turns that spirit into memetic currency: a tongue-in-cheek homage to resilience, community rituals, and the grand spectacle of internet culture. Expect lore drops, wild art, and collaborative stunts that lean into American frontier motifs without taking ourselves too seriously.
            </p>
          </div>
        </section>

        <section id="tokenomics" className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">Tokenomics</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li><strong>Supply:</strong> {TOKEN.totalSupply}</li>
                <li><strong>Ticker:</strong> {TOKEN.ticker}</li>
                <li><strong>Dev Reward:</strong> 2% (example — editable)</li>
                <li><strong>Liquidity Lock:</strong> Target 6 months (community vote)</li>
                <li><strong>Use of Dev Reward:</strong> Marketing, community funds, charity drops.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">Security & Verification</h3>
              <p className="mt-2 text-slate-700">Important: Always verify the contract address. Look for project verification badges on major venues and the official GitHub repository. We plan to publish audits and liquidity proofs as the project grows.</p>

              <div className="mt-4">
                <a href="#" className="inline-block px-4 py-2 border rounded-md">View Contract</a>
                <a href="#" className="inline-block ml-3 px-4 py-2 bg-amber-600 text-white rounded-md">Audit Plans</a>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="container mx-auto px-6 py-12 bg-amber-50">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold">Roadmap</h3>
            <ol className="mt-6 space-y-4">
              <RoadItem step="Phase 1" title="Launch & Herd-Building" desc="Token launch, socials, initial liquidity, meme competitions."/>
              <RoadItem step="Phase 2" title="Verification & Trust" desc="Get verified on major platforms, publish audit summary, community transparency."/>
              <RoadItem step="Phase 3" title="Lore & Drops" desc="Art drops, merch collabs, Buffalo lore events and IRL stunts."/>
              <RoadItem step="Phase 4" title="Sustainable Growth" desc="DAO voting on treasury, grants, and charitable buffalo-conservation drops."/>
            </ol>
          </div>
        </section>

        <section id="community" className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Community & Culture</h3>
            <p className="mt-4 text-slate-700">BuffaloCoin is built around jokes, lore, and rituals. Think regular meme contests, "Herd Hunts" (treasure-hunt style social events), and weekly AMAs where devs and mememakers mingle with holders.</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="px-4 py-2 border rounded-md">Join Discord</a>
              <a href="#" className="px-4 py-2 border rounded-md">Follow Twitter</a>
              <a href="#" className="px-4 py-2 border rounded-md">Telegram</a>
            </div>
          </div>
        </section>

        <section id="buy" className="container mx-auto px-6 py-12 bg-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Ready to Join the Herd?</h3>
            <p className="mt-3 text-slate-700">When buying, always verify the contract address. Use trusted swap links published here and in our verified socials.</p>

            <div className="mt-6 flex justify-center gap-3">
              <a href="#" className="px-6 py-3 bg-amber-700 text-white rounded-lg shadow">Swap on DEX</a>
              <a href="#" className="px-6 py-3 border rounded-lg">Add to Wallet</a>
            </div>

            <div className="mt-6 text-xs text-slate-600">Official contract: <code className="bg-white/60 px-2 py-1 rounded">{TOKEN.contractAddress}</code></div>
          </div>
        </section>

        <footer className="mt-12 border-t bg-white/60">
          <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-full overflow-hidden ring-1 ring-amber-200">
                <Image src="/logo.png" alt="logo" fill style={{objectFit:'cover'}} sizes="40px"/>
              </div>
              <div>
                <div className="font-bold">BuffaloCoin</div>
                <div className="text-xs text-slate-600">Proudly memetic • Community-first</div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 text-sm text-slate-600">
              © {new Date().getFullYear()} BuffaloCoin — Not financial advice. Verify everything.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function Stat({ label, value }){
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-bold mt-1">{value}</div>
    </div>
  );
}

function RoadItem({ step, title, desc }){
  return (
    <li className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-start">
      <div className="flex-none w-24 text-amber-700 font-bold">{step}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </li>
  );
}

function shorten(addr){
  if(!addr) return '—';
  if(addr.length > 12) return addr.slice(0,6) + '...' + addr.slice(-4);
  return addr;
}
