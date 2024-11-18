import TrainerClass from "@/app/components/TrainerClass";
import { decodeUserCookie } from "@/app/lib/actions/cookies";
import React from "react";

export default async function pages() {
  const user = (await decodeUserCookie("accessToken")) || null;
  return <div>{user ? <TrainerClass id={user._id} /> : <></>}</div>;
}
