import Link from "next/link";

const NavLink = ({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel?: string }) => (
    <Link
      href={href}
      className="hidden md:block transform md:-rotate-90 hover:text-purple-400 font-bold cursor-pointer"
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );

export default NavLink;