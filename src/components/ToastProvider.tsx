'use client';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { ToastProvider as ToastContextProvider } from '@/contexts/ToastContext';

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ToastContextProvider>
      {children}
      <Toaster />
    </ToastContextProvider>
  );
}
