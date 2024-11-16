import Profile from "@/app/components/Profile";
import { decodeUserCookie } from "@/app/lib/actions/cookies";
import React from "react";

export default async function page() {
  const user = (await decodeUserCookie("accessToken")) || null;
  return <div>{user ? <Profile user={user} /> : <></>}</div>;
}
