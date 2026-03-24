import DashboardLayout from "@/app/dashboard-layout";
import PageWrapper from "@/components/PageWrapper";
import { Users, FileText, CheckCircle, Search, Clock, Activity } from "lucide-react";

export default function DoctorDashboard() {
  return (
    <DashboardLayout>
      <PageWrapper>
        <div className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          
          <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-8 relative z-10">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-slate-900 dark:text-slate-100 italic">Medical <span className="font-bold text-primary-600 dark:text-primary-500 not-italic">Dashboard</span></h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Supervise your patients and medical review queue.</p>
            </div>
            
            <div className="flex bg-white/40 dark:bg-slate-900/40 p-3 rounded-2xl backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-lg w-full md:w-auto ring-1 ring-slate-100 dark:ring-slate-800">
               <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search by Patient Name..." 
                    className="w-full md:w-80 bg-transparent border-none focus:ring-0 pl-12 pr-6 py-3 text-foreground placeholder-slate-400 outline-none text-lg font-light"
                  />
               </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 relative z-10">
            
            {/* Patients Queue - Side Column */}
            <div className="md:col-span-1 space-y-8">
              <h2 className="text-xl font-bold flex items-center gap-3 tracking-tight text-slate-800 dark:text-slate-200">
                 <Clock className="text-primary-500" /> ACTIVE QUEUE
              </h2>
              
              <div className="glass-panel rounded-[32px] p-4 flex flex-col gap-4 border-white/40 dark:border-white/5 shadow-xl">
                 {/* Queue Item Active */}
                 <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-primary-100 dark:border-primary-900/50 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-2xl group border-l-[6px] border-l-primary-500">
                   <div className="flex justify-between items-start mb-3">
                     <p className="font-bold text-xl text-slate-800 dark:text-slate-100">Alex</p>
                     <span className="text-xs font-black px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800">WAITING</span>
                   </div>
                   <p className="text-sm text-slate-500 font-medium italic">2:30 PM • Routine Checkup</p>
                   <button className="w-full mt-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-primary-500/20 active:scale-95">
                     CALL IN PATIENT
                   </button>
                 </div>

                 {/* Queue Item Done */}
                 <div className="p-6 rounded-3xl bg-white/20 dark:bg-slate-800/20 cursor-default opacity-50 flex items-center justify-between">
                   <div>
                     <p className="font-bold text-slate-700 dark:text-slate-300">Sarah Jenkins</p>
                     <p className="text-xs text-slate-500 italic">1:00 PM • Follow-up</p>
                   </div>
                   <CheckCircle className="text-emerald-500" size={24} />
                 </div>
              </div>
              
              <div className="glass-panel p-6 rounded-3xl bg-primary-500/5 border-primary-500/10 dark:border-primary-500/5">
                 <p className="text-sm font-medium text-primary-600 dark:text-primary-400 text-center italic">"Healing is a matter of time, but it is sometimes also a matter of opportunity."</p>
              </div>
            </div>

            {/* Main Report Feed */}
            <div className="glass-panel p-10 rounded-[40px] md:col-span-3 flex flex-col hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 border-white/40 dark:border-white/10 shadow-2xl">
              <div className="flex justify-between items-center mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                    <FileText size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl text-slate-800 dark:text-slate-100 tracking-tight">Pending Lab Reviews</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Results requiring your validated signature</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
                   <Activity size={16} className="text-primary-500" />
                   <span className="text-xs font-black text-slate-500">3 NEW</span>
                </div>
              </div>
              
              <div className="space-y-6">
                 {/* Report Item */}
                 <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center p-8 bg-white/40 dark:bg-slate-800/40 rounded-[32px] hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-2xl gap-6 active:scale-[0.99]">
                   <div className="flex items-center gap-6">
                     <div className="p-5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-3xl group-hover:scale-110 transition-transform shadow-inner">
                       <FileText size={32} />
                     </div>
                     <div>
                       <div className="flex items-center gap-3">
                          <p className="font-black text-xl text-slate-800 dark:text-slate-200 tracking-tight">ALEX - BLOOD PANEL</p>
                          <span className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-black rounded-lg border border-red-100 dark:border-red-900 uppercase">Urgent</span>
                       </div>
                       <p className="text-md text-slate-500 font-medium mt-1 italic">Uploaded by Tech J. Doe • 10 mins ago</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                      <button className="flex-1 lg:flex-none px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-sm rounded-2xl transition-all ring-1 ring-slate-200 dark:ring-slate-700">
                        VIEW ANALYSIS
                      </button>
                      <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-emerald-600 hover:bg-black dark:hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl transition-all shadow-xl dark:shadow-emerald-500/20 hover:translate-y-[-2px]">
                        <CheckCircle size={18} /> SIGN & COMPLETE
                      </button>
                   </div>
                 </div>

                 {/* Report Item */}
                 <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center p-8 bg-white/40 dark:bg-slate-800/40 rounded-[32px] hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-2xl gap-6 active:scale-[0.99]">
                   <div className="flex items-center gap-6">
                     <div className="p-5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-3xl group-hover:scale-110 transition-transform">
                       <FileText size={32} />
                     </div>
                     <div>
                       <div className="flex items-center gap-3">
                          <p className="font-black text-xl text-slate-800 dark:text-slate-200 tracking-tight">SARAH JENKINS - MRI SCAN</p>
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-black rounded-lg border border-slate-200 dark:border-slate-800 uppercase">Standard</span>
                       </div>
                       <p className="text-md text-slate-500 font-medium mt-1 italic">Uploaded by Tech B. Wayne • 2 hours ago</p>
                     </div>
                   </div>
                   <div className="flex gap-4">
                      <button className="flex-1 lg:flex-none px-8 py-4 bg-slate-100 dark:bg-slate-800 font-bold text-sm rounded-2xl transition-all ring-1 ring-slate-200">
                        VIEW ANALYSIS
                      </button>
                      <button className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-emerald-600 text-white font-bold text-sm rounded-2xl transition-all">
                        <CheckCircle size={18} /> SIGN & COMPLETE
                      </button>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </PageWrapper>
    </DashboardLayout>
  );
}
