'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Turn as Hamburger } from 'hamburger-react';

import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { ModeToggle } from '../mode-toggle';
import { buttonVariants } from './button';

const navItem = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
];

export default function Header() {
    let pathname = usePathname() || '/';

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <header className="sticky top-0 z-30 h-28 bg-background">
            <div className="container flex items-center justify-between h-24 px-24 py-8">
                <Link href="/" aria-label="home">
                    <Icons.home size={'2em'} />
                </Link>

                <nav className="hidden gap-2 md:flex md:flex-row">
                    <ModeToggle />
                    <div className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
                        {navItem.map((item) => {
                            const isActive = item.href === pathname;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in',
                                        isActive
                                            ? 'text-foreground'
                                            : 'text-muted-foreground',
                                    )}
                                    data-active={isActive}
                                    onMouseOver={() =>
                                        setHoveredPath(item.href)
                                    }
                                    onMouseLeave={() =>
                                        setHoveredPath(pathname)
                                    }
                                >
                                    <span>{item.name}</span>
                                    {item.href === hoveredPath && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-full rounded-md bg-blue-600/80 -z-10"
                                            layoutId="navbar"
                                            aria-hidden="true"
                                            style={{
                                                width: '100%',
                                            }}
                                            transition={{
                                                type: 'spring',
                                                bounce: 0.25,
                                                stiffness: 130,
                                                damping: 9,
                                                duration: 0.3,
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div
                    className={`fixed inset-0 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md backdrop-blur duration-75 animate-in slide-in-from-bottom-80 md:hidden md:backdrop-blur-none ${
                        showMobileMenu ? 'top-16' : 'top-[calc(100vh+4rem)]'
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
