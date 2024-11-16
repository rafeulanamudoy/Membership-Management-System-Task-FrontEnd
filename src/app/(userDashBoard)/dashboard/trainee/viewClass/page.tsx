import ViewClass from "@/app/components/ViewClass";
import { decodeUserCookie } from "@/app/lib/actions/cookies";

import React from "react";

export default async function page() {
  const user = (await decodeUserCookie("accessToken")) || null;

  return <div>{user ? <ViewClass user={user} /> : <></>}</div>;
}
