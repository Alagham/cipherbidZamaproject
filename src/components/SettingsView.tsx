"use client";
import { useEffect } from 'react';
import { Moon, Sun, Wallet, FileText, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/contexts/ThemeContext';
import { useWallet } from '@/contexts/WalletContext';

export function SettingsView() {
  const { theme, toggleTheme } = useTheme();
  const { isConnected, address, disconnect } = useWallet();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Settings</h1>
        <p className="text-lg text-muted-foreground mt-1">
          Manage your preferences and account settings
        </p>
      </div>

      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-xl font-display text-foreground">
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
              <div>
                <Label htmlFor="theme-toggle" className="text-foreground font-medium">
                  Dark Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  Toggle between light and dark themes
                </p>
              </div>
            </div>
            <Switch
              id="theme-toggle"
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-xl font-display text-foreground">
            Wallet Connection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Wallet className="w-5 h-5 text-primary mt-0.5" />
            <div className="flex-1">
              <Label className="text-foreground font-medium">Connected Wallet</Label>
              {isConnected ? (
                <div className="mt-2 space-y-3">
                  <p className="text-sm font-mono text-muted-foreground break-all">
                    {address}
                  </p>
                  <button
                    onClick={disconnect}
                    className="text-sm text-destructive hover:underline"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-2">
                  No wallet connected
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-xl font-display text-foreground">
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <Label className="text-foreground font-medium">FHE Encryption</Label>
              <p className="text-sm text-muted-foreground mt-2">
                All your bids are automatically encrypted using Fully Homomorphic Encryption 
                (FHE) technology. Your bid amounts remain private until auction conclusion.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <Label className="text-foreground font-medium">Documentation</Label>
              <p className="text-sm text-muted-foreground mt-2">
                Learn more about how CipherBid protects your privacy and ensures fair auctions.
              </p>
              <a
                href="/docs"
                className="text-sm text-primary hover:underline mt-2 inline-block"
              >
                View Documentation
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
