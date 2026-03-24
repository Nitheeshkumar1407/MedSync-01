import DashboardLayout from "@/app/dashboard-layout";
import PageWrapper from "@/components/PageWrapper";
import { Activity, FileText, Bell, CalendarClock, History } from "lucide-react";

export default function PatientDashboard() {
  return (
    <DashboardLayout>
      <PageWrapper>
        <div className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          
          <header className="flex justify-between items-center mb-12 relative z-10">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-slate-900 dark:text-slate-100">Good morning, <span className="font-semibold text-primary-600 dark:text-primary-500">Alex</span></h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-light tracking-tight italic opacity-80">Your personalized health insight engine is online.</p>
            </div>
            <button className="p-5 rounded-full glass-panel hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all relative group shadow-2xl border border-white/40 dark:border-white/5 active:scale-95">
              <Bell size={28} className="text-slate-700 dark:text-slate-300 group-hover:text-primary-600 transition-colors" />
              <span className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg shadow-red-500/50 scale-100 group-hover:scale-125 transition-transform"></span>
              <span className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></span>
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
            
            {/* Live Analytics Card */}
            <div className="glass-panel p-10 rounded-[48px] flex flex-col justify-between hover:-translate-y-3 hover:shadow-[0_45px_100px_-20px_rgba(20,184,166,0.1)] transition-all duration-700 border-white/60 dark:border-white/5 group active:scale-[0.98]">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-3xl group-hover:scale-110 transition-transform shadow-xl shadow-amber-500/10">
                  <Activity size={32} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 uppercase tracking-widest text-[10px]">Processing Live Data</h3>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-4 uppercase tracking-tighter opacity-60">BLOOD WORK ANALYSIS (v2)</p>
                <div className="flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 p-6 rounded-[32px] border border-white/50 dark:border-white/5 shadow-2xl backdrop-blur-md">
                  <span className="flex h-6 w-6 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.6)]"></span>
                  </span>
                  <p className="text-3xl font-black text-slate-800 dark:text-slate-100 italic tracking-tighter uppercase">Analyzing...</p>
                </div>
              </div>
            </div>

            {/* Appointment Card */}
            <div className="glass-panel p-10 rounded-[48px] flex flex-col justify-between hover:-translate-y-3 hover:shadow-[0_45px_100px_-20px_rgba(59,130,246,0.1)] transition-all duration-700 border-white/60 dark:border-white/5 group active:scale-[0.98]">
               <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-3xl group-hover:scale-110 transition-transform shadow-xl shadow-primary-500/10">
                  <CalendarClock size={32} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 uppercase tracking-widest text-[10px]">Upcoming Clinical Session</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tighter italic">2:30 PM <span className="font-thin text-slate-400 not-italic">Today</span></p>
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-widest">DR. SARAH JENKINS • LEVEL 3 / R-302</p>
                <div className="mt-8 inline-flex px-5 py-2 bg-blue-600 dark:bg-blue-600 text-white text-[10px] rounded-full font-black tracking-widest uppercase shadow-xl shadow-blue-500/30 border border-blue-400 group-hover:scale-110 transition-transform">
                  QUEUE SLOT #2
                </div>
              </div>
            </div>

            {/* Historical Insights Panel */}
            <div className="glass-panel p-12 rounded-[56px] lg:col-span-3 flex flex-col hover:shadow-2xl transition-all duration-700 bg-white/40 dark:bg-slate-900/10 border-white/60 dark:border-white/5 shadow-2xl mt-10">
              <div className="flex justify-between items-center mb-12 border-b border-white/20 dark:border-slate-800 pb-10">
                <div className="flex items-center gap-5">
                  <div className="p-5 bg-blue-500 dark:bg-blue-900 text-white rounded-[24px] shadow-2xl shadow-blue-500/20">
                    <History size={36} />
                  </div>
                  <div>
                    <h3 className="font-black text-4xl text-slate-800 dark:text-slate-100 tracking-tighter uppercase italic">Secure Vault</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px]">End-to-End Encrypted Medical Records</p>
                  </div>
                </div>
                <button className="hidden sm:flex text-[10px] font-black px-8 py-4 rounded-3xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:scale-110 transition-all uppercase tracking-widest active:scale-95">
                  Access History
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { title: "MRI SCAN RESULTS", date: "MAR 12, 2026", dr: "DR. JENKINS" },
                   { title: "ANNUAL PHYSICAL", date: "JAN 15, 2026", dr: "DR. SMITH" }
                 ].map((report, i) => (
                   <div key={i} className="group flex justify-between items-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-[40px] hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 shadow-xl active:scale-98">
                     <div className="flex items-center gap-6">
                       <div className="p-5 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-[24px] group-hover:text-primary-600 transition-all">
                         <FileText size={28} />
                       </div>
                       <div>
                         <p className="font-black text-xl text-slate-800 dark:text-slate-200 tracking-tighter uppercase italic">{report.title}</p>
                         <p className="text-[10px] text-slate-500 font-bold tracking-widest mt-1 opacity-70 uppercase">{report.date} • REVIEWED BY {report.dr}</p>
                       </div>
                     </div>
                     <span className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full group-hover:scale-125 transition-all">
                        <CheckCircle size={24} />
                     </span>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </PageWrapper>
    </DashboardLayout>
  );
}
