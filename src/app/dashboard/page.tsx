
export const dynamic = 'force-dynamic';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function DashboardPage() {
    const user = await getData();
    const timestamp = new Date().toISOString();
    // Simulate random metrics
    const views = Math.floor(Math.random() * 10000);
    const clicks = Math.floor(Math.random() * 500);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="glass-panel p-8 rounded-2xl animate-[slideUp_0.5s_ease-out] border-blue-500/20">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-blue-100">User Dashboard</h1>
                        <p className="text-blue-400">Dynamic Rendering (SSR)</p>
                    </div>
                </div>

                <div className="space-y-6 text-gray-300">
                    <p>
                        This page is generated on the server for <strong>every request</strong>. The data is always live.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20">
                            <h4 className="text-xs uppercase text-blue-400 font-semibold mb-1">User</h4>
                            <p className="text-xl font-bold text-white">{user.name}</p>
                            <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                        <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20">
                            <h4 className="text-xs uppercase text-blue-400 font-semibold mb-1">Live Views</h4>
                            <p className="text-xl font-bold text-white">{views.toLocaleString()}</p>
                            <p className="text-xs text-green-400 flex items-center mt-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                                Live
                            </p>
                        </div>
                        <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20">
                            <h4 className="text-xs uppercase text-blue-400 font-semibold mb-1">Server Time</h4>
                            <p className="text-sm font-mono text-white break-all">{timestamp}</p>
                        </div>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                        <p className="text-xs text-gray-500 text-center">
                            Refreshed at: {new Date().toLocaleTimeString()} (Try refreshing the page!)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
