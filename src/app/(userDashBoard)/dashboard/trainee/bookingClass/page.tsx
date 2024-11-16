import BookClass from "@/app/components/BookClass";
import { decodeUserCookie } from "@/app/lib/actions/cookies";
import React from "react";

export default async function page() {
  const user = (await decodeUserCookie("accessToken")) || null;
  return <div>{user ? <BookClass traineeId={user?._id} /> : <></>}</div>;
}
