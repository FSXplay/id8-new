// pages/purchased.tsx
import Head from "next/head";

export default function PurchasedPage() {
  return (
    <>
      <Head>
        <title>Purchased Performances</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </Head>

      <div className="bg-zinc-900 text-white min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8">My Purchased Performances</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ticket Card Example */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/performance1.jpg')" }} />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Apsara Spirit</h2>
              <p className="text-sm text-zinc-400">Purchased: May 26, 2025</p>
              <p className="text-sm text-zinc-400">Show Date: June 2, 2025 · 7:00 PM</p>
              <div className="flex items-center justify-between mt-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold">$2.00</span>
                <a href="/media/videos/performance1.mp4" target="_blank" rel="noopener noreferrer" className="text-yellow-300 text-sm hover:underline">
                  Watch Now
                </a>
              </div>
            </div>
          </div>

          {/* Add more purchased tickets below in the same format */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/performance2.jpg')" }} />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Khmer Classical Night</h2>
              <p className="text-sm text-zinc-400">Purchased: May 30, 2025</p>
              <p className="text-sm text-zinc-400">Show Date: July 10, 2025 · 8:00 PM</p>
              <div className="flex items-center justify-between mt-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold">$3.50</span>
                <a href="#" className="text-yellow-300 text-sm hover:underline">
                  Watch Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}