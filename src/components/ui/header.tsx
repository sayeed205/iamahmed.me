import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ModeToggle } from '../mode-toggle';
import { buttonVariants } from './button';

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className=""></div>
                <div className="flex flex-row gap-2">
                    <ModeToggle />
                    <Link
                        href="/projects"
                        className={cn(buttonVariants({ variant: 'ghost' }))}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/skills"
                        className={cn(buttonVariants({ variant: 'ghost' }))}
                    >
                        Skills
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(buttonVariants({ variant: 'ghost' }))}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume"
                        className={cn(buttonVariants({ variant: 'ghost' }))}
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </header>
    );
}
