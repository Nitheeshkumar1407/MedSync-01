import PageWrapper from "@/components/PageWrapper";
import { Activity, FileText, Bell, CalendarClock, History } from "lucide-react";

export default function PatientDashboard() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        
        <header className="flex justify-between items-center mb-12 relative z-10">
          <div>
            <h1 className="text-4xl font-light tracking-tight">Good morning, <span className="font-semibold text-primary-600 dark:text-primary-500">Alex</span></h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Here is your health overview for today.</p>
          </div>
          <button className="p-4 rounded-full glass-panel hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all relative group shadow-sm hover:shadow-md cursor-pointer">
            <Bell size={24} className="text-slate-700 dark:text-slate-300 group-hover:text-primary-600 transition-colors" />
            <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></span>
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          
          {/* Status Card */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl shadow-sm">
                <Activity size={28} />
              </div>
              <h3 className="font-semibold text-xl text-slate-800 dark:text-slate-100">Live Status</h3>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">Comprehensive Blood Panel</p>
              <div className="flex items-center gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-white/40 dark:border-white/5">
                <span className="flex h-4 w-4 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
                </span>
                <p className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Processing...</p>
              </div>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
             <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl shadow-sm">
                <CalendarClock size={28} />
              </div>
              <h3 className="font-semibold text-xl text-slate-800 dark:text-slate-100">Next Appointment</h3>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-1">Today, 2:30 PM</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Dr. Sarah Jenkins • Room 302</p>
              <div className="mt-4 inline-flex px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium border border-blue-100 dark:border-blue-800">
                You are currently in Queue position #2
              </div>
            </div>
          </div>

          {/* Report Card */}
          <div className="glass-panel p-8 rounded-3xl md:col-span-3 flex flex-col hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm">
                  <History size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-slate-800 dark:text-slate-100">Recent Reports</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Access your secure medical documents</p>
                </div>
              </div>
              <button className="text-sm px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors">
                View All History
              </button>
            </div>
            
            <div className="space-y-4">
               {/* Ready Item */}
               <div className="group flex justify-between items-center p-5 bg-white/40 dark:bg-slate-800/40 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
                 <div className="flex items-center gap-5">
                   <div className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-xl group-hover:text-primary-600 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                     <FileText size={20} />
                   </div>
                   <div>
                     <p className="font-semibold text-lg text-slate-800 dark:text-slate-200 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">MRI Scan Results</p>
                     <p className="text-sm text-slate-500 font-medium mt-0.5">March 12, 2026 • Ordered by Dr. Sarah Jenkins</p>
                   </div>
                 </div>
                 <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm rounded-full font-semibold border border-emerald-100 dark:border-emerald-800 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                   Ready to Download
                 </span>
               </div>
               
               {/* Ready Item */}
               <div className="group flex justify-between items-center p-5 bg-white/40 dark:bg-slate-800/40 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
                 <div className="flex items-center gap-5">
                   <div className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-xl group-hover:text-primary-600 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                     <FileText size={20} />
                   </div>
                   <div>
                     <p className="font-semibold text-lg text-slate-800 dark:text-slate-200 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">Annual Physical Panel</p>
                     <p className="text-sm text-slate-500 font-medium mt-0.5">January 15, 2026 • Ordered by Dr. Alan Smith</p>
                   </div>
                 </div>
                 <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm rounded-full font-semibold border border-emerald-100 dark:border-emerald-800 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                   Ready to Download
                 </span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
