import NavLink from "./nav-link";

interface Link {
    href: string;
    title: string;
    ariaLabel?: string;
  }
interface VerticalNavProps {
    links: Link[];
  }
const VerticalNav = ({ links }: VerticalNavProps) => (
    <section className="vertical-nav col-span-12 md:col-span-1 flex items-center justify-center">
      <nav className="flex flex-col space-y-12 items-center justify-around flex-grow h-full">
        {links.map((link) => (
          <NavLink key={link.title} href={link.href} ariaLabel={link.ariaLabel} >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </section>
  );

export default VerticalNav;