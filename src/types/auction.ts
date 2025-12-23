export interface Auction {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed' | 'pending' | 'cancelled';
  participants: number;
  bidsCount: number;
  timeLeft: string;
  startTime: string;
  endTime: string;
  minBid: number;
}
