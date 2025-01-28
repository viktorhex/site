import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher",
  description: "my personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-full pb-50 ${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <div className="relative min-h-screen">
          {children}
          <footer style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "absolute",
            height: "50px",
            bottom: "0px",
            left: "0px",
            right: "0px",
          }}>
            <div className="row w-full text-center">
              This website was made with maximum effort.
            </div>
            <div className="row w-full text-center">
              <a style={{ fontWeight: 900 }} href="https://www.paypal.com/donate/?business=PZ2E9EF3KZ72C&no_recurring=0&item_name=Pay+for+my+coffee&currency_code=USD" target="_blank" rel="noopener noreferrer">&gt;Buy me a coffee&lt;</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
