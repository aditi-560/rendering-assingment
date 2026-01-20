
export const revalidate = false; // Explicitly static

export default function AboutPage() {
    const buildTime = new Date().toLocaleString();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="glass-panel p-8 rounded-2xl animate-[slideUp_0.5s_ease-out]">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">About DailyEdge</h1>
                        <p className="text-gray-400">Static Rendering (SSG)</p>
                    </div>
                </div>

                <div className="space-y-6 text-gray-300">
                    <p>
                        This page is statically generated at build time. It's served as pure HTML/CSS, making it incredibly fast.
                    </p>

                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                        <h3 className="text-sm font-uppercase tracking-wider text-gray-500 mb-2">BUILD TIMESTAMP</h3>
                        <p className="text-2xl font-mono text-green-400">{buildTime}</p>
                        <p className="text-xs text-gray-500 mt-2">
                            (This timestamp will NOT change when you refresh the page until the next build)
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-4 rounded-lg bg-gray-900/30 border border-gray-800">
                            <h4 className="font-semibold text-white mb-2">Pros</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                <li>Fastest possible load times</li>
                                <li>Cheapest to host (served from CDN)</li>
                                <li>Reliable (no database to fail)</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-900/30 border border-gray-800">
                            <h4 className="font-semibold text-white mb-2">Cons</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                <li>Content can be stale</li>
                                <li>Requires rebuild to update content</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
