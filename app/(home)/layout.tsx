import type { Metadata } from "next";
import "@/app/globals.css";
import MainNavbar from "@/components/_mainpage/navbar";

export const metadata: Metadata = {
  title: "Jason's Playground",
  description: "Welcome to my playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-10 py-10 min-h-screen max-w-[60rem] overflow-hidden font-satoshi text-[0.92rem] leading-relaxed">
      <MainNavbar />
      {children}
    </main>
  );
}
