'use client';

import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/icons';

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn(
                        'rounded-3xl border-none border-transparent hover:bg-border hover:text-primary focus:ring-transparent focus:ring-offset-0 ',
                    )}
                >
                    <Icons.sun
                        className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
                        size={'2em'}
                    />
                    <Icons.moon
                        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
                        size={'2em'}
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Icons.sun className="w-4 h-4 mr-2" size={'2em'} />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Icons.moon className="w-4 h-4 mr-2" size={'2em'} />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Icons.system className="w-4 h-4 mr-2" size={'2em'} />
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
