import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'CipherBid',
  description: 'Encrypted On-chain Auction built with Zama FHEVM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
