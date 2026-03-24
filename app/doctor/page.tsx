import PageWrapper from "@/components/PageWrapper";
import { Users, FileText, CheckCircle, Search } from "lucide-react";

export default function DoctorDashboard() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6 relative z-10">
          <div>
            <h1 className="text-4xl font-light tracking-tight">Doctor <span className="font-semibold text-primary-600 dark:text-primary-500">Dashboard</span></h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Manage your patients and assigned reports.</p>
          </div>
          <div className="flex bg-white/60 dark:bg-slate-900/40 p-2 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm w-full md:w-auto">
             <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="w-full md:w-64 bg-transparent border-none focus:ring-0 pl-10 pr-4 py-2 text-foreground placeholder-slate-400 outline-none"
                />
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
          
          {/* Patients Queue */}
          <div className="md:col-span-1 space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
               <Users className="text-primary-500" /> Today's Queue
            </h2>
            <div className="glass-panel rounded-3xl p-2 space-y-2">
               {/* Queue Item Active */}
               <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-primary-100 dark:border-primary-900/50 cursor-pointer transition-all hover:shadow-md">
                 <div className="flex justify-between items-start mb-2">
                   <p className="font-medium text-slate-800 dark:text-slate-100">Alex</p>
                   <span className="text-xs font-semibold px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">Waiting</span>
                 </div>
                 <p className="text-xs text-slate-500">2:30 PM • Routine Checkup</p>
                 <button className="w-full mt-3 py-2 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 text-primary-600 dark:text-primary-400 font-medium text-sm rounded-xl transition-colors">
                   Call Patient In
                 </button>
               </div>

               {/* Queue Item Completed */}
               <div className="p-4 rounded-2xl bg-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors opacity-70">
                 <div className="flex justify-between items-start mb-2">
                   <p className="font-medium text-slate-800 dark:text-slate-100">Sarah Jenkins</p>
                   <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full">Done</span>
                 </div>
                 <p className="text-xs text-slate-500">1:00 PM • Follow-up</p>
               </div>
            </div>
          </div>

          {/* Report Feed */}
          <div className="glass-panel p-8 rounded-3xl md:col-span-3 flex flex-col hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-semibold text-2xl text-slate-800 dark:text-slate-100 flex items-center gap-3">
                 <FileText className="text-blue-500" /> New Lab Reports
              </h3>
            </div>
            
            <div className="space-y-4">
               {/* Report Item */}
               <div className="group flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-white/40 dark:bg-slate-800/40 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm gap-4">
                 <div className="flex items-center gap-5">
                   <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                     <FileText size={24} />
                   </div>
                   <div>
                     <p className="font-semibold text-lg text-slate-800 dark:text-slate-200">Patient: Alex - Comprehensive Blood Panel</p>
                     <p className="text-sm text-slate-500 font-medium mt-1">Uploaded 10 mins ago • High Priority</p>
                   </div>
                 </div>
                 <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-sm rounded-xl transition-colors">
                      View PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded-xl transition-colors shadow-sm">
                      <CheckCircle size={16} /> Mark Reviewed
                    </button>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
