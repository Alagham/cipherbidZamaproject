"use client";

import { ReactNode, useState } from "react";
import { SidebarNav } from "../components/SidebarNav";
import { TopHeader } from "../components/TopHeader";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <SidebarNav
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <TopHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-8 bg-white rounded-t-3xl shadow-inner">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>

        {/* Footer (optional aesthetic polish) */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
          © {new Date().getFullYear()} CipherBid. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
