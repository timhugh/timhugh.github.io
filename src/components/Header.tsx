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
	{ href: "/blog", label: "Blog" },
	// { href: "/photos", label: "Photos" },
];

const socialIconClassName = "h-6 lg:h-4 w-6 lg:w-4";
const socialLinks: SocialLink[] = [
	{
		label: "GitHub Profile",
		href: "//github.com/timhugh",
		icon: (
			<GitHub className={socialIconClassName} aria-label="GitHub Icon" />
		),
	},
	{
		label: "LinkedIn Profile",
		href: "//linkedin.com/in/timheuett",
		icon: (
			<Linkedin
				className={socialIconClassName}
				aria-label="LinkedIn Icon"
			/>
		),
	},
	{
		label: "Instagram Profile",
		href: "//instagram.com/timhugh",
		icon: (
			<Instagram
				className={socialIconClassName}
				aria-label="Instagram Icon"
			/>
		),
	},
	{
		label: "Email",
		href: "mailto:info@timheuett.com",
		icon: <Mail className={socialIconClassName} aria-label="Email Icon" />,
	},
];

export default function Header(): React.ReactNode {
	const currentPath = usePathname();

	return (
		<header className="pt-10 pb-10">
			<div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-between">
				<div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-20">
					<h1 className="text-4xl text-center">
						<Link className="no-style" href="/">
							Tim Heuett
						</Link>
					</h1>
					{buildNavLinks(currentPath, navLinks)}
				</div>
				<ul className="list-none flex flex-row items-center pt-2 lg:pt-4 gap-2 md:mr-1">
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
			<ul className="list-none flex flex-col lg:flex-row lg:pt-2 items-center gap-6 lg:gap-14 font-serif">
				{navLinks.map((link) => buildNavLink(currentPath, link))}
			</ul>
		</nav>
	);
}

function buildSocialLinks(socialLinks: SocialLink[]): React.ReactNode {
	return socialLinks.map(({ label, href, icon }, index) => (
		<li key={index}>
			<Link href={href} target="_blank" aria-label={label}>
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
		// pb-1 to match the inactive nav links' border padding
		<span key={href} className="text-gray-500 lowercase pb-1">
			{label}
		</span>
	) : (
		<Link key={href} href={href} className="lowercase">
			{label}
		</Link>
	);
}
