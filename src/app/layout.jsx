import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Budapest Hotel Service",
  description: "Luxury stays in Budapest’s most charming neighborhoods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
