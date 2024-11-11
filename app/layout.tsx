import type { Metadata } from "next";
import { inter, lexend, poppins, roboto } from "@/styles/fonts/fonts";
import "@/styles/globals.css"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hirehub",
  description: "HireHub is a platform for hiring and job searching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
					"min-h-screen bg-background font-inter antialiased",
					inter.variable,
          lexend.variable,
          poppins.variable,
          roboto.variable,
				)}
      >
        {children}
      </body>
    </html>
  );
}
