import type { Metadata } from "next";

// Components
import Navigation from "@/components/navigation";
import TrpcProvider from "@/components/trpc-client";

// Fonts
import * as FontDefinitions from "./font-definitions";

// Styles
import "assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Searchland Tech Test - Sam Thomas",
  description: "Searchland Tech Test ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontDefinitions.jakarta.variable} antialiased pb-6`}>
        <TrpcProvider>
          <Navigation />

          <main>{children}</main>
        </TrpcProvider>
      </body>
    </html>
  );
}
