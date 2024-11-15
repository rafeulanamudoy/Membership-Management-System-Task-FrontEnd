"use client";

import { useRef } from "react";
import { Provider as ReduxProvider } from "react-redux"; // Alias to avoid confusion
import { AppStore, makeStore } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <ReduxProvider store={storeRef.current}>{children}</ReduxProvider>;
}
