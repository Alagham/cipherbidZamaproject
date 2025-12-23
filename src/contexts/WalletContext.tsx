"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ethers } from "ethers";

interface WalletContextType {
  isConnected: boolean;
  address: string;
  connect: (walletId: string) => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState("");

  const connect = async (walletId: string) => {
    try {
      if (walletId === "metamask") {
        if (!(window as any).ethereum) {
          alert("MetaMask not detected. Please install MetaMask.");
          return;
        }

        const provider = new ethers.BrowserProvider(
          (window as any).ethereum
        );

        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();

        setAddress(walletAddress);
        return;
      }

      // Future support placeholders
      alert(`${walletId} support coming soon`);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Wallet connection failed");
    }
  };

  const disconnect = () => {
    setAddress("");
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected: !!address,
        address,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }
  return context;
}
