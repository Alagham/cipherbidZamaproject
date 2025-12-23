'use client';

import { Clock, Users, Lock, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Auction } from '@/types/auction';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface AuctionCardProps {
  auction: Auction;
}

export function AuctionCard({ auction }: AuctionCardProps) {
  const router = useRouter();

  const getStatusIcon = () => {
    if (auction.status === 'open') return <Lock className="w-4 h-4" />;
    if (auction.status === 'closed') return <CheckCircle className="w-4 h-4" />;
    return <XCircle className="w-4 h-4" />;
  };

  const getStatusColor = () => {
    if (auction.status === 'open') return 'bg-success text-success-foreground';
    if (auction.status === 'closed') return 'bg-muted text-muted-foreground';
    return 'bg-destructive text-destructive-foreground';
  };

  return (
    <Card
      className="bg-card text-card-foreground border-border hover:border-primary/50 transition-colors duration-120 ease-in cursor-pointer group"
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3 mb-3">
          <CardTitle
            className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-120 ease-in"
          >
            {auction.title}
          </CardTitle>
          <Badge className={cn('flex items-center gap-1.5', getStatusColor())}>
            {getStatusIcon()}
            <span className="capitalize">{auction.status}</span>
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {auction.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{auction.participants} participants</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>{auction.bidsCount} bids</span>
          </div>
        </div>

        {auction.status === 'open' && (
          <div className="flex items-center gap-2 text-sm text-warning">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{auction.timeLeft}</span>
          </div>
        )}

        <div className="pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="w-3 h-3" />
            <span>Fully encrypted with FHEVM</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => router.push(`/auction/${auction.id}`)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          View Auction
        </Button>
      </CardFooter>
    </Card>
  );
}
