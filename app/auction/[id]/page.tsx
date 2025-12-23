"use client";

import { notFound, useParams } from "next/navigation";
import { AuctionDetailView } from "@/components/AuctionDetailView";

export default function AuctionPage() {
  const params = useParams();

  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  if (!id || typeof id !== "string") {
    notFound();
  }

  return <AuctionDetailView id={id} />;
}
