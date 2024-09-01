"use client";

import { AppTitle } from "./app-title";
import { Navbar } from "./navbar";

export const ClientRootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex h-[100dvh] flex-col items-stretch justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4 py-4 text-white">
      <AppTitle />
      <div className="flex h-[70dvh] flex-col">{children}</div>
      <Navbar />
    </main>
  );
};
