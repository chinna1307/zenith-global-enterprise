'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight text-slate-900">
            <span className="text-purple-600">Z</span>enith <span className="text-blue-500">Global</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`hover:text-purple-600 transition-colors ${pathname === link.path ? 'text-purple-600 font-semibold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="hidden md:inline-flex bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-0.5">
          Partner With Us
        </Link>
      </div>
    </nav>
  );
}
