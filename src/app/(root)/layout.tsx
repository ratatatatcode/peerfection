import React from 'react';
import NavBar from '@/shared/nav-bar';
import MobileNav from '@/shared/mobile-nav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full antialiased">
      <NavBar />
      {children}
      <MobileNav />
    </div>
  );
}
