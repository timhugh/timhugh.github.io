"use client";

import React, { AnchorHTMLAttributes } from "react";
import Link from "next/link";

export default function BackLink(
	props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element {
	const onClick = () => {
		window.history.back();
	};

	return (
		<Link onClick={onClick} {...props} href="#">
			{props.children}
		</Link>
	);
}
