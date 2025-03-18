"use client";

import React, { AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ForwardLink(
	props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element {
	const currentPath = usePathname();

	const href = `${props.href}?back=${currentPath}`;
	return (
		<Link {...props} href={href}>
			{props.children}
		</Link>
	);
}
