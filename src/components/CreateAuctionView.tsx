'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, Calendar, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/contexts/ToastContext';
import { useWallet } from '@/contexts/WalletContext';

export function CreateAuctionView() {
  const router = useRouter();
  const { showToast } = useToast();
  const { isConnected } = useWallet();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    minBid: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isConnected) {
      showToast('Please connect your wallet first', 'error');
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    showToast('Auction created successfully!', 'success');
    setIsSubmitting(false);
    router.push('/');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => router.push('/')}
          className="bg-transparent text-foreground hover:bg-muted"
          size="icon"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Create New Auction
          </h1>
          <p className="text-lg text-muted-foreground mt-1">
            Set up a new encrypted auction with FHE privacy
          </p>
        </div>
      </div>

      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-xl font-display text-foreground flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Auction Details
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Auction Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="startTime" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Start Time
                </Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="datetime-local"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endTime" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> End Time
                </Label>
                <Input
                  id="endTime"
                  name="endTime"
                  type="datetime-local"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="minBid" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Minimum Bid (ETH)
              </Label>
              <Input
                id="minBid"
                name="minBid"
                type="number"
                step="0.01"
                min="0"
                value={formData.minBid}
                onChange={handleChange}
                required
              />
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                This auction uses Fully Homomorphic Encryption (FHE) to keep bids
                private until the auction ends.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={() => router.push('/')}
                variant="secondary"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !isConnected}
              >
                {isSubmitting ? 'Creating...' : 'Create Auction'}
              </Button>
            </div>

            {!isConnected && (
              <p className="text-sm text-warning text-center">
                Please connect your wallet to create an auction
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
