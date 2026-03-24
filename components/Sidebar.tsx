"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  FileText, 
  Activity, 
  LogOut, 
  Settings, 
  LayoutDashboard,
  Calendar
} from "lucide-react";
import { cn } from "@/utils/cn";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/patient", // This should be dynamic based on role, mocking for now
    icon: LayoutDashboard,
  },
  {
    title: "My Reports",
    href: "#",
    icon: FileText,
  },
  {
    title: "Appointments",
    href: "#",
    icon: Calendar,
  },
  {
    title: "Health Stats",
    href: "#",
    icon: Activity,
  },
  {
    title: "Settings",
    href: "#",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-screen w-72 flex-col fixed left-0 top-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border-r border-white/20 dark:border-white/5 z-50">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary-600 rounded-xl">
             <Activity className="text-white" size={24} />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">MedSync</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium",
              pathname === item.href 
                ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:text-slate-800 dark:hover:text-slate-200"
            )}
          >
            <item.icon size={20} />
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="p-6">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-all font-medium">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
