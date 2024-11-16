import UpdateTrainer from "@/app/components/fromComponent/UpdateTrainer";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  console.log(params.slug, "check params");
  return <UpdateTrainer id={params.slug} />;
}
