"use client";

import React, { AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ForwardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

export default function ForwardLink(props: ForwardLinkProps): JSX.Element {
	const currentPath = usePathname();

	const href =
		currentPath == "/" ? props.href : `${props.href}?back=${currentPath}`;

	return (
		<Link {...props} href={href}>
			{props.children}
		</Link>
	);
}
