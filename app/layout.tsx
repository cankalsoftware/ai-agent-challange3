import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// on fly notifyer
import { Toaster } from "@/components/ui/sonner";
// components 
import ClientWrapper from "@/components/ClientWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Dark/ light
import { ThemeProvider } from "@/components/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MentorInAI",
  description: "Your AI Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientWrapper>
            <Header/>
              {children}  {/* page.tsx */}
              <Toaster position="bottom-center" />
            <Footer/>
          </ClientWrapper>
      </ThemeProvider>
      </body>
    </html>
  );
}
