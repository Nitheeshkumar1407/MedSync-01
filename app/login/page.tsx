"use client";

import PageWrapper from "@/components/PageWrapper";
import { Lock, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // In a real app this would use Supabase auth
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
       setLoading(false);
       // Mock redirect based on demo
       window.location.href = "/patient";
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        
        <div className="w-full max-w-md relative z-10 space-y-8">
           <div className="text-center">
             <h1 className="text-4xl font-light tracking-tight text-slate-800 dark:text-slate-100">Welcome to <span className="font-semibold text-primary-600 dark:text-primary-500">MedSync</span></h1>
             <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Secure access to your health records.</p>
           </div>

           <form onSubmit={handleLogin} className="glass-panel p-8 rounded-3xl space-y-6 shadow-xl border border-white/20 dark:border-slate-800/50">
              
              <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 pointer-events-none">Email Address</label>
                   <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                     <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl pl-10 pr-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
                        placeholder="you@example.com"
                     />
                   </div>
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 pointer-events-none">Password</label>
                   <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                     <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl pl-10 pr-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none transition-all"
                        placeholder="••••••••"
                     />
                   </div>
                 </div>
              </div>

              <button 
                 disabled={loading}
                 type="submit" 
                 className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-2xl font-medium transition-all hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed group">
                 {loading ? "Authenticating..." : "Sign In"}
                 {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>

              <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                 <p>Demo Login credentials:</p>
                 <p>Any email/password resolves to Patient Dashboard.</p>
              </div>
           </form>
        </div>
      </div>
    </PageWrapper>
  );
}
