"use client";

import { Wallet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/contexts/WalletContext";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wallets = [
  { name: "MetaMask", id: "metamask" },
  { name: "WalletConnect", id: "walletconnect" },
  { name: "Coinbase Wallet", id: "coinbase" },
];

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connect } = useWallet();

  const handleConnect = async (walletId: string) => {
    await connect(walletId);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          bg-black text-white
          border border-yellow-400/40
          sm:max-w-md
        "
      >
        <DialogHeader>
          <DialogTitle className="text-white">
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Choose a wallet to connect to CipherBid
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {wallets.map((wallet) => (
            <Button
              key={wallet.id}
              onClick={() => handleConnect(wallet.id)}
              className="
                w-full justify-start
                bg-black text-white
                border border-yellow-400/30
                hover:bg-yellow-400 hover:text-black
                transition-colors
              "
            >
              <Wallet className="w-5 h-5 mr-3" />
              {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}