import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Paper Grid | Jason's Playground",
  description: "Jason's Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-10 py-10 min-h-screen max-w-[60rem] overflow-hidden font-satoshi text-[0.92rem] leading-relaxed">
      {children}
    </main>
  );
}
