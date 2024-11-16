import UpdateUser from "@/app/components/UpdateUser";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <UpdateUser id={params.slug} />;
}
