import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ClerkLoaded } from "@clerk/nextjs/app-beta/client";
const mulish = Mulish({ 
  subsets: ["cyrillic"],
  weight: ['400', '500', '600', '700'], 
  variable:'--font-mulish'
}); 


export const metadata: Metadata = {
  title: "Steps with a Shield",
  description: "Web-portal for everyone interested in cyber security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: "#FF3131"}
    }}>
    <html lang="en">
      <body className={cn("font-Mulish antialiased", mulish.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
