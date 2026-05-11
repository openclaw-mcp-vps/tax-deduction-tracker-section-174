import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Section 174 Tax Deduction Tracker",
  description: "Automatically categorize and track software development expenses to maximize tax deductions under Section 174 rules."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="952986ed-6598-4893-ace5-ff874a32d512"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
