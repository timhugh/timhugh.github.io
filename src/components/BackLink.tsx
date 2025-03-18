"use client";

import React, { AnchorHTMLAttributes, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackLink(
	props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element {
	return (
		<Suspense>
			<LinkComponent {...props}>{props.children}</LinkComponent>
		</Suspense>
	);
}

function LinkComponent(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
	const searchParams = useSearchParams();
	const backPath = searchParams.get("back");

	return (
		<Link {...props} href={backPath || "/"}>
			{props.children}
		</Link>
	);
}
