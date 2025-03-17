"use client";

import React from "react";
import { Mail, Instagram, Linkedin, GitHub } from "react-feather";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SocialLink {
	label: string;
	href: string;
	icon: React.ReactNode;
}

interface NavLink {
	href: string;
	label: string;
}

const navLinks: NavLink[] = [
	{ href: "/", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/photos", label: "Photos" },
];

const socialLinks: SocialLink[] = [
	{
		label: "GitHub Profile",
		href: "//github.com/timhugh",
		icon: <GitHub aria-label="GitHub Icon" size={16} />,
	},
	{
		label: "LinkedIn Profile",
		href: "//linkedin.com/in/timheuett",
		icon: <Linkedin aria-label="LinkedIn Icon" size={16} />,
	},
	{
		label: "Instagram Profile",
		href: "//instagram.com/timhugh",
		icon: <Instagram aria-label="Instagram Icon" size={16} />,
	},
	{
		label: "Email",
		href: "mailto:info@timheuett.com",
		icon: <Mail aria-label="Email Icon" size={16} />,
	},
];

export default function Header() {
	const currentPath = usePathname();

	return (
		<header className="border-b pt-10 pb-10">
			<div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
				<div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
					<h1 className="text-4xl uppercase text-center font-sans">
						<Link className="no-style" href="/">
							Tim Heuett
						</Link>
					</h1>
					{buildNavLinks(currentPath, navLinks)}
				</div>
				<ul className="list-none flex flex-row items-center gap-2 md:mr-1">
					{buildSocialLinks(socialLinks)}
				</ul>
			</div>
		</header>
	);
}

function buildNavLinks(
	currentPath: string,
	navLinks: NavLink[],
): React.ReactNode {
	if (navLinks.length <= 1) {
		return null;
	}
	return (
		<nav className="text-2xl">
			<ul className="list-none flex flex-col lg:flex-row items-center gap-6 lg:gap-14 font-serif">
				{navLinks.map((link) => buildNavLink(currentPath, link))}
			</ul>
		</nav>
	);
}

function buildSocialLinks(socialLinks: SocialLink[]): React.ReactNode {
	return socialLinks.map(({ label, href, icon }, index) => (
		<li key={index}>
			<Link href={href} aria-label={label}>
				<div className="text-background dark:text-foreground bg-foreground dark:bg-background hover:bg-primary p-1.5 rounded-full">
					{icon}
				</div>
			</Link>
		</li>
	));
}

function buildNavLink(
	currentPath: string,
	{ href, label }: NavLink,
): React.ReactNode {
	return currentPath === href ? (
		<span key={href} className="text-gray-500">
			{label}
		</span>
	) : (
		<Link key={href} href={href}>
			{label}
		</Link>
	);
}
