"use client";

import React from "react";
import { Mail, Instagram, Linkedin, GitHub } from "react-feather";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socials = [
	{ href: "//github.com/timhugh", icon: <GitHub size={16} /> },
	{ href: "//linkedin.com/in/timheuett", icon: <Linkedin size={16} /> },
	{ href: "//instagram.com/timhugh", icon: <Instagram size={16} /> },
	{ href: "mailto:info@timheuett.com", icon: <Mail size={16} /> },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="border-b pt-10 pb-10">
			<div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
				<div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
					<h1 className="text-4xl uppercase text-center font-sans">
						<Link className="no-style" href="/">
							Tim Heuett
						</Link>
					</h1>
					<nav className="text-2xl">
						<ul className="list-none flex flex-col lg:flex-row items-center gap-6 lg:gap-14 font-serif">
							<li>
								{pathname === "/" ? (
									<span className="text-gray-500">About</span>
								) : (
									<Link href="/">About</Link>
								)}
							</li>
							<li>
								{pathname === "/blog" ? (
									<span className="text-gray-500">Blog</span>
								) : (
									<Link href="/blog">Blog</Link>
								)}
							</li>
							<li>
								{pathname === "/photos" ? (
									<span className="text-gray-500">
										Photos
									</span>
								) : (
									<Link href="/photos">Photos</Link>
								)}
							</li>
						</ul>
					</nav>
				</div>
				<ul className="list-none flex flex-row items-center gap-2 md:mr-1">
					{socials.map(({ href, icon }, index) => (
						<li
							key={index}
							className="text-background bg-foreground hover:bg-primary p-1.5 rounded-full"
						>
							<a href={href} className="hover:text-background">
								{icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
