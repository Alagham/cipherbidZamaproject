"use client";
import { useEffect } from 'react';
import { Book, Lock, Shield, Code, Zap, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function DocsView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Documentation</h1>
        <p className="text-lg text-muted-foreground mt-1">
          Learn how to use CipherBid and understand FHE technology
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-muted text-muted-foreground">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Book className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="fhe" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Lock className="w-4 h-4 mr-2" />
            FHE Technology
          </TabsTrigger>
          <TabsTrigger value="guide" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <FileText className="w-4 h-4 mr-2" />
            User Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-xl font-display text-foreground">
                What is CipherBid?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                CipherBid is a revolutionary auction platform that uses Fully Homomorphic 
                Encryption (FHE) to ensure complete bid privacy. Unlike traditional auctions 
                where bids might be visible or vulnerable to manipulation, CipherBid encrypts 
                all bid data on-chain.
              </p>
              <p>
                This means that your bid amount remains completely private until the auction 
                concludes, ensuring fair competition and preventing bid manipulation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-xl font-display text-foreground">
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Complete Bid Privacy
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All bids are encrypted using FHE technology, ensuring no one can see 
                      your bid amount until the auction ends.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Tamper-Proof Results
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Smart contracts ensure auction results cannot be manipulated or altered 
                      after submission.
                    </p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Real-Time Updates
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Track auction activity and participant counts in real-time while 
                      maintaining bid privacy.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fhe" className="mt-6 space-y-6">
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-xl font-display text-foreground">
                Understanding FHE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                Fully Homomorphic Encryption (FHE) is a form of encryption that allows 
                computations to be performed on encrypted data without decrypting it first. 
                This revolutionary technology enables CipherBid to process and compare bids 
                while keeping all bid amounts completely private.
              </p>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">How it works:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>You submit a bid, which is encrypted on your device</li>
                  <li>The encrypted bid is stored on the blockchain</li>
                  <li>Smart contracts can compare encrypted bids without decrypting them</li>
                  <li>When the auction ends, results are revealed through decryption</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-xl font-display text-foreground">
                FHEVM Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                CipherBid uses FHEVM (Fully Homomorphic Encryption Virtual Machine) to enable 
                encrypted smart contract execution. This ensures that all auction logic runs 
                on encrypted data, providing unprecedented privacy guarantees.
              </p>
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">
                    All cryptographic operations are handled automatically by the platform. 
                    You don't need to understand the technical details to benefit from 
                    complete bid privacy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guide" className="mt-6 space-y-6">
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-xl font-display text-foreground">
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">1. Connect Your Wallet</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Click the "Connect Wallet" button in the top right corner and select your 
                  preferred wallet provider (MetaMask, WalletConnect, or Coinbase Wallet).
                </p>
              </div>

              <Separator className="bg-border" />

              <div>
                <h3 className="font-semibold text-foreground mb-3">2. Browse Auctions</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Navigate to the Auctions page to see all available auctions. You can view 
                  details like participant count, time remaining, and minimum bid requirements.
                </p>
              </div>

              <Separator className="bg-border" />

              <div>
                <h3 className="font-semibold text-foreground mb-3">3. Place a Bid</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Click on an auction to view its details, then click "Submit Encrypted Bid". 
                  Enter your bid amount (must meet minimum requirements) and confirm. Your bid 
                  will be automatically encrypted before submission.
                </p>
              </div>

              <Separator className="bg-border" />

              <div>
                <h3 className="font-semibold text-foreground mb-3">4. Track Your Bids</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Monitor auction activity in real-time. You'll be notified when the auction 
                  ends and results are revealed.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-xl font-display text-foreground">
                Creating an Auction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                To create your own encrypted auction, navigate to the "Create Auction" page 
                and fill in the required details:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Auction title and description</li>
                <li>Start and end times</li>
                <li>Minimum bid amount</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Once created, your auction will be visible to all users, and bids will be 
                automatically encrypted using FHE technology.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
