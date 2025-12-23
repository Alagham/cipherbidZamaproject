'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  PlusCircle,
  FileText,
  Settings,
  X,
  Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { WalletConnect } from '@/components/WalletConnect';
import { cn } from '@/lib/utils';

interface SidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { path: '/', label: 'Auctions', icon: Home },
  { path: '/create', label: 'Create Auction', icon: PlusCircle },
  { path: '/docs', label: 'Docs', icon: FileText },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function SidebarNav({ isOpen, onClose }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          'fixed left-0 top-0 lg:top-16 bottom-0 w-64 z-50 flex flex-col justify-between',
          'bg-black text-white border-r border-yellow-400/20 shadow-xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Header section */}
        <div className="flex flex-col">
          {/* Mobile close button */}
          <div className="flex items-center justify-between p-5 lg:hidden">
            <Button
              onClick={onClose}
              className="bg-transparent text-white hover:bg-white/10"
              size="icon"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* CipherBid branding */}
          <div className="flex items-center gap-3 px-6 py-4">
            <div className="w-10 h-10 bg-[#FFD208] rounded-xl flex items-center justify-center shadow-md">
              <Lock className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">
              CipherBid
            </h1>
          </div>

          <Separator className="bg-white/10" />

          {/* Navigation items */}
          <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200',
                    'hover:bg-yellow-500 hover:text-black',
                    isActive
                      ? 'bg-[#FFD208] text-black shadow-md'
                      : 'text-gray-200'
                  )}
                >
                  <Icon
                    className={cn(
                      'w-5 h-5 transition-transform duration-200',
                      isActive ? 'scale-110' : 'opacity-80'
                    )}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* WalletConnect (bottom section) */}
        <div className="border-t border-white/10 px-4 py-5">
          <WalletConnect />
          <p className="text-xs text-gray-400 mt-3 text-center">
            Privacy powered by FHE • CipherBid © {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </>
  );
}
