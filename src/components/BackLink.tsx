"use client";

import React, { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackLink(
	props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element {
	const searchParams = useSearchParams();
	const backPath = searchParams.get("back");

	return (
		<Link {...props} href={backPath || "/"}>
			{props.children}
		</Link>
	);
}
