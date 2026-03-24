import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        
        <div className="max-w-3xl text-center relative z-10 space-y-8">
           <div className="flex justify-center mb-6">
             <div className="p-4 bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-3xl shadow-lg border border-primary-100 dark:border-primary-800">
               <Activity size={48} />
             </div>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-800 dark:text-slate-100">
             Welcome to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">MedSync</span>
           </h1>
           
           <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
             The modern, secure, and intuitive healthcare management platform for patients, doctors, and lab technicians.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 mt-8">
             <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:shadow-xl hover:shadow-primary-500/20 flex items-center justify-center gap-2 group">
               Access Portal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
             
             {/* Demo Links for easy access */}
             <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-4">
               <Link href="/doctor" className="px-6 py-4 glass-panel rounded-full font-medium hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors text-slate-700 dark:text-slate-300">
                 Doctor UI
               </Link>
               <Link href="/lab-tech" className="px-6 py-4 glass-panel rounded-full font-medium hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors text-slate-700 dark:text-slate-300">
                 Lab Tech UI
               </Link>
             </div>
           </div>
        </div>
      </div>
    </PageWrapper>
  );
}
