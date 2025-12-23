import { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/contexts/ToastContext';

interface BidFormProps {
  isOpen: boolean;
  onClose: () => void;
  auctionId: string;
  minBid: number;
}

export function BidForm({ isOpen, onClose, auctionId, minBid }: BidFormProps) {
  const [bidAmount, setBidAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(bidAmount);
    if (isNaN(amount) || amount < minBid) {
      showToast(`Minimum bid is ${minBid} ETH`, 'error');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate FHE encryption and submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    showToast('Bid successfully encrypted and submitted!', 'success');
    setIsSubmitting(false);
    setBidAmount('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card text-card-foreground border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Submit Encrypted Bid
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your bid will be encrypted using FHE before submission
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="bidAmount" className="text-foreground">
              Bid Amount (ETH)
            </Label>
            <Input
              id="bidAmount"
              type="number"
              step="0.01"
              min={minBid}
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder={`Minimum ${minBid} ETH`}
              className="bg-background text-foreground border-border"
              required
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground">
              Minimum bid: {minBid} ETH
            </p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium text-foreground">
                Privacy Protection Active
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Your bid will be encrypted on-chain. No one, including the auction creator, 
              can see your bid amount until the auction concludes.
            </p>
          </div>

          {isSubmitting && (
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="shimmer-effect w-full h-2 rounded-full" />
              </div>
              <p className="text-sm text-foreground mt-2 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Encrypting bid with FHE...
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-muted text-foreground hover:bg-muted/80"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Encrypting...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Submit Bid
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
