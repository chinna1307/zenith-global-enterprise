import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zenith Global Pvt Ltd',
  description: 'Future-Proof Your Digital Vision',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col relative bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-purple-200 selection:text-purple-900`}>
        
        {/* Unified Purple & Cyan Background Blurs */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/50 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/60 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-indigo-100/50 rounded-full blur-[100px]" />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
