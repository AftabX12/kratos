import { Construction, Sparkles, Rocket, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center p-4 bg-purple-500/10 rounded-full mb-4 animate-pulse">
          <Construction className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
            Under Construction
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            We're crafting something extraordinary. 
            <span className="block mt-2 text-purple-300">Stay tuned for the reveal.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Innovative</h3>
            <p className="text-sm text-slate-400">Built with cutting-edge technology</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <Rocket className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Fast</h3>
            <p className="text-sm text-slate-400">Optimized for performance</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <Code2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Modern</h3>
            <p className="text-sm text-slate-400">Next.js 14 with TypeScript</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-slate-500 font-mono">
            Powered by Next.js • Tailwind CSS • Drizzle ORM • Neon • Resend
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-600 mt-8">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </main>
  );
}
