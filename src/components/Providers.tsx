'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { WalletProvider } from '@/contexts/WalletContext';
import { AuctionProvider } from '@/contexts/AuctionContext';
import { ToastProvider } from '@/components/ToastProvider';
import { AppShell } from '@/components/AppShell';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <WalletProvider>
        <AuctionProvider>
          <ToastProvider>
            <AppShell>{children}</AppShell>
          </ToastProvider>
        </AuctionProvider>
      </WalletProvider>
    </ThemeProvider>
  );
}
