import UpdateUser from "@/app/components/UpdateUser";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  console.log(params.slug, "check params");
  return <UpdateUser id={params.slug} />;
}
