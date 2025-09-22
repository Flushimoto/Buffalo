// pages/index.jsx
import Head from "next/head";
import Image from "next/image";

const TOKEN = {
  name: "BuffaloCoin",
  ticker: "BUFFALO",
  totalSupply: "1,000,000,000",
  network: "Solana / Any",
  contractAddress: "0xYOUR_CONTRACT_ADDRESS",
  // Conservation fund details (edit before launch)
  donationPercent: 0.5, // percent of dev reward dedicated to conservation (example: 0.5%)
  conservationWallet: "0xYOUR_CONSERVATION_WALLET",
  conservationProofLink: "", // link to donation receipts / ledger proof
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TOKEN.name} — {TOKEN.ticker}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="BuffaloCoin — memecoin honoring the resilience of the plains. Community-first, conservation-aware." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-slate-900 text-amber-50 antialiased">
        {/* Topbar */}
        <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-900/80 to-slate-900/60 border-b border-slate-800">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-amber-700">
                <Image src="/logo.png" alt="BuffaloCoin logo" fill style={{objectFit: "cover"}} sizes="48px" />
              </div>
              <div>
                <div className="font-extrabold text-lg" style={{fontFamily:"Roboto Slab, serif"}}>{TOKEN.name}</div>
                <div className="text-xs text-amber-300 uppercase">{TOKEN.ticker} • The Herd Token</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-amber-200">
              <a href="#lore" className="hover:text-white">Lore</a>
              <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
              <a href="#conservation" className="hover:text-white">Conservation Fund</a>
              <a href="#buy" className="bg-amber-600 text-slate-900 px-3 py-2 rounded-md">Join Herd</a>
            </nav>

            <div className="md:hidden">
              <a href="#buy" className="bg-amber-600 text-slate-900 px-3 py-2 rounded-md">Join Herd</a>
            </div>
          </div>
        </header>

        {/* Full-bleed Hero (edge to edge) */}
        <section
          id="home"
          className="w-full"
          style={{
            backgroundImage: `url('/hero.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* dark overlay to ensure text legibility */}
          <div className="w-full bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60">
            <div className="container mx-auto px-6 py-28 md:py-36">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight" style={{fontFamily: "Roboto Slab, serif"}}>
                    BuffaloCoin <span className="text-amber-300">{TOKEN.ticker}</span>
                  </h1>
                  <p className="mt-6 text-amber-200 max-w-xl text-lg">
                    A token inspired by the bison’s stubborn resilience — the herd, the plains, and a long American story of survival.
                    Community-led, transparency-first, and committed to supporting conservation efforts on the ground.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#buy" className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-lg shadow">Buy BUFFALO</a>
                    <a href="#lore" className="inline-flex items-center gap-2 border border-amber-700 px-4 py-2 rounded-lg">Read Lore</a>
                    <a href="#conservation" className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-lg">Conservation Fund</a>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-sm">
                    <Stat label="Ticker" value={TOKEN.ticker} />
                    <Stat label="Supply" value={TOKEN.totalSupply} />
                    <Stat label="Network" value={TOKEN.network} />
                    <Stat label="Contract" value={shorten(TOKEN.contractAddress)} />
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="w-full max-w-md bg-slate-900/50 p-6 rounded-2xl border border-slate-700 shadow-lg">
                    <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden bg-slate-800/60">
                      <Image src="/logo.png" alt="Buffalo logo" fill style={{objectFit: "contain"}} sizes="(max-width: 768px) 300px, 400px" />
                    </div>

                    <div className="mt-5">
                      <h3 className="text-lg font-bold text-amber-100">The Herd</h3>
                      <p className="mt-2 text-sm text-amber-200">Join a community that values resilience, transparency, and real-world impact. Periodic lore drops and community governance will steer the future.</p>
                      <div className="mt-4 flex gap-3">
                        <a href="#community" className="px-3 py-2 border rounded-md">Discord</a>
                        <a href="#community" className="px-3 py-2 border rounded-md">X</a>
                        <a href="#community" className="px-3 py-2 border rounded-md">Telegram</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Lore (serious tone) */}
        <section id="lore" className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold" style={{fontFamily:"Roboto Slab, serif"}}>Lore — Resilience, Herd, and Stewardship</h2>
            <p className="mt-4 text-amber-200 max-w-3xl">
              The American bison survived near-extinction and returned as a symbol of endurance and regeneration. BuffaloCoin borrows that story:
              a memetic token that wears the buffalo’s stubborn strength as a badge. We lean into community rituals, long-term storytelling, and — crucially — responsibility.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="font-semibold text-amber-300">Values</div>
                <ul className="mt-3 list-disc pl-5 text-amber-200 space-y-2">
                  <li>Community-first governance</li>
                  <li>Transparency in dev funds & donations</li>
                  <li>Support for buffalo conservation</li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="font-semibold text-amber-300">Rituals & Activities</div>
                <div className="mt-3 text-amber-200">
                  Regular lore drops, community votes on treasury use, and seasonal "Herd Hunts" (social treasure-hunt events). We avoid cheap jokes; we celebrate the story.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics & Conservation */}
        <section id="tokenomics" className="container mx-auto px-6 py-12 bg-slate-900/20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto bg-slate-800/60 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-100">Tokenomics & Conservation</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-amber-200">
                <div><strong>Supply:</strong> {TOKEN.totalSupply}</div>
                <div><strong>Dev Reward (example):</strong> 2% of trade volume</div>
                <div><strong>Conservation Allocation:</strong> {TOKEN.donationPercent}% of dev reward will be directed to verified buffalo conservation organizations.</div>
                <div><strong>Liquidity Lock:</strong> Target 6 months (community vote to extend).</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <div className="font-semibold text-amber-300">Donation Transparency</div>
                <p className="text-amber-200 mt-2 text-sm">
                  We commit to on-chain transparency: withdrawals for donations will be sent from the official dev wallet to verified charity wallets, with receipts posted to our proof page. Below is the conservation wallet where funds will be collected before disbursal.
                </p>

                <div className="mt-3 text-xs text-amber-300">
                  <div>Conservation wallet: <code className="bg-slate-900/40 px-2 py-1 rounded">{TOKEN.conservationWallet}</code></div>
                  <div className="mt-2">Donation proof: <a href={TOKEN.conservationProofLink || "#"} className="text-amber-200 underline">published receipts & txs</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Fund - separate clear callout */}
        <section id="conservation" className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-100">Conservation Fund</h3>
            <p className="mt-3 text-amber-200">
              We will allocate a portion of dev rewards to support buffalo and habitat conservation. This is not marketing theater — it's an operational commitment:
            </p>
            <ol className="mt-4 list-decimal pl-5 text-amber-200 space-y-2">
              <li>Funds collected in the conservation wallet (public on-chain address).</li>
              <li>Quarterly disbursements to partnered conservation NGOs (multi-sig withdrawal, public receipts).</li>
              <li>Monthly donation reports posted as proof (tx links + PDF receipts).</li>
            </ol>

            <div className="mt-6 flex gap-3">
              <a href={TOKEN.conservationProofLink || "#"} className="px-4 py-2 border rounded-md">View Proof (coming)</a>
              <a href="#community" className="px-4 py-2 bg-amber-600 text-slate-900 rounded-md">Partner & Volunteer</a>
            </div>
          </div>
        </section>

        {/* Buy CTA */}
        <section id="buy" className="container mx-auto px-6 py-12 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-3xl mx-auto text-center bg-slate-900/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-100">Ready to Join the Herd?</h3>
            <p className="mt-3 text-amber-200">Verify contract address and swap only via the links published here. Copies exist — be cautious.</p>

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
                <Image src="/logo.png" alt="logo" fill style={{objectFit:'cover'}} sizes="40px" />
              </div>
              <div>
                <div className="font-bold">BuffaloCoin</div>
                <div className="text-sm text-amber-300">Resilience • Stewardship • Community</div>
              </div>
            </div>

            <div className="text-sm text-amber-300">© {new Date().getFullYear()} BuffaloCoin — verify everything. Not financial advice.</div>
          </div>
        </footer>
      </main>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-slate-900/40 p-3 rounded-lg">
      <div className="text-xs text-amber-300">{label}</div>
      <div className="font-bold mt-1 text-amber-50">{value}</div>
    </div>
  );
}

function shorten(addr) {
  if (!addr) return '—';
  if (addr.length > 12) return addr.slice(0, 6) + '...' + addr.slice(-4);
  return addr;
}
