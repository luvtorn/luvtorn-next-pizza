import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Luvtorn Pizza",
  description:
    "Luvtorn Pizza - the best pizzeria in Poland, offers a wide variety of delicious pizzas, salads, soups, and desserts. Order online or visit us at our restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
