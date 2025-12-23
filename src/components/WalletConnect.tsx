"use client";

import { useState } from "react";
import { Wallet, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/contexts/WalletContext";
import { WalletModal } from "@/components/WalletModal";

export function WalletConnect() {
  const { isConnected, address, disconnect } = useWallet();
  const [showModal, setShowModal] = useState(false);

  const formatAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  /* -------------------------------
     NOT CONNECTED STATE
  -------------------------------- */
  if (!isConnected) {
    return (
      <>
        <Button
          onClick={() => setShowModal(true)}
          className="
            bg-yellow-400 text-black font-semibold
            hover:bg-yellow-500
            transition-colors
          "
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>

        <WalletModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    );
  }

  /* -------------------------------
     CONNECTED STATE
  -------------------------------- */
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="
            bg-black text-white border border-yellow-400/40
            hover:border-yellow-400 hover:bg-black
            transition-colors
          "
        >
          <Wallet className="w-4 h-4 mr-2 text-yellow-400" />
          <span className="font-mono text-sm">
            {formatAddress(address)}
          </span>
          <ChevronDown className="w-4 h-4 ml-2 text-yellow-400" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          bg-black text-white
          border border-yellow-400/40
          shadow-xl
        "
      >
        <DropdownMenuItem
          onClick={disconnect}
          className="
            cursor-pointer
            hover:bg-yellow-400 hover:text-black
            transition-colors
          "
        >
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
