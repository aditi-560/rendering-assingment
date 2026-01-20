
export const revalidate = 60;

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getNews() {
    // We use a random query param to ensure we aren't just hitting a browser cache, 
    // but Next.js should handle the caching based on revalidate.
    // Actually, for ISR demo using an external API that doesn't change often might look static.
    // I will append a query param that represents the 'time bucket' of the minute to simulate updates if the API allowed it,
    // but JSONPlaceholder is static. 
    // Instead, I'll return the posts and ANY random data I generate here will be cached for 60s.

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }
    return res.json();
}

export default async function BreakingNewsPage() {
    const posts = await getNews();
    const lastUpdated = new Date().toLocaleString();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="glass-panel p-8 rounded-2xl animate-[slideUp_0.5s_ease-out] border-purple-500/20">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-purple-100">Breaking News</h1>
                        <p className="text-purple-400">Hybrid Rendering (ISR)</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between bg-purple-900/10 p-4 rounded-lg border border-purple-500/20">
                        <div>
                            <p className="text-sm text-gray-400">Page Cache Status</p>
                            <p className="text-white font-semibold">Revalidates every 60 seconds</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-purple-400 uppercase">Generated At</p>
                            <p className="text-sm font-mono text-white">{lastUpdated}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {posts.map((post: Post) => (
                            <div key={post.id} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <span className="inline-block px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded mb-2">
                                    BREAKING
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{post.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-gray-900/50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 text-center">
                            If you refresh this page within 60s, the "Generated At" time won't change. <br />
                            After 60s, the next refresh will trigger a background update, and subsequent refreshes will show the new time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}