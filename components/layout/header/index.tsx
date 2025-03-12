'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import Logo from '@/assets/icons/logo.png';
import './styles.css'

function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="header">
            <Link href="/" className="header__logo">
                <div className="header__logo-container">
                    <Image className=" w-40" src={Logo} alt="logo" width='0' height='0' priority />
                </div>
            </Link>
            <DesktopNavigation isActive={isActive} setIsMenuOpen={setIsMenuOpen} />
            <div className="header__mobile-menu">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="header__mobile-menu-btn"
                >
                    Menu

                </button>
            </div>
            {isMenuOpen && (
                <MobileNavigation isActive={isActive} setIsMenuOpen={setIsMenuOpen} />
            )}
        </header>
    )
}

interface NavigationProps {
    isActive: (href: string) => boolean;
    setIsMenuOpen: (arg: boolean) => void;
}
function DesktopNavigation({ isActive, setIsMenuOpen }: NavigationProps) {
    return (
        <nav className="header__nav" aria-label="Main Navigation">
            <ul className="header__nav-items">
                {[{ label: "Home", link: '' }, { label: "Articles", link: 'blog' }, { label: "Projects", link: "projects" }, { label: "Uses", link: "uses" }].map((item) => {
                    const link = `/${item.link}` as string;
                    return (
                        <li key={link}>
                            <Link
                                href={link}
                                className={`header__mobile-nav-link ${isActive(link) ? "header__nav-link--active" : ""
                                    }`}
                                aria-label={item.label}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export function MobileNavigation({ isActive, setIsMenuOpen }: NavigationProps) {
    return (
        <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-items">
                {[{ label: "Home", link: '' }, { label: "Articles", link: 'blog' }, { label: "Projects", link: "projects" }, { label: "Uses", link: "uses" }].map((item) => {
                    const link = `/${item.link}` as string;
                    return (
                        <li key={link}>
                            <Link
                                href={link}
                                className={`header__mobile-nav-link ${isActive(link) ? "header__nav-link--active" : ""
                                    }`}
                                aria-label={item.label}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}


export default Header;