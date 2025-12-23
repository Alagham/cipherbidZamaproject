"use client";

import { useEffect } from "react";
import { useAuction } from "@/contexts/AuctionContext";
import { AuctionCard } from "./AuctionCard";
import { LoadingState } from "@/components/LoadingState";

export function AuctionListView() {
  const { auctions, loading } = useAuction();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <LoadingState message="Loading encrypted auctions..." />;
  }

  return (
    <div className="space-y-10 text-white">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-3">
          Encrypted Auctions
        </h1>
        <p className="text-gray-400 text-lg">
          Browse active and completed FHE-powered auctions with complete bid privacy
        </p>
      </div>

      {/* Auction Grid */}
      {auctions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No auctions available at the moment
          </p>
        </div>
      )}
    </div>
  );
}
