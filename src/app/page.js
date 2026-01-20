import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-8 animate-[fadeIn_1s_ease-out]">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Rendering Modes <br />
          <span className="text-gradient">Demonstrated</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Welcome to the DailyEdge engineering demo. We are showcasing three different rendering strategies in Next.js 15:
          <span className="text-white font-semibold"> Static (SSG)</span>,
          <span className="text-blue-400 font-semibold"> Dynamic (SSR)</span>, and
          <span className="text-purple-400 font-semibold"> Hybrid (ISR)</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Static */}
          <a href="/about" className="group relative p-6 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Static (SSG)</h3>
              <p className="text-sm text-gray-500">Pre-rendered at build time. Ultra fast, best for static content.</p>
            </div>
          </a>

          {/* Card 2: Dynamic */}
          <a href="/dashboard" className="group relative p-6 rounded-2xl glass-panel hover:bg-blue-900/10 transition-all duration-300 hover:scale-105 border-blue-500/20 hover:border-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-800/50 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Dynamic (SSR)</h3>
              <p className="text-sm text-gray-500">Generated on every request. Perfect for personalized data.</p>
            </div>
          </a>

          {/* Card 3: Hybrid */}
          <a href="/breaking-news" className="group relative p-6 rounded-2xl glass-panel hover:bg-purple-900/10 transition-all duration-300 hover:scale-105 border-purple-500/20 hover:border-purple-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-800/50 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Hybrid (ISR)</h3>
              <p className="text-sm text-gray-500">Static with periodic updates. Best of both worlds.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
