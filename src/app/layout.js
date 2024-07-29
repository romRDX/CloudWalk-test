import React from 'react';
import "./globals.css";
import Header from "@/layout/Header";
import AppProvider from "@/hooks";
import QueryProvider from '@/services/ReactQuery';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          <QueryProvider>
            <AppProvider>
              {children}
            </AppProvider>
          </QueryProvider>
        </main>
        
      </body>
    </html>
  );
}
