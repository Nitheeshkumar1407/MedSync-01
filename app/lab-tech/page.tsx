import DashboardLayout from "@/app/dashboard-layout";
import PageWrapper from "@/components/PageWrapper";
import { UploadCloud, FileText, CheckCircle, Search, Microscope, Database, FileUp, Users } from "lucide-react";

export default function LabTechDashboard() {
  return (
    <DashboardLayout>
      <PageWrapper>
        <div className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          
          <header className="mb-12 relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-primary-600/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-2xl ring-1 ring-primary-100 dark:ring-primary-900/50">
                 <Microscope size={28} />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">Technician <span className="text-primary-600 dark:text-primary-500">Suite</span></h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-lg italic">Diagnostic document processing and assignment engine.</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            
            {/* Upload Form - Left Column */}
            <div className="glass-panel p-10 rounded-[40px] flex flex-col hover:shadow-2xl transition-all duration-700 bg-white/40 dark:bg-slate-900/40 border-white/40 dark:border-white/10 shadow-xl group">
              <div className="flex justify-between items-center mb-8 border-b border-white/20 dark:border-slate-800 pb-6">
                <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-100 flex items-center gap-4">
                   <FileUp className="text-primary-500" /> FILE INGESTION
                </h3>
              </div>
              
              <form className="space-y-8">
                 <div className="relative group/upload p-12 border-2 border-dashed border-primary-200/50 dark:border-primary-900/50 rounded-[32px] bg-white/20 dark:bg-slate-800/20 text-center hover:bg-white/40 dark:hover:bg-slate-800/40 hover:border-primary-400 dark:hover:border-primary-600 transition-all cursor-pointer overflow-hidden active:scale-95">
                   <div className="absolute inset-0 bg-primary-500/5 dark:bg-primary-500/5 opacity-0 group-hover/upload:opacity-100 transition-opacity" />
                   <UploadCloud size={64} className="mx-auto text-primary-400 dark:text-primary-600 group-hover/upload:text-primary-500 group-hover/upload:-translate-y-2 transition-all duration-500 mb-4" />
                   <p className="text-slate-800 dark:text-slate-200 font-black text-lg tracking-tight">DRAG & DROP MEDICAL PDF</p>
                   <p className="text-sm text-slate-500 font-medium italic mt-2 uppercase tracking-widest">or browse from local server</p>
                 </div>

                 <div className="space-y-6">
                   <div>
                     <label className="block text-[10px] font-black text-primary-600 dark:text-primary-500 mb-2 uppercase tracking-widest">Select Patient Profile</label>
                     <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl border border-white/30 dark:border-slate-800 rounded-2xl pl-12 pr-6 py-4 text-slate-900 dark:text-slate-100 font-bold outline-none ring-primary-500 transition-all focus:ring-2 cursor-pointer hover:bg-white/80 dark:hover:bg-slate-800">
                           <option>Select Patient...</option>
                           <option>ALEX (ID: 00412)</option>
                           <option>SARAH JENKINS (ID: 00984)</option>
                        </select>
                     </div>
                   </div>

                   <div>
                     <label className="block text-[10px] font-black text-primary-600 dark:text-primary-500 mb-2 uppercase tracking-widest">Assigning Doctor</label>
                     <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl border border-white/30 dark:border-slate-800 rounded-2xl pl-12 pr-6 py-4 text-slate-900 dark:text-slate-100 font-bold outline-none ring-primary-500 transition-all focus:ring-2 cursor-pointer hover:bg-white/80 dark:hover:bg-slate-800">
                           <option>Select Attending Doctor...</option>
                           <option>DR. SARAH JENKINS</option>
                           <option>DR. ALAN SMITH</option>
                        </select>
                     </div>
                   </div>
                 </div>

                 <button type="button" className="w-full h-16 flex justify-center items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/20 active:scale-95 active:shadow-inner group">
                   AUTHENTICATE & UPLOAD <CheckCircle size={24} className="group-hover:rotate-12 transition-transform" />
                 </button>
              </form>
            </div>

            {/* Ingestion History - Right Column */}
            <div className="glass-panel p-10 rounded-[40px] flex flex-col hover:shadow-2xl transition-all duration-700 bg-white/40 dark:bg-slate-900/40 border-white/40 dark:border-white/10 shadow-xl overflow-hidden">
              <div className="flex justify-between items-center mb-8 border-b border-white/20 dark:border-slate-800 pb-6">
                <h3 className="font-bold text-2xl text-slate-800 dark:text-slate-100 flex items-center gap-4 uppercase">
                   <Database className="text-blue-500" /> System Logs
                </h3>
              </div>
              
              <div className="flex-1 space-y-4 overflow-y-auto max-h-[500px] pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                 {[1, 2, 3, 4, 5].map((item) => (
                   <div key={item} className="group flex justify-between items-center p-6 bg-white/40 dark:bg-slate-800/40 rounded-3xl hover:bg-primary-500/5 dark:hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-100 dark:hover:border-primary-900/50 cursor-default">
                     <div className="flex items-center gap-5">
                       <div className="p-4 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-2xl">
                         <FileText size={24} />
                       </div>
                       <div>
                         <p className="font-black text-slate-800 dark:text-slate-100 text-lg">PATIENT: ALEX</p>
                         <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">MRI_SCAN_772.PDF • ASSIGNED TO DR. SMITH</p>
                       </div>
                     </div>
                     <div className="flex flex-col items-end">
                       <span className="text-[10px] font-black px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg border border-emerald-500/20 uppercase">Encrypted</span>
                       <p className="text-[10px] text-slate-400 mt-2 font-bold font-mono uppercase tracking-tighter">SUCCESS • 2:1{item} PM</p>
                     </div>
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
