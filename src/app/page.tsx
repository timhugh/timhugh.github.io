"use client";

import React, { ReactNode, useEffect } from "react";
import Header from "./header";

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
			<Header/>
      <div className="font-light text-md md:text-lg leading-6 text-center md:text-left">
        <p className="pb-2">Hi, I&apos;m Tim.</p>
        <p className="pb-2">I live in Seattle, WA.</p>
        <p>I&apos;m a <TextLink href="//github.com/timhugh">web developer</TextLink> and a <TextLink href="//instagram.com/timhugh">photographer</TextLink>.</p>
      </div>
    </div>
  );
}
