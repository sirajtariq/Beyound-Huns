import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
