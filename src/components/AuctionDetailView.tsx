"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Users, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAuction } from "@/contexts/AuctionContext";
import { useWallet } from "@/contexts/WalletContext";

import { BidForm } from "@/components/BidForm";
import { ActivityFeed } from "@/components/ActivityFeed";
import { EncryptedStats } from "@/components/EncryptedStats";
import { cn } from "@/lib/utils";
import type { AuctionStatus } from "@/types/auction";

interface AuctionDetailViewProps {
  id: string;
}

export function AuctionDetailView({ id }: AuctionDetailViewProps) {
  const router = useRouter();
  const { getAuctionById } = useAuction();
  const { isConnected } = useWallet();

  const [mounted, setMounted] = useState(false);
  const [showBidForm, setShowBidForm] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return null;

  const auction = getAuctionById(id);

  if (!auction) {
    return (
      <div className="text-center py-20 text-white">
        <p className="text-lg mb-6">Auction not found</p>
        <Button
          onClick={() => router.push("/")}
          className="bg-yellow-400 text-black hover:bg-yellow-300"
        >
          Back to Auctions
        </Button>
      </div>
    );
  }

  // ✅ PROPERLY TYPED STATUS MAP
  const statusClasses: Record<AuctionStatus, string> = {
  open: "bg-green-600 text-white",
  pending: "bg-yellow-500 text-black",
  closed: "bg-gray-600 text-white",
  cancelled: "bg-red-600 text-white",
};


  return (
    <div className="space-y-10 text-white">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Button
          onClick={() => router.push("/")}
          size="icon"
          className="bg-transparent hover:bg-white/10"
        >
          <ArrowLeft />
        </Button>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{auction.title}</h1>

            <Badge
              className={cn(
                "capitalize flex items-center gap-1",
                statusClasses[auction.status]
              )}
            >
              <Lock className="w-4 h-4" />
              {auction.status}
            </Badge>
          </div>

          <p className="text-gray-400 text-lg">{auction.description}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          { label: "Participants", value: auction.participants, icon: Users },
          { label: "Encrypted Bids", value: auction.bidsCount, icon: Lock },
          {
            label: "Time Remaining",
            value: auction.status === "open" ? auction.timeLeft : "Ended",
            icon: Clock,
          },
        ].map(({ label, value, icon: Icon }) => (
          <Card
            key={label}
            className="bg-black border border-yellow-400/20 hover:border-yellow-400 transition"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-yellow-400" />
                {label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Details */}
      <Card className="bg-black border border-yellow-400/20">
        <CardHeader>
          <CardTitle>Auction Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <p>
              <span className="text-white">Start:</span> {auction.startTime}
            </p>
            <p>
              <span className="text-white">End:</span> {auction.endTime}
            </p>
            <p>
              <span className="text-white">Minimum Bid:</span> {auction.minBid} ETH
            </p>
            <p className="flex items-center gap-2">
              <Lock className="text-green-400 w-4 h-4" />
              Fully Encrypted (FHE)
            </p>
          </div>

          <Separator className="bg-white/10" />

          <p className="text-gray-400">
            All bids are encrypted using Fully Homomorphic Encryption. Your bid
            remains private until auction completion.
          </p>
        </CardContent>
      </Card>

      {/* Bid */}
      {auction.status === "open" && (
        <Card className="bg-black border border-yellow-400/20">
          <CardHeader>
            <CardTitle>Place Your Bid</CardTitle>
          </CardHeader>
          <CardContent>
            {isConnected ? (
              <Button
                onClick={() => setShowBidForm(true)}
                className="bg-yellow-400 text-black hover:bg-yellow-300"
              >
                <Lock className="mr-2 w-4 h-4" />
                Submit Encrypted Bid
              </Button>
            ) : (
              <p className="text-gray-400">
                Connect your wallet to place a bid
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Tabs */}
      <Tabs defaultValue="activity">
        <TabsList className="bg-black border border-yellow-400/20">
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="mt-6">
          <ActivityFeed auctionId={auction.id} />
        </TabsContent>

        <TabsContent value="stats" className="mt-6">
          <EncryptedStats auctionId={auction.id} />
        </TabsContent>
      </Tabs>

      <BidForm
        isOpen={showBidForm}
        onClose={() => setShowBidForm(false)}
        auctionId={auction.id}
        minBid={auction.minBid}
      />
    </div>
  );
}
