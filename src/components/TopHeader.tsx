'use client';

import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BuilderTrackInfo } from './BuilderTrackInfo';
import { ThemeToggler } from './ThemeToggler';
import { WalletConnect } from '../components/WalletConnect';

interface TopHeaderProps {
  onMenuClick: () => void;
}

export function TopHeader({ onMenuClick }: TopHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-yellow-500/30 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Left side: menu + tracking info */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <Button
            onClick={onMenuClick}
            className="lg:hidden bg-transparent text-[#FFD208] hover:bg-[#FFD208]/10 hover:text-white transition-all duration-200"
            size="icon"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Builder Info (hidden on mobile) */}
          <div className="hidden lg:block flex-1">
            <BuilderTrackInfo />
          </div>
        </div>

        {/* Right side: actions */}
        <div className="flex items-center gap-4">
          {/* Notification Button */}
          <Button
            className="bg-transparent text-gray-300 hover:bg-[#FFD208]/10 hover:text-[#FFD208] transition-all duration-200"
            size="icon"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </Button>

          {/* Theme Switch */}
          <ThemeToggler />

          {/* Wallet Connection (hidden on small screens) */}
          <div className="hidden md:block">
            <WalletConnect />
          </div>
        </div>
      </div>

      {/* Mobile-only builder info (below header) */}
      <div className="lg:hidden border-t border-yellow-500/20 bg-black/80">
        <BuilderTrackInfo />
      </div>
    </header>
  );
}
