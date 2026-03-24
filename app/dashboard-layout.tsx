import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto md:pl-72 focus:outline-none scroll-smooth">
        {children}
      </main>
    </div>
  );
}
