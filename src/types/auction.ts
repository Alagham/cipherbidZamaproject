export type AuctionStatus = 'open' | 'closed' | 'pending';

export interface Auction {
  id: string;
  title: string;
  description: string;
  status: AuctionStatus;
  participants: number;
  bidsCount: number;
  timeLeft: string;
  startTime: string;
  endTime: string;
  minBid: number;
}
