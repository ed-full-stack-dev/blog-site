import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { FaApple } from "react-icons/fa";

import type { Metadata } from "next";
import { homePageMetaData } from "@/utils/metadata";

export const metadata: Metadata = homePageMetaData;
interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-end space-x-5 w-full px-3">
      {links.map((link, index) => (
        <Link key={index} href={link.href} passHref>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
const NavLink = ({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel?: string }) => (
  <Link
    href={href}
    className="hidden md:block transform md:-rotate-90 hover:text-purple-400 font-bold cursor-pointer"
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);

const AboutSection = () => (
  <section className="about-section flex relative bg-violet-300 col-span-12 md:col-span-5 rounded-lg">
    {/* Header */}
    <div className="absolute bg-transparent">
      <span className="absolute top-4 left-12 font-bold">About Me</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M0,0 H200 V20 Q200,70 150,70 H0 Z" fill="white" />
      </svg>
    </div>

    {/* Content */}
    <div className="details mt-28 pb-8 md:mt-0 md:pb-0 flex flex-col flex-grow justify-center space-y-16">
      {/* Profile Image */}
      <div className="profile-image-container w-full flex justify-center mb-4">
        <Image
          src="/images/profile-bw.png"
          alt="Profile Image"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Description */}
      <div className="mx-3">
        <h1 className="text-5xl font-thin mb-2 text-white">Hi there!</h1>
        <p className="text-gray-700 text-lg leading-12 bg-transparent p-4 ">
          <span className="text-4xl font-thin">I&apos;m</span> a full-stack
          developer with a passion for building beautiful and functional
          websites. I have experience working with a variety of technologies,
          including React, Node.js, and GraphQL. I&apos;m always looking for new
          opportunities to learn and grow as a developer, so feel free to reach
          out if you&apos;d like to collaborate on a project!
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mt-6">
        <SocialLinks
          links={[
            { icon: <FaLinkedin className="text-4xl hover:text-white" />, href: "https://www.linkedin.com/in/your-profile" },
            { icon: <FaGithub className="text-4xl hover:text-white" />, href: "https://github.com/your-profile" },
            { icon: <FaInstagram className="text-4xl hover:text-white" />, href: "https://www.instagram.com/your-profile" },
          ]}
        />
      </div>
    </div>
  </section>
);
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

const Home = () => (
  <main className="min-h-screen bg-gray-300 flex">
    <div className="flex-grow bg-white rounded-lg grid grid-cols-12 gap-4 p-2">
      {/* <VerticalNav links={[
        { href: "/blog", title: "Blog" },
        { href: "/portfolio", title: "Portfolio" },
        { href: "/podcast", title: "Podcast", ariaLabel: "Podcast" },
        {href: '/', title: 'Home', ariaLabel: 'Home'} 
      ]} /> */}
      <AboutSection />

      <div className="portfolio-content col-span-12 md:col-span-7 rounded-lg    grid grid-cols-12 grid-rows-6 gap-4 justify-center">
        <div className="col-span-12 row-span-1 flex flex-col justify-center row-start-2">
          <h1 className="  font-extralight tracking-wider text-6xl md:text-9xl text-black  text-center">Portfolio</h1>
        </div>
        <div className="img col-span-8 row-span-2 p-1 row-start-3">
          <Image
            width={1920}
            height={1080}
            src="/images/flamingo.png"
            alt="Flamingo Art"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="col-span-4 row-span-2 grid grid-rows-2 gap-4 p-1 row-start-3">
          <div className="bg-teal-200 rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-4xl font-extrabold text-black">251</span>
            <span className="text-lg font-medium text-black">Projects</span>
          </div>
          <div className="bg-purple-300 rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-4xl font-extrabold text-black">156</span>
            <span className="text-lg font-medium text-black">Awards</span>
          </div>
        </div>
        <div className=" col-span-3 row-span-1 border-green-500 row-start-5 p-1">
          <div className="rounded w-full h-full bg-slate-600 flex flex-col items-center justify-center">
          <FaApple className=" text-white text-2xl" />
            <span className="text-lg font-medium text-white mt-2">Clients</span>
          </div>
        </div>
        
        <div className=" col-span-7 row-span-1  row-start-5 p-1 col-start-6">
        <div className="bg-fuchsia-400 h-full rounded-lg flex flex-col justify-center items-center p-4">
            <span className="text-4xl font-extrabold text-black">251</span>
            <span className="text-lg font-medium text-black">Blogs</span>
          </div>
          </div>
      </div>

    </div>
  </main>
);

export default Home;
