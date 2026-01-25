import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Federated Resarch",
  description: "Accelerating Research.",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-icon.png",
  },
  manifest: "/icons/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
