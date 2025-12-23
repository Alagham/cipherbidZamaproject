"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";
import { Auction } from "@/types/auction";

interface AuctionContextType {
  auctions: Auction[];
  loading: boolean;
  getAuctionById: (id: string) => Auction | null;
}

const AuctionContext = createContext<AuctionContextType | null>(null);

const mockAuctions: Auction[] = [
  {
    id: "1",
    title: "Rare Digital Artwork NFT",
    description:
      "Exclusive digital artwork by renowned crypto artist. Limited edition 1/1.",
    status: "open",
    participants: 15,
    bidsCount: 28,
    timeLeft: "2d 14h 32m",
    startTime: "Dec 1, 2024 10:00 AM",
    endTime: "Dec 8, 2024 10:00 AM",
    minBid: 0.5,
  },
  {
    id: "2",
    title: "Premium Domain Name",
    description:
      "Short, memorable .eth domain perfect for DeFi projects.",
    status: "open",
    participants: 23,
    bidsCount: 45,
    timeLeft: "5d 8h 15m",
    startTime: "Dec 2, 2024 2:00 PM",
    endTime: "Dec 11, 2024 2:00 PM",
    minBid: 1.0,
  },
  {
    id: "3",
    title: "Vintage Crypto Collectible",
    description:
      "Early Bitcoin memorabilia from 2011. Authenticated and verified.",
    status: "open",
    participants: 8,
    bidsCount: 12,
    timeLeft: "1d 3h 45m",
    startTime: "Dec 3, 2024 9:00 AM",
    endTime: "Dec 7, 2024 9:00 AM",
    minBid: 2.5,
  },
];

export function AuctionProvider({ children }: { children: ReactNode }) {
  const auctions = mockAuctions;
  const loading = false;

  const getAuctionById = (id: string): Auction | null => {
    if (!id) return null;

    const auction = auctions.find((a) => a.id === id);

    console.log("Looking for auction:", id, auction);

    return auction ?? null;
  };

  const value = useMemo(
    () => ({ auctions, loading, getAuctionById }),
    [auctions]
  );

  return (
    <AuctionContext.Provider value={value}>
      {children}
    </AuctionContext.Provider>
  );
}

export function useAuction() {
  const context = useContext(AuctionContext);
  if (!context) {
    throw new Error("useAuction must be used inside AuctionProvider");
  }
  return context;
}
