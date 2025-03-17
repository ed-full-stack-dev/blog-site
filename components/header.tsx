"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md max-w-[1600px] m-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-auto h-10 md:h-16">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={200}
            height={60}
            priority
            className="object-contain h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav aria-label="Main Navigation" className="flex space-x-6">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={` ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={` ${isActive("/blog")
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
                }`}
              aria-label="Blogs"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={` ${isActive("/portfolio")
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
                }`}
              aria-label="Portfolio"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
