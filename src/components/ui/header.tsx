import { Link, useLocation } from "@tanstack/react-router";
import { Turn as Hamburger } from "hamburger-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItem = [
  { name: "Home", href: "/", target: "_self" },
  { name: "Projects", href: "/projects", target: "_self" },
  { name: "Skills", href: "/skills", target: "_self" },
  { name: "Contact", href: "/contact", target: "_self" },
  { name: "Resume", href: "/resume", target: "_blank" },
] as const;

export default function Header() {
  const pathname =
    useLocation({ select: (location) => location.pathname }) || "/";
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  useEffect(() => {
    if (!showMobileMenu) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="flex h-24 items-center justify-between bg-background/50 px-10 backdrop-blur-lg backdrop-filter transition duration-500 ease-in-out md:px-44">
          <Link to="/" aria-label="home">
            <Icons.home size="2em" />
          </Link>

          <nav className="hidden gap-2 md:flex md:flex-row">
            <ModeToggle />
            <div className="relative flex w-full justify-start gap-2 rounded-lg">
              {navItem.map(({ name, href, target }) => {
                const isActive = href === pathname;

                return (
                  <Link
                    key={name}
                    to={href}
                    target={target}
                    className={cn(
                      "relative rounded-md px-4 py-2 text-sm no-underline duration-300 ease-in lg:text-base",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                    data-active={isActive}
                    onMouseOver={() => setHoveredPath(href)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                  >
                    <span>{name}</span>
                    {href === hoveredPath && (
                      <motion.div
                        className="absolute bottom-0 left-0 -z-10 h-full rounded-md bg-blue-600/80"
                        layoutId="navbar"
                        aria-hidden="true"
                        style={{ width: "100%" }}
                        transition={{
                          type: "spring",
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

          <div className="flex md:hidden">
            <ModeToggle />
            <Hamburger
              onToggle={setShowMobileMenu}
              size={24}
              rounded
              label="Show menu"
              hideOutline
              duration={0.4}
              toggled={showMobileMenu}
            />
          </div>
        </div>
      </header>
      {showMobileMenu ? (
        <nav className="fixed inset-x-0 top-24 bottom-0 z-40 flex items-center justify-center overflow-hidden bg-background/50 backdrop-blur-lg md:hidden md:backdrop-blur-none">
          <div className="flex flex-col items-center gap-4">
            {navItem.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                target={item.target}
                className={cn(
                  "flex items-center transition-all hover:bg-transparent",
                  buttonVariants({ variant: "link", font: "xl" }),
                )}
                onClick={() => setShowMobileMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </>
  );
}
