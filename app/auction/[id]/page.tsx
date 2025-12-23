"use client";

import { notFound, useParams } from "next/navigation";
import { AuctionDetailView } from "@/components/AuctionDetailView";

export default function AuctionPage() {
  const params = useParams();

  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : null;

  if (!id) {
    notFound();
  }

  return <AuctionDetailView id={id} />;
}
