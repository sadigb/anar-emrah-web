'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  lang: string;
  dict: any;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLang: string) => {
    const segments = pathname.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/haqqimda`, label: dict.nav.about },
    { href: `/${lang}/xidmetler`, label: dict.nav.services },
    { href: `/${lang}/media`, label: dict.nav.media },
    { href: `/${lang}/elmi-fealiyyet`, label: dict.nav.science },
    { href: `/${lang}/pasiyent-reyleri`, label: dict.nav.reviews },
    { href: `/${lang}/qalereya`, label: dict.nav.gallery },
    { href: `/${lang}/suallar`, label: dict.nav.faq },
    { href: `/${lang}/meqaleler`, label: dict.nav.articles },
    { href: `/${lang}/elaqe`, label: dict.nav.contact },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="text-xl font-bold text-blue-900">
          Dr. Anar Əmrah
        </Link>

        <nav className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-2 border-l pl-4">
          {['az', 'en', 'ru'].map((l) => (
            <button
              key={l}
              onClick={() => changeLanguage(l)}
              className={`px-2 py-1 text-xs font-bold rounded uppercase ${
                lang === l ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}