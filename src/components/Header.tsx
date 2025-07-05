'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex items-center justify-between h-[80px] px-10 bg-black z-10  font-semibold w-full">
            <a
                href="https://www.atzinescandia.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-all duration-300 text-3xl"
            >
                <Image
                    src="https://cdn.jsdelivr.net/gh/atzin-escandia/video-assets/logo-atzin-white.svg"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="w-[100px] md:w-[120px] z-10 relative"
                />
            </a>

            <nav className="flex gap-6">
                {ROUTES.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`transition-colors duration-300 text-lg ${pathname === href ? 'text-white font-bold underline' : 'text-white/50 hover:text-white'}`}
                    >
                        {label}
                    </Link>
                ))}
                <a
                    href="https://github.com/atzin-escandia/atzin-transition-waves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 text-lg text-white/50 hover:text-white"
                >
                    Github
                </a>
            </nav>

        </header>
    );
}
