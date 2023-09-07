import "./globals.css";
import { Itim } from "next/font/google";
import { Toaster } from "react-hot-toast";

const itim = Itim({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "InkSync",
  description: "A collaborative whiteboard for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster />
      <body className={itim.className}>{children}</body>
    </html>
  );
}
