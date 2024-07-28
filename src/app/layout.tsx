import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { setDefaultOptions } from "date-fns";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Woodstock planner",
  description:
    "Pick interesting events and make sure they don't collide with one another",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const monday = 1;
setDefaultOptions({ weekStartsOn: monday });
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
