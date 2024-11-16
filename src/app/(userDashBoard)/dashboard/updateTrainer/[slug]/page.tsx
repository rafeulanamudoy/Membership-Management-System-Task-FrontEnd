import UpdateTrainer from "@/app/components/fromComponent/UpdateTrainer";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <UpdateTrainer id={params.slug} />;
}
