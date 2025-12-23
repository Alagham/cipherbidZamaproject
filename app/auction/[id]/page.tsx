'use client';

export const dynamic = 'force-dynamic'; // <--- Add this line

import { AuctionDetailView } from '@/components/AuctionDetailView';
import { useParams } from 'next/navigation';

export default function AuctionPage() {
  const params = useParams();

  if (!params?.id) return <div className="text-center py-20">Invalid auction ID</div>;

  return <AuctionDetailView id={params.id} />;
}
