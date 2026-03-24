import PageWrapper from "@/components/PageWrapper";
import { UploadCloud, FileText, CheckCircle, Search } from "lucide-react";

export default function LabTechDashboard() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background p-6 md:p-12 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6 relative z-10">
          <div>
            <h1 className="text-4xl font-light tracking-tight">Lab Tech <span className="font-semibold text-primary-600 dark:text-primary-500">Dashboard</span></h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Upload reports and assign to patients.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          
          {/* Upload Form */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-2xl text-slate-800 dark:text-slate-100 flex items-center gap-3">
                 <UploadCloud className="text-primary-500" /> Upload New Report
              </h3>
            </div>
            
            <form className="space-y-6">
               <div className="p-8 border-2 border-dashed border-primary-200 dark:border-primary-900/50 rounded-2xl bg-white/40 dark:bg-slate-800/40 text-center hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors cursor-pointer group">
                 <UploadCloud size={48} className="mx-auto text-primary-400 group-hover:text-primary-500 group-hover:-translate-y-1 transition-all mb-4" />
                 <p className="text-slate-600 dark:text-slate-300 font-medium">Drag & Drop PDF here</p>
                 <p className="text-sm text-slate-400 mt-1">or click to browse from device</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 pointer-events-none">Patient</label>
                   <select className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none transition-all">
                      <option>Select Patient...</option>
                      <option>Alex</option>
                      <option>Sarah Jenkins</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 pointer-events-none">Assigned Doctor</label>
                   <select className="w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none transition-all">
                      <option>Select Doctor...</option>
                      <option>Dr. Smith</option>
                      <option>Dr. Sarah Jenkins</option>
                   </select>
                 </div>
               </div>

               <button type="button" className="w-full flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-2xl font-medium transition-all hover:shadow-lg mt-4">
                 <CheckCircle size={20} /> Upload & Assign Report
               </button>
            </form>
          </div>

          {/* Recent Uploads Feed */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-2xl text-slate-800 dark:text-slate-100 flex items-center gap-3">
                 <FileText className="text-blue-500" /> Recent Uploads
              </h3>
            </div>
            
            <div className="space-y-4">
               {/* Upload Item */}
               <div className="group flex justify-between items-center p-4 bg-white/40 dark:bg-slate-800/40 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                     <FileText size={20} />
                   </div>
                   <div>
                     <p className="font-semibold text-slate-800 dark:text-slate-200">Patient: Alex</p>
                     <p className="text-xs text-slate-500 font-medium">Blood Panel PDF • Dr. Sarah Jenkins</p>
                   </div>
                 </div>
                 <span className="text-xs font-semibold px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">Success</span>
               </div>
               
               {/* Upload Item */}
               <div className="group flex justify-between items-center p-4 bg-white/40 dark:bg-slate-800/40 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                     <FileText size={20} />
                   </div>
                   <div>
                     <p className="font-semibold text-slate-800 dark:text-slate-200">Patient: Sarah Jenkins</p>
                     <p className="text-xs text-slate-500 font-medium">MRI Scan PDF • Dr. Smith</p>
                   </div>
                 </div>
                 <span className="text-xs font-semibold px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">Success</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
