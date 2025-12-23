"use client";
import { createContext, useContext, ReactNode } from 'react';
import { useToast as useToastPrimitive } from '@/hooks/use-toast';

type ToastType = 'success' | 'error' | 'info';

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const { toast } = useToastPrimitive();

  const showToast = (message: string, type: ToastType = 'info') => {
    toast({
      description: message,
      variant: type === 'error' ? 'destructive' : 'default',
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
