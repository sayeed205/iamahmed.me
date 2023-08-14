'use client';

import { Turn as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { ModeToggle } from '../mode-toggle';
import { buttonVariants } from './button';

const navItem = [
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
];

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    return (
        <header className="sticky top-0 z-30 h-28 bg-background">
            <div className="container flex items-center justify-between h-24 px-24 py-8">
                <Link href="/" aria-label='home'>
                    <Icons.home />
                </Link>

                <nav className="hidden gap-2 md:flex md:flex-row">
                    <ModeToggle />
                    <div className="flex flex-row gap-2">
                        {navItem.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'hover:text-foreground/80 flex items-center transition-colors',
                                    buttonVariants({
                                        variant: 'ghost',
                                        font: 'xl',
                                    }),
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>

                <div
                    className={`fixed inset-0 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md backdrop-blur duration-75 animate-in slide-in-from-bottom-80 md:hidden md:backdrop-blur-none ${showMobileMenu ? 'top-16' : 'top-[calc(100vh+4rem)]'
                        }`}
                >
                    {navItem.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                `flex items-center transition-colors hover:bg-transparent`,
                                buttonVariants({
                                    variant: 'link',
                                    font: 'xl',
                                }),
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex md:hidden">
                    <ModeToggle />
                    <Hamburger
                        onToggle={(toggle) => setShowMobileMenu(toggle)}
                        size={24}
                        rounded
                        label="Show menu"
                        hideOutline
                        duration={0.4}
                    />
                </div>
            </div>
        </header>
    );
}
