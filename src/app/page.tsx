"use client";

import React, { ReactNode, useEffect } from "react";
import { Mail, Instagram, Linkedin, GitHub } from "react-feather";

const socials = [
  { href: "//github.com/timhugh", icon: <GitHub size={16}/> },
  { href: "//linkedin.com/in/timheuett", icon: <Linkedin size={16}/> },
  { href: "//instagram.com/timhugh", icon: <Instagram size={16}/> },
  { href: "mailto:info@timheuett.com", icon: <Mail size={16}/> },
];

const TextLink = ({href, children}: { href: string, children: ReactNode}) => (
  <a href={href} className="border-b border-b-primary pb-0.5 hover:text-primary">
    {children}
  </a>
)

export default function Home() {
  const [opacity, setOpacity] = React.useState("opacity-0");

  useEffect(() => {
    setOpacity("opacity-100");
  }, []);

  return (
    <div className={`flex flex-col md:flex-row justify-center items-center px-10 gap-16 h-screen ${opacity} transition-opacity duration-1000`}>
      <div className="flex flex-col items-center md:items-end">
        <h1 className="text-4xl font-thin uppercase mb-6 md:mb-4 text-center">Tim Heuett</h1>
        <ul className="list-none flex flex-row items-center gap-2 md:mr-1">
          {
            socials.map(({ href, icon }, index) => (
              <li key={index} className="text-background bg-foreground hover:bg-primary p-1.5 rounded-full">
                <a href={href}>
                  {icon}
                </a>
              </li>))
          }
        </ul>
      </div>
      <div className="font-light text-md md:text-lg leading-6 text-center md:text-left">
        <p className="pb-2">Hi, I&apos;m Tim.</p>
        <p className="pb-2">I live in Seattle, WA.</p>
        <p>I&apos;m a <TextLink href="//github.com/timhugh">web developer</TextLink> and a <TextLink href="//instagram.com/timhugh">photographer</TextLink>.</p>
      </div>
    </div>
  );
}
