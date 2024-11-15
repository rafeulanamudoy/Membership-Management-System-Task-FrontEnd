import type { Metadata } from "next";
import StoreProvider from "./redux/StoreProvider";
import ToastProvider from "./utilities/ToastProvider";

import "./globals.css";
export const metadata: Metadata = {
  title: "Membership Management System Task",
  description: "Membership Management System Task Project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ToastProvider>{children}</ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
